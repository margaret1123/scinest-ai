import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";
import type Stripe from "stripe";

// ─── helpers ────────────────────────────────────────────────────────────────

function getAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Order storage is not configured");
  }
  return createClient(supabaseUrl, serviceRoleKey);
}

async function upsertOrder(params: {
  userId: string;
  productId: "scinest_pro" | "scinest_founding";
  productName: string;
  amount: number;
  currency: string;
  sessionId: string;
}) {
  const admin = getAdmin();
  const { error } = await admin.from("orders").upsert(
    {
      user_id: params.userId,
      product_id: params.productId,
      product_name: params.productName,
      amount: params.amount,
      currency: params.currency,
      status: "paid",
      stripe_session_id: params.sessionId,
    },
    { onConflict: "stripe_session_id" }
  );
  if (error) {
    console.error("Order persistence failed:", error.message);
    throw error;
  }
}

async function grantPro(
  userId: string,
  opts: { customerId: string; subscriptionId: string; periodEndUnix: number }
) {
  const admin = getAdmin();
  const { error } = await admin.auth.admin.updateUserById(userId, {
    app_metadata: {
      license: "pro_subscription",
      stripe_customer_id: opts.customerId,
      stripe_subscription_id: opts.subscriptionId,
      pro_expires_at: new Date(opts.periodEndUnix * 1000).toISOString(),
      purchased_at: new Date().toISOString(),
    },
  });
  if (error) {
    console.error("License grant failed:", error.message);
    throw error;
  }
}

async function revokePro(userId: string) {
  const admin = getAdmin();
  const { data, error } = await admin.auth.admin.getUserById(userId);
  if (error || !data.user) {
    console.error("Revoke: user lookup failed:", error?.message ?? "not found");
    return;
  }
  const appMeta = (data.user.app_metadata ?? {}) as Record<string, unknown>;
  // Fall back to the remainder of the signup trial if it is still open
  const earlyBirdExpiry = appMeta.early_bird_expires_at as string | undefined;
  const nextLicense =
    earlyBirdExpiry && new Date(earlyBirdExpiry).getTime() > Date.now()
      ? "early_bird_pro"
      : "free";

  const { error: updateError } = await admin.auth.admin.updateUserById(userId, {
    app_metadata: {
      license: nextLicense,
      pro_expires_at: null,
      stripe_subscription_id: null,
      // keep stripe_customer_id for future re-subscribe checkouts
    },
  });
  if (updateError) {
    console.error("License revocation failed:", updateError.message);
    throw updateError;
  }
}

// ─── event handlers ─────────────────────────────────────────────────────────

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const productId = session.metadata?.productId;
  const userId = session.metadata?.userId || session.client_reference_id;
  if (!userId) return;

  // Legacy one-time founding purchases — keep working verbatim
  if (productId === "scinest_founding") {
    await upsertOrder({
      userId,
      productId: "scinest_founding",
      productName: "SciNest Personal · Founding Edition",
      amount: session.amount_total || 0,
      currency: session.currency || "cny",
      sessionId: session.id,
    });
    const admin = getAdmin();
    const { error } = await admin.auth.admin.updateUserById(userId, {
      app_metadata: { license: "pro_founding", purchased_at: new Date().toISOString() },
    });
    if (error) console.error("License update failed:", error.message);
    return;
  }

  // Subscription purchase
  if (productId !== "scinest_pro") return;
  if (session.payment_status !== "paid") return; // async methods are granted via invoice.paid
  if (!session.subscription || !session.customer) {
    console.error("Subscription session missing subscription/customer:", session.id);
    return;
  }

  const stripe = getStripe();
  const sub = await stripe.subscriptions.retrieve(session.subscription as string);

  await upsertOrder({
    userId,
    productId: "scinest_pro",
    productName: "SciNest Pro",
    amount: session.amount_total || 0,
    currency: session.currency || "cny",
    sessionId: session.id,
  });
  await grantPro(userId, {
    customerId: session.customer as string,
    subscriptionId: sub.id,
    periodEndUnix: sub.current_period_end,
  });
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  if (!invoice.subscription) return;
  const stripe = getStripe();
  const sub = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const userId = sub.metadata?.userId;
  if (!userId) {
    console.error("invoice.paid without userId metadata:", invoice.id);
    return;
  }
  if (sub.status !== "active" && sub.status !== "trialing") return;
  const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  await grantPro(userId, {
    customerId,
    subscriptionId: sub.id,
    periodEndUnix: sub.current_period_end,
  });
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  if (subscription.status !== "active" && subscription.status !== "trialing") return;
  const userId = subscription.metadata?.userId;
  if (!userId) return;
  const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;
  await grantPro(userId, {
    customerId,
    subscriptionId: subscription.id,
    periodEndUnix: subscription.current_period_end,
  });
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId;
  if (!userId) return;
  await revokePro(userId);
}

// ─── route ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook is not configured" }, { status: 503 });
  }

  const stripe = getStripe();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "invoice.paid":
        await handleInvoicePaid(event.data.object as Stripe.Invoice);
        break;
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.error(
          "[stripe] payment_failed",
          JSON.stringify({ invoice: invoice.id, subscription: invoice.subscription, attempt: invoice.attempt_count })
        );
        break; // dunning retries; access revoked only on final subscription.deleted
      }
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      default:
        // unknown events → 200 so Stripe never retries noise
        break;
    }
  } catch (error: unknown) {
    // 500 → Stripe retries the event
    const message = error instanceof Error ? error.message : "Webhook handler error";
    console.error("Stripe webhook handler error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

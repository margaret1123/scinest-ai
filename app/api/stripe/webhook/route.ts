import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";
import type Stripe from "stripe";

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

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const productId = session.metadata?.productId;
    const userId = session.metadata?.userId || session.client_reference_id;

    if (productId !== "scinest_founding" || !userId) {
      return NextResponse.json({ error: "Invalid checkout metadata" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json({ error: "Order storage is not configured" }, { status: 503 });
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
    const { error } = await supabaseAdmin.from("orders").upsert(
      {
        user_id: userId,
        product_id: "scinest_founding",
        product_name: "SciNest Personal · Founding Edition",
        amount: session.amount_total || 0,
        currency: session.currency || session.metadata?.market || "cny",
        status: "paid",
        stripe_session_id: session.id,
      },
      { onConflict: "stripe_session_id" }
    );

    // Update user license to pro_founding
    if (!error) {
      const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
        userId,
        { app_metadata: { license: "pro_founding", purchased_at: new Date().toISOString() } }
      );
      if (updateError) {
        console.error("License update failed:", updateError.message);
        // non-fatal: order is recorded, license can be fixed manually
      }
    }

    if (error) {
      console.error("Order persistence failed:", error.message);
      return NextResponse.json({ error: "Unable to record order" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
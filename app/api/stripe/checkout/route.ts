import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase-server";

type Market = "cny" | "usd";

const PRICE_ENV_BY_MARKET: Record<Market, string> = {
  cny: "STRIPE_PRICE_SCINEST_CNY",
  usd: "STRIPE_PRICE_SCINEST_USD",
};

function isMarket(value: unknown): value is Market {
  return value === "cny" || value === "usd";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const market: Market = body.market === undefined ? "cny" : body.market;

    if (!isMarket(market)) {
      return NextResponse.json({ error: "Invalid market" }, { status: 400 });
    }

    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user?.email) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const priceEnvName = PRICE_ENV_BY_MARKET[market];
    const priceId = process.env[priceEnvName];

    if (!priceId) {
      console.error(`Missing Stripe price environment variable: ${priceEnvName}`);
      return NextResponse.json({ error: "Checkout is not configured" }, { status: 503 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      automatic_payment_methods: { enabled: true },
      success_url: `${req.nextUrl.origin}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/dashboard?canceled=true`,
      customer_email: user.email,
      client_reference_id: user.id,
      metadata: {
        userId: user.id,
        productId: "scinest_founding",
        market,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Unable to create checkout session" }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown checkout error";
    console.error("Stripe checkout error:", message);
    return NextResponse.json({ error: "Unable to start checkout" }, { status: 500 });
  }
}

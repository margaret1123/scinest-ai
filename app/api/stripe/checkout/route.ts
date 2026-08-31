import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase-server";

type Market = "cny" | "usd";
type Plan = "monthly" | "yearly";

const PRICE_ENV_BY_MARKET_PLAN: Record<Market, Record<Plan, string>> = {
  cny: { monthly: "STRIPE_PRICE_PRO_CNY_MONTHLY", yearly: "STRIPE_PRICE_PRO_CNY_YEARLY" },
  usd: { monthly: "STRIPE_PRICE_PRO_USD_MONTHLY", yearly: "STRIPE_PRICE_PRO_USD_YEARLY" },
};

function isMarket(value: unknown): value is Market {
  return value === "cny" || value === "usd";
}

function isPlan(value: unknown): value is Plan {
  return value === "monthly" || value === "yearly";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Backward compatible: old clients post { market } only → defaults to yearly
    const market: Market = isMarket(body.market) ? body.market : "cny";
    const plan: Plan = isPlan(body.plan) ? body.plan : "yearly";

    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user?.email) {
      return NextResponse.json({ error: "请先登录后再购买。" }, { status: 401 });
    }

    const priceId = process.env[PRICE_ENV_BY_MARKET_PLAN[market][plan]];

    if (!priceId) {
      console.error(`Missing Stripe price environment variable: ${PRICE_ENV_BY_MARKET_PLAN[market][plan]}`);
      return NextResponse.json({ error: "付款配置尚未完成。" }, { status: 503 });
    }

    const appMeta = (user.app_metadata ?? {}) as Record<string, string | undefined>;
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.nextUrl.origin}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/dashboard?canceled=true`,
      // Reuse the existing Stripe customer on re-subscribe; otherwise attach by email
      ...(appMeta.stripe_customer_id
        ? { customer: appMeta.stripe_customer_id }
        : { customer_email: user.email }),
      client_reference_id: user.id,
      subscription_data: { metadata: { userId: user.id } },
      metadata: {
        userId: user.id,
        productId: "scinest_pro",
        market,
        plan,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "无法创建付款页面。" }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown checkout error";
    console.error("Stripe checkout error:", message);
    return NextResponse.json({ error: "暂时无法开始付款，请稍后再试。" }, { status: 500 });
  }
}

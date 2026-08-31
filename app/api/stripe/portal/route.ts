import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "请先登录。" }, { status: 401 });
    }

    const appMeta = (user.app_metadata ?? {}) as Record<string, string | undefined>;
    const customerId = appMeta.stripe_customer_id;

    if (!customerId) {
      return NextResponse.json(
        { error: "未找到订阅记录。请先在下方订阅 SciNest Pro。" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${req.nextUrl.origin}/dashboard?portal=true`,
      ...(process.env.STRIPE_PORTAL_CONFIG_ID
        ? { configuration: process.env.STRIPE_PORTAL_CONFIG_ID }
        : {}),
    });

    if (!session.url) {
      return NextResponse.json({ error: "暂时无法打开订阅管理页面。" }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown portal error";
    console.error("Stripe portal error:", message);
    return NextResponse.json({ error: "暂时无法打开订阅管理页面，请稍后再试。" }, { status: 500 });
  }
}

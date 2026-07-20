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
    if (process.env.SCINEST_CHECKOUT_ENABLED !== "true") {
      return NextResponse.json(
        { error: "付款功能正在完成交付验证，暂未开放。" },
        { status
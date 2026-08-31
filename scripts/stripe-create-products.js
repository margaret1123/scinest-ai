// Stripe catalog provisioning — idempotent, re-run safe
// Creates: Product "SciNest Pro" + 4 recurring Prices (CNY/USD × monthly/yearly)
//          + Customer Portal configuration (plan switching, cancel at period end)
// Usage: node scripts/stripe-create-products.js
// Key: restricted key (rk_) in C:/Users/GGPC/Desktop/stripe-rak.json as {"key":"rk_..."}
//      (override: STRIPE_RAK_PATH or STRIPE_RESTRICTED_KEY env)
const fs = require("fs");
const Stripe = require("stripe");

const RAK_PATH = process.env.STRIPE_RAK_PATH || "C:/Users/GGPC/Desktop/stripe-rak.json";
const PRODUCT_NAME = "SciNest Pro";
const HEADLINE = "Manage your SciNest Pro subscription";

const VARIANTS = [
  { market: "cny", plan: "monthly", amount: 2900, nickname: "SciNest Pro · Monthly · CNY" },
  { market: "cny", plan: "yearly", amount: 29900, nickname: "SciNest Pro · Yearly · CNY" },
  { market: "usd", plan: "monthly", amount: 900, nickname: "SciNest Pro · Monthly · USD" },
  { market: "usd", plan: "yearly", amount: 4900, nickname: "SciNest Pro · Yearly · USD" },
];

async function main() {
  const raw = fs.readFileSync(RAK_PATH, "utf8");
  const rak = JSON.parse(raw).key || process.env.STRIPE_RESTRICTED_KEY;
  if (!rak) throw new Error(`Missing RAK in ${RAK_PATH}`);
  const stripe = new Stripe(rak, { apiVersion: "2026-07-29.dahlia" });

  // 1. Product — reuse by name + metadata
  const existingProduct = (await stripe.products.list({ active: true, limit: 100 }))
    .data.find((p) => p.name === PRODUCT_NAME && p.metadata?.app === "scinest");
  const product = existingProduct || await stripe.products.create({
    name: PRODUCT_NAME,
    description: "SciNest Pro subscription — watermark-free export, layer editing, editable PPTX, unlimited projects",
    metadata: { app: "scinest", kind: "pro-subscription" },
  });

  // 2. Prices — reuse by product + metadata (market/plan)
  const listed = (await stripe.prices.list({ product: product.id, active: true, limit: 100 })).data;
  const priceIds = {};
  for (const v of VARIANTS) {
    const found = listed.find((p) => p.metadata?.market === v.market && p.metadata?.plan === v.plan);
    const price = found || await stripe.prices.create({
      product: product.id,
      currency: v.market,
      unit_amount: v.amount,
      recurring: { interval: v.plan },
      nickname: v.nickname,
      metadata: { market: v.market, plan: v.plan },
    });
    priceIds[`${v.market}_${v.plan}`] = price.id;
  }

  // 3. Portal configuration — reuse by headline, update in place
  const existingCfg = (await stripe.billingPortal.configurations.list({ limit: 100 }))
    .data.find((c) => c.business_profile?.headline === HEADLINE);
  const cfgParams = {
    business_profile: {
      headline: HEADLINE,
      privacy_policy_url: "https://scinest.app/privacy",
      terms_of_service_url: "https://scinest.app/terms",
    },
    features: {
      customer_update: { allowed_updates: ["email"], enabled: true },
      invoice_history: { enabled: true },
      payment_method_update: { enabled: true },
      subscription_update: {
        enabled: true,
        default_allowed_updates: ["price"],
        proration_behavior: "create_prorations",
        products: [{ product: product.id, prices: Object.values(priceIds) }],
      },
      subscription_cancel: {
        enabled: true,
        mode: "at_period_end",
        cancellation_reason: { enabled: true, options: ["too_expensive", "missing_features", "other"] },
      },
    },
  };
  const cfg = existingCfg
    ? await stripe.billingPortal.configurations.update(existingCfg.id, cfgParams)
    : await stripe.billingPortal.configurations.create(cfgParams);

  console.log(JSON.stringify({
    product: product.id,
    prices: priceIds,
    portalConfig: cfg.id,
  }, null, 2));
}
main().catch((e) => { console.error(e.message); process.exit(1); });

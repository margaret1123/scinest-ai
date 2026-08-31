// Vercel env provisioning for the SciNest subscription go-live.
// Reads the Stripe key from stripe-rak.json, ensures catalog + webhook endpoint exist,
// then pushes all secrets into Vercel production env via the vercel CLI (stdin pipe).
// NO secret is ever printed or passed as a command-line argument.
//
// Usage: node scripts/setup-vercel-env.js
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const Stripe = require("stripe");

const RAK_PATH = process.env.STRIPE_RAK_PATH || "C:/Users/GGPC/Desktop/stripe-rak.json";
const REPO_ROOT = "G:/版本统一/scinest-ai_new";
const ENDPOINT_URL = "https://scinest.app/api/stripe/webhook";
const EVENTS = [
  "checkout.session.completed",
  "invoice.paid",
  "invoice.payment_failed",
  "customer.subscription.updated",
  "customer.subscription.deleted",
];

function vercel(args, input) {
  const r = spawnSync("vercel", args, { cwd: REPO_ROOT, input, shell: true, encoding: "utf8" });
  const ok = r.status === 0;
  if (!ok) console.error(`  vercel ${args.join(" ")} failed: ${(r.stderr || r.stdout || "").trim().slice(0, 200)}`);
  return ok;
}

async function main() {
  const rak = JSON.parse(fs.readFileSync(RAK_PATH, "utf8")).key;
  if (!rak) throw new Error(`Missing key in ${RAK_PATH}`);
  const stripe = new Stripe(rak, { apiVersion: "2026-07-29.dahlia" });

  // 1. Ensure product + prices exist (idempotent lookup by name/metadata)
  const product = (await stripe.products.list({ active: true, limit: 100 }))
    .data.find((p) => p.name === "SciNest Pro" && p.metadata?.app === "scinest");
  if (!product) throw new Error("Product not found — run stripe-create-products.js first");
  const prices = (await stripe.prices.list({ product: product.id, active: true, limit: 100 })).data;
  const priceId = (market, plan) => {
    const p = prices.find((x) => x.metadata?.market === market && x.metadata?.plan === plan);
    if (!p) throw new Error(`Missing price ${market}_${plan}`);
    return p.id;
  };

  // 2. Ensure portal configuration exists (idempotent lookup by headline)
  const portal = (await stripe.billingPortal.configurations.list({ limit: 100 }))
    .data.find((c) => c.business_profile?.headline === "Manage your SciNest Pro subscription");
  if (!portal) throw new Error("Portal config not found — run stripe-create-products.js first");

  // 3. Recreate the webhook endpoint so we can capture the fresh whsec in memory
  const existing = (await stripe.webhookEndpoints.list({ limit: 100 })).data.filter((e) => e.url === ENDPOINT_URL);
  for (const e of existing) await stripe.webhookEndpoints.del(e.id);
  const wh = await stripe.webhookEndpoints.create({
    url: ENDPOINT_URL,
    enabled_events: EVENTS,
    description: "scinest.app production",
  });
  console.log("Webhook endpoint:", wh.id, wh.status);

  // 4. Push secrets into Vercel production env (values only via stdin)
  const setVar = (name, value) => {
    vercel(["env", "rm", name, "production", "-y"], undefined);
    const ok = vercel(["env", "add", name, "production"], value);
    console.log(`${ok ? "OK " : "FAIL"} ${name}`);
  };

  setVar("STRIPE_SECRET_KEY", rak);
  setVar("STRIPE_WEBHOOK_SECRET", wh.secret);
  setVar("STRIPE_PORTAL_CONFIG_ID", portal.id);
  setVar("STRIPE_PRICE_PRO_CNY_MONTHLY", priceId("cny", "monthly"));
  setVar("STRIPE_PRICE_PRO_CNY_YEARLY", priceId("cny", "yearly"));
  setVar("STRIPE_PRICE_PRO_USD_MONTHLY", priceId("usd", "monthly"));
  setVar("STRIPE_PRICE_PRO_USD_YEARLY", priceId("usd", "yearly"));

  // 5. Remove legacy one-time price vars
  for (const name of ["STRIPE_PRICE_SCINEST_CNY", "STRIPE_PRICE_SCINEST_USD"]) {
    vercel(["env", "rm", name, "production", "-y"], undefined);
    console.log("RM  " + name);
  }

  console.log("Done. Vercel will redeploy automatically on env change.");
}
main().catch((e) => { console.error(e.message); process.exit(1); });

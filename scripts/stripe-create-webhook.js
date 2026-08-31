// Stripe webhook endpoint registration — idempotent (updates existing URL match)
// Usage: node scripts/stripe-create-webhook.js
// Key: same stripe-rak.json as stripe-create-products.js
const fs = require("fs");
const Stripe = require("stripe");

const RAK_PATH = process.env.STRIPE_RAK_PATH || "C:/Users/GGPC/Desktop/stripe-rak.json";
const ENDPOINT_URL = "https://scinest.app/api/stripe/webhook";
const EVENTS = [
  "checkout.session.completed",
  "invoice.paid",
  "invoice.payment_failed",
  "customer.subscription.updated",
  "customer.subscription.deleted",
];

async function main() {
  const rak = JSON.parse(fs.readFileSync(RAK_PATH, "utf8")).key;
  if (!rak) throw new Error(`Missing key in ${RAK_PATH}`);
  const stripe = new Stripe(rak, { apiVersion: "2026-07-29.dahlia" });

  const existing = (await stripe.webhookEndpoints.list({ limit: 100 }))
    .data.find((e) => e.url === ENDPOINT_URL);

  const wh = existing
    ? await stripe.webhookEndpoints.update(existing.id, { enabled_events: EVENTS })
    : await stripe.webhookEndpoints.create({
        url: ENDPOINT_URL,
        enabled_events: EVENTS,
        description: "scinest.app production",
      });

  console.log(JSON.stringify({
    id: wh.id,
    url: wh.url,
    status: wh.status,
    // secret only returned on create; on update reuse the stored whsec
    secret: wh.secret || (existing ? "(unchanged — use existing whsec)" : undefined),
  }, null, 2));
}
main().catch((e) => { console.error(e.message); process.exit(1); });

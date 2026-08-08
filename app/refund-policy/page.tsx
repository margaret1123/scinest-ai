import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and remedy information for SciNest software licences and trials.",
  alternates: { canonical: "/refund-policy", languages: { "x-default": "/refund-policy" } },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Purchases"
      title="Refund Policy"
      intro="SciNest provides a trial so that users can test the product with their own materials before purchasing. This policy explains the current approach to refunds and remedies."
      updated="25 July 2026"
      sections={[
        { title: "Try before purchasing", paragraphs: ["Please use the available trial to check installation, model-provider configuration, workflow fit and output quality before purchasing a licence. Model-provider API charges are separate and are not collected or refunded by SciNest."] },
        { title: "Change-of-mind purchases", paragraphs: ["Because a software licence and digital access are supplied shortly after purchase, change-of-mind refunds are not generally offered once the licence has been activated, downloaded or materially used, unless we expressly agree otherwise."] },
        { title: "When we will review a refund or remedy", bullets: ["You were charged more than once for the same purchase.", "A licence was not delivered or cannot be activated because of a verified SciNest-side fault.", "The product has a substantial defect that we cannot remedy within a reasonable time.", "A refund or other remedy is required by applicable consumer law."] },
        { title: "What is not normally refundable", bullets: ["Third-party AI model or API charges.", "Incompatibility that was disclosed before purchase or could reasonably have been tested during the trial.", "Dissatisfaction with a particular AI model response where the software otherwise functions as described.", "Academic, publication, presentation or research outcomes.", "Purchases made in breach of the licence or acceptable-use terms."] },
        { title: "How to request a review", paragraphs: ["Use the support or account contact channel available on the SciNest website. Include the account email, purchase reference, date, a clear description of the issue and any relevant screenshots or error details. We may ask you to complete reasonable troubleshooting before deciding the appropriate remedy."] },
        { title: "Timing and payment method", paragraphs: ["Approved refunds are returned through the original payment method where possible. Processing time depends on the payment provider and financial institution."] },
        { title: "Consumer rights", paragraphs: ["Nothing in this policy limits rights or remedies that cannot lawfully be excluded. Where New Zealand consumer law applies, statutory remedies continue to apply regardless of this policy."] },
      ]}
      notice="This is the initial founding-release refund policy. It will be refined as distribution channels, licence delivery and supported markets expand."
    />
  );
}

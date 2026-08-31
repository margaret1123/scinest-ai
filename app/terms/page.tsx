import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing access to the SciNest website, trial, subscription and related services.",
  alternates: { canonical: "/terms", languages: { "x-default": "/terms" } },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      intro="These terms govern your use of the SciNest website, trial, subscription, downloads and related support provided by Margaret, a New Zealand sole trader who individually develops and operates SciNest."
      updated="25 July 2026"
      sections={[
        { title: "Operator and acceptance", paragraphs: ["SciNest is individually developed and operated by Margaret as a New Zealand sole trader. By creating an account, starting a trial, subscribing to Pro, downloading the software or using the service, you agree to these terms."] },
        { title: "Eligibility and account responsibility", bullets: ["You must provide accurate account information and keep your login details secure.", "You are responsible for activity carried out through your account and configured model-provider credentials.", "You must notify us if you reasonably believe your account or subscription has been compromised."] },
        { title: "SciNest Pro subscription", paragraphs: ["SciNest Pro is provided as a recurring subscription billed monthly or yearly by our payment provider. An active subscription grants a limited, personal, non-exclusive and non-transferable right to use Pro features while the subscription remains active and payments are current."], bullets: ["Subscriptions renew automatically each period until cancelled. You can cancel or change your plan anytime through the customer portal in your dashboard. Cancellation takes effect at the end of the current billing period; plan changes apply immediately with a prorated adjustment.", "You may not resell, sublicense, share, reverse engineer for commercial replication, bypass licence controls, or use the software to operate a competing hosted service.", "If a payment fails, access to Pro features continues during the payment provider's retry period and ends if the subscription is cancelled for non-payment."] },
        { title: "Bring your own AI provider", paragraphs: ["AI-powered tasks require a supported third-party model provider and the user’s own API key unless the product states otherwise. Provider fees, availability, policies, model behaviour and outages are separate from the SciNest subscription." ] },
        { title: "Academic and professional responsibility", paragraphs: ["SciNest assists with organising, generating, revising, visualising and presenting work. You remain responsible for checking facts, citations, calculations, originality, permissions and final submissions, and for complying with the rules of your institution, employer, journal or other relevant body."], bullets: ["SciNest does not guarantee grades, graduation, thesis approval, publication, journal acceptance, research outcomes or compliance approval.", "The service must not be used to misrepresent authorship, fabricate evidence or citations, or violate applicable academic or professional rules."] },
        { title: "Acceptable use", bullets: ["Do not use SciNest unlawfully, to infringe intellectual property, to distribute malware, to access systems without permission, or to harm others.", "Do not upload material you are not entitled to process or disclose.", "We may restrict or suspend access where reasonably necessary to protect users, the service, providers or legal compliance."] },
        { title: "Availability and changes", paragraphs: ["We may modify, improve or discontinue features. We aim to provide a reliable service but do not promise uninterrupted availability, compatibility with every device, or continued availability of any third-party model or provider."] },
        { title: "Intellectual property", paragraphs: ["SciNest software, branding, website content and product design remain owned by the operator or its licensors. You retain rights you already hold in your own materials and are responsible for the rights and permissions needed to use them."] },
        { title: "Liability and consumer rights", paragraphs: ["Nothing in these terms excludes rights or remedies that cannot lawfully be excluded, including applicable rights under New Zealand consumer law. To the maximum extent permitted by law, we are not responsible for indirect loss, lost opportunity, academic outcomes, provider charges, or decisions made from unreviewed generated content."] },
        { title: "Governing law", paragraphs: ["These terms are governed by the laws of New Zealand. Before starting formal proceedings, the parties should first try to resolve the issue through the available SciNest support channel."] },
        { title: "Changes to these terms", paragraphs: ["We may update these terms when the service, commercial model or legal requirements change. The current version will be published on this page with an updated date."] },
      ]}
      notice="These terms are an initial operational version for the subscription release. They preserve mandatory consumer rights and will be expanded when the product, distribution model or supported markets change."
    />
  );
}

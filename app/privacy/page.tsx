import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SciNest and Jiaempower Pathways Limited collect, use, store and disclose personal information.",
  alternates: { canonical: "/privacy", languages: { "x-default": "/privacy" } },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains how Jiaempower Pathways Limited — the one-person New Zealand company behind SciNest, individually developed by Margaret — handles personal information connected with the SciNest website, account, trial, purchase and support experience."
      updated="25 July 2026"
      sections={[
        {
          title: "Who we are",
          paragraphs: [
            "SciNest is individually developed by Margaret and operated through Jiaempower Pathways Limited, Margaret's one-person New Zealand company. In this policy, “SciNest”, “we”, “us” and “our” refer to Jiaempower Pathways Limited in connection with the SciNest product and website.",
          ],
        },
        {
          title: "Information we may collect",
          bullets: [
            "Account information such as your name, email address and authentication records.",
            "Purchase and licence information. Payment card details are processed by the payment provider and are not intended to be stored by SciNest.",
            "Trial, download, device and licence activation information needed to provide and protect the service.",
            "Messages, support requests and other information you choose to send us.",
            "Basic technical information such as browser, device, IP address, security logs and service error records where available.",
          ],
        },
        {
          title: "Local project files and AI providers",
          paragraphs: [
            "SciNest is designed as a local-first desktop application. Project files and generated outputs are stored locally by default.",
            "When you run an AI task, the content required for that task is sent to the model provider that you select and configure. That provider processes the content under its own terms and privacy policy. SciNest does not claim that all AI processing remains on your device.",
          ],
        },
        {
          title: "How we use information",
          bullets: [
            "To create and manage accounts, trials, purchases and software licences.",
            "To provide downloads, updates, support, security and service communications.",
            "To prevent fraud, misuse and unauthorised licence activity.",
            "To comply with legal, accounting and regulatory obligations.",
            "To improve the website and product using information that is reasonably necessary for that purpose.",
          ],
        },
        {
          title: "Service providers and disclosure",
          paragraphs: [
            "We may use service providers for hosting, authentication, payment processing, email delivery, software deployment, error handling and customer support. We disclose information only where reasonably necessary for those services, where required by law, or with your permission.",
          ],
        },
        {
          title: "Storage, security and retention",
          paragraphs: [
            "We take reasonable steps to protect personal information against loss, misuse and unauthorised access. No online system can be guaranteed completely secure.",
            "We retain personal information only for as long as reasonably needed for the purposes described in this policy, including legal, tax, security and dispute requirements.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "You may ask to access or correct personal information we hold about you. You may also ask questions or raise a privacy concern through the support or account contact channel available on the SciNest website.",
          ],
        },
        {
          title: "Changes to this policy",
          paragraphs: [
            "We may update this policy as the product, providers or legal requirements change. The current version will be published on this page with a revised update date.",
          ],
        },
      ]}
      notice="This is the current operational privacy summary for the initial SciNest website and product release. It may be expanded as additional providers, countries, analytics or product features are introduced."
    />
  );
}

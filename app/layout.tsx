import type { Metadata } from "next";
import "./globals.css";
import "./scinest-assets.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SciNest | Turn Research Materials into Editable Drafts, Figures and Defense Slides",
    template: "%s | SciNest",
  },
  description:
    "SciNest helps deadline-driven students and early researchers turn papers, drafts, rubrics and supervisor feedback into editable academic writing, scientific figures and thesis defense presentations using their own AI API.",
  keywords: [
    "thesis defense presentation",
    "paper to PowerPoint",
    "literature review assistant",
    "research proposal assistant",
    "scientific figure generator",
    "editable research presentation",
    "dissertation writing workflow",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SciNest",
    title: "SciNest | Finish the Draft, Figures and Defense Slides Before the Deadline",
    description:
      "Bring your papers, draft and requirements into one local project. Produce editable writing, scientific visuals and presentation slides with your own AI key.",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SciNest | Academic Work, Finished",
    description: "Turn existing research materials into editable writing, figures and defense slides.",
  },
  robots: { index: true, follow: true },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SciNest",
    alternateName: "科研小棉袄",
    url: siteUrl,
    inLanguage: ["en", "zh-CN"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jiaempower Pathways Limited",
    url: siteUrl,
    brand: { "@type": "Brand", name: "SciNest" },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SciNest",
    alternateName: "科研小棉袄",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Windows",
    description:
      "A local-first academic productivity application for deadline-driven students and early researchers. It turns existing papers, drafts, requirements and feedback into editable writing, scientific figures and presentation slides using the user's selected AI provider.",
    audience: {
      "@type": "Audience",
      audienceType: "Students, postgraduate researchers and early-career researchers with academic deliverables",
    },
    featureList: [
      "Editable academic writing from existing materials",
      "Scientific figure and research roadmap creation",
      "Paper-to-PowerPoint and thesis defense presentations",
      "Connected project context across writing, figures and slides",
      "Bring your own AI API",
      "Local project storage by default",
    ],
    offers: [
      { "@type": "Offer", price: "49", priceCurrency: "USD", category: "Founding licence", availability: "https://schema.org/InStock" },
      { "@type": "Offer", price: "299", priceCurrency: "CNY", category: "Founding licence", availability: "https://schema.org/InStock" },
    ],
    author: { "@type": "Organization", name: "Jiaempower Pathways Limited" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SciNest designed to help with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SciNest helps users who already have papers, references, a draft, assignment requirements or supervisor feedback finish editable academic writing, scientific figures, paper-to-PowerPoint slides and thesis defense presentations.",
        },
      },
      {
        "@type": "Question",
        name: "Does SciNest include AI model usage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The licence covers the SciNest software. Users connect their own supported AI API and pay the selected provider separately for actual usage.",
        },
      },
      {
        "@type": "Question",
        name: "Does SciNest guarantee grades, graduation or publication?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. SciNest is a research and academic-expression tool. Users must review and edit generated content, and SciNest does not guarantee grades, graduation, publication, acceptance or any academic outcome.",
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

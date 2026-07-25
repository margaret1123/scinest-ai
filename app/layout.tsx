import type { Metadata } from "next";
import "./globals.css";
import "./scinest-assets.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Thesis Writing, Scientific Figures & Defense Presentations | SciNest",
    template: "%s | SciNest",
  },
  description:
    "Turn existing papers, drafts, supervisor feedback and research materials into editable academic writing, scientific figures and thesis defense presentations. Windows desktop software with local project files and your own AI key.",
  keywords: [
    "AI thesis writing assistant",
    "thesis revision assistant",
    "thesis defense presentation generator",
    "paper to PowerPoint",
    "scientific figure generator",
    "literature review assistant",
    "research proposal writing assistant",
    "supervisor feedback revision",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SciNest",
    title: "AI Thesis Writing, Scientific Figures & Defense Presentations | SciNest",
    description: "One deadline. A thesis to revise. Figures to finish. Slides to build.",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Thesis Writing, Scientific Figures & Defense Presentations | SciNest",
    description: "Turn the research materials you already have into editable writing, figures and a defense-ready presentation.",
  },
  verification: {
    google: "7mLz2N52DJFJlAp8T_pJAJIqmuC9E92pVTkNJnG3eMM",
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
      "A Windows desktop research productivity application that helps students and early researchers turn existing papers, references, drafts, data and supervisor feedback into editable academic writing, scientific figures and thesis defense presentations.",
    featureList: [
      "Thesis and dissertation revision",
      "Literature review and research proposal workflows",
      "Scientific figure and research roadmap creation",
      "Paper-to-PowerPoint and thesis defense presentation workflows",
      "Editable outputs",
      "Local project workspace",
      "Bring your own AI model API key",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Postgraduate students, final-year students and early researchers",
    },
    offers: [
      { "@type": "Offer", price: "299", priceCurrency: "CNY", category: "Founding licence" },
      { "@type": "Offer", price: "49", priceCurrency: "USD", category: "Founding licence" },
    ],
    author: { "@type": "Organization", name: "Jiaempower Pathways Limited" },
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

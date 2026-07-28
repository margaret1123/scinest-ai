import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Thesis Writing, Scientific Figures & Defense Presentations | SciNest",
    template: "%s | SciNest",
  },
  description:
    "SciNest is a pre-launch Windows research workspace for editable academic writing, scientific figures and thesis defense presentations. Register before August 1, 2026 for 30 days of Pro when downloads open.",
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
    title: "SciNest Free opens August 1 · 30 days of Pro for early registrations",
    description: "Generate without SciNest limits. Upgrade for multiple projects, watermark-free figures, layer editing and editable PowerPoint export.",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SciNest Free opens August 1",
    description: "Register before launch and unlock 30 days of Pro. No card and no automatic charge.",
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
    releaseNotes: "Pre-launch registration is open. Windows downloads are scheduled to open on August 1, 2026.",
    description:
      "A Windows desktop research productivity application that connects academic writing, scientific figures and thesis defense presentations inside one project.",
    featureList: [
      "Unlimited SciNest generations with the user's own AI API key",
      "Thesis and dissertation revision",
      "Scientific figure generation",
      "Paper-to-PowerPoint and thesis defense presentation workflows",
      "Free plan with one active project, watermarked figure export and PDF presentation export",
      "Pro plan with multiple projects, watermark-free figures, layer editing and editable PowerPoint export",
      "Local project workspace",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Postgraduate students, final-year students and early researchers",
    },
    author: { "@type": "Organization", name: "Jiaempower Pathways Limited" },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { GoogleAnalytics } from "./google-analytics";
import "./globals.css";
import "./scinest-assets.css";
import "./home-product-entries.css";
import "./asset-recovery.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SciNest",
    title: "Write complete papers, build editable PPTX, create diagrams — with your own AI key",
    description: "Connect your own AI API key. One workspace for academic writing, presentations and scientific figures. Free download, Pro unlocked.",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Write complete papers, build editable PPTX, create diagrams",
    description: "Connect your own ChatGPT, DeepSeek or Claude API key. Your academic workspace — draft, revise, and finish. Free download, Pro unlocked.",
    images: ["/logo.png"],
  },
  title: {
    default: "Academic Research Workspace — Draft Papers, Build Decks & Create Diagrams with Your Own AI Key | SciNest",
    template: "%s | SciNest",
  },
  description:
    "A Windows desktop research workspace. Connect your own ChatGPT, DeepSeek or Claude API key to draft, revise and organize long-form academic writing, build editable presentations, and create scientific figures — all in one connected project. Free download, Pro unlocked.",
  keywords: [
    "AI academic workspace",
    "academic writing tool",
    "research writing assistant",
    "AI long-form writing",
    "editable AI PowerPoint",
    "AI diagram generator editable",
    "long-form writing workspace",
    "学术写作工具",
    "论文写作助手",
    "AI 学术工作区",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh", "x-default": "/" },
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
    releaseNotes: "SciNest Free is available for Windows. New accounts start with Pro unlocked.",
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
      <body>{children}<GoogleAnalytics /></body>
    </html>
  );
}

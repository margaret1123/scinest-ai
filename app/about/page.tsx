import type { Metadata } from "next";
import { LangSwitch } from "../lang-switch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export const metadata: Metadata = {
  title: "About SciNest — Who We Are",
  description:
    "SciNest is a free Windows AI research workspace built on one principle: you bring your own ChatGPT, DeepSeek or Claude API key — no AI-usage subscription, no generation cap.",
  alternates: {
    canonical: "/about",
    languages: { en: "/about", "zh-CN": "/zh/about", "x-default": "/about" },
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About SciNest | SciNest",
    description:
      "Why SciNest works the way it does: bring your own AI key, keep your projects local, and pay only the model provider for actual usage.",
    images: [{ url: "/scinest/hero-en.webp", width: 1280, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SciNest",
    description: "A free AI research workspace. Bring your own AI key — no AI-usage subscription, no generation cap.",
    images: ["/scinest/hero-en.webp"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About SciNest",
  url: `${siteUrl}/about`,
  description: metadata.description,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SciNest",
  url: `${siteUrl}/about`,
  inLanguage: "en",
  about: {
    "@type": "SoftwareApplication",
    name: "SciNest",
    operatingSystem: "Windows",
    applicationCategory: "ProductivityApplication",
  },
  publisher: {
    "@type": "Organization",
    name: "SciNest",
    url: siteUrl,
    founder: { "@type": "Person", name: "Margaret" },
  },
};

export default function AboutPage() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      <header style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.png" alt="SciNest logo" width={36} height={36} style={{ borderRadius: 8 }} />
          <a href="/" style={{ fontSize: 20, fontWeight: 800, color: "#0a2030", textDecoration: "none" }}>SciNest</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href="/login" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>Login</a>
        </div>
      </header>

      <main>
        <section style={{ maxWidth: 780, margin: "0 auto", padding: "48px 28px 24px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>ABOUT SCINEST</p>
          <h1 style={{ fontSize: "clamp(30px,4.4vw,46px)", lineHeight: 1.12, letterSpacing: "-.03em", margin: "16px 0 20px", fontFamily: "Georgia,Times New Roman,serif" }}>We built the AI research workspace we wished existed.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "#526974", margin: 0 }}>
            SciNest is a free Windows desktop workspace for academic writing, scientific figures and defense presentations — built for postgraduate students and early researchers who already have the materials and just need to finish.
          </p>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px" }}>
          <h2 style={{ fontSize: 24, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>Who we are</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#42606c", margin: 0 }}>
            SciNest is individually developed and operated by <strong>Margaret</strong>, a New Zealand sole trader. It began with a practicing psychological counselor: alongside clinical work they kept writing papers, proposals and reports the hard way — pasting fragments between chat windows and design tools, re-explaining the same research at every step. So they built the workspace they wanted: upload once, keep the context, finish the deliverable.
          </p>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px" }}>
          <h2 style={{ fontSize: 24, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>Why bring your own API key?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#42606c", margin: 0 }}>
            Most AI writing tools bundle AI usage into a subscription and put a meter on your generations. We chose the opposite model, for cost transparency:
          </p>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: "#42606c", margin: "12px 0 0", paddingLeft: 22 }}>
            <li>You connect your own ChatGPT, DeepSeek or Claude API key (or any OpenAI-compatible provider).</li>
            <li>SciNest has <strong>no AI-usage subscription and no generation cap</strong> — you pay your provider directly at cost. Free includes one active project; Pro is a flat ¥29/month or ¥299/year ($9/mo or $49/yr) subscription with multiple projects and watermark-free exports. Cancel anytime.</li>
            <li>You pay the model provider directly for actual usage. A full thesis draft typically costs a few dollars in API credits — not a monthly subscription.</li>
          </ul>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px" }}>
          <h2 style={{ fontSize: 24, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>What we do and don&apos;t do</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#42606c", margin: 0 }}>
            SciNest is a writing workspace, not a ghostwriting service. It drafts, structures and revises from <em>your</em> uploaded materials, and you remain responsible for the final text, its citations and its compliance with your institution&apos;s AI policy. We do not guarantee grades, approval or publication — and we will not pretend otherwise.
          </p>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px 56px" }}>
          <h2 style={{ fontSize: 24, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>Contact</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#42606c", margin: 0 }}>
            Feedback and bug reports:{" "}
            <a href="https://github.com/margaret1123/scinest-ai/issues/new/choose" target="_blank" rel="noopener noreferrer" style={{ color: "#087f72" }}>open a GitHub issue</a>.
          </p>
          <p style={{ fontSize: 13, color: "#8599a3", margin: "28px 0 0" }}>Last updated: 2026-08-31</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", padding: "24px 28px 40px", borderTop: "1px solid rgba(7,95,85,.1)" }}>
        <span style={{ fontSize: 14, color: "#8599a3" }}>SciNest — Crafted by Margaret, New Zealand</span>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>Home</a>
          <a href="/privacy" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>Terms</a>
        </nav>
      </footer>
    </div>
  );
}

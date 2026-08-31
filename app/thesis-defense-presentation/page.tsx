import type { Metadata } from "next";
import { LangSwitch } from "../lang-switch";
import { ProductBreadcrumbs, createBreadcrumbData } from "../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "Thesis Defense Presentation from Your Paper",
  description:
    "Turn your thesis into defense-ready slides with AI. Generate slides from your paper, get speaker notes, and export an editable PPTX or PDF. Start free.",
  alternates: {
    canonical: "/thesis-defense-presentation",
    languages: { en: "/thesis-defense-presentation", "zh-CN": "/zh/thesis-defense-presentation", "x-default": "/thesis-defense-presentation" },
  },
  openGraph: {
    type: "website",
    url: "/thesis-defense-presentation",
    title: "Thesis Defense Presentation from Your Paper | SciNest",
    description:
      "Upload the thesis, set slide count and time limit, review the outline, and generate defense slides with speaker notes from your own materials. Start free.",
    images: [{ url: "/scinest/ppt-ui-en.webp", width: 1280, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn your thesis into defense slides",
    description: "Generate defense slides and speaker notes from your paper. Export editable PPTX or PDF.",
    images: ["/scinest/ppt-ui-en.webp"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Thesis Defense Presentation from Your Paper",
  url: `${siteUrl}/thesis-defense-presentation`,
  description: metadata.description,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I make a thesis defense presentation from my paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload the thesis into SciNest, set the defense format, time limit and slide count, review the generated slide outline, then generate the deck. Each slide is built from your uploaded paper and project materials, and you export an editable PPTX (Pro) or PDF (Free).",
      },
    },
    {
      "@type": "Question",
      name: "Can AI generate slides directly from my thesis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — each slide is built from your uploaded paper and project materials, not a generic prompt. You can adjust the outline per slide before generation and edit any slide afterwards.",
      },
    },
    {
      "@type": "Question",
      name: "How many slides should a thesis defense have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 15–30 slides for a 20–30 minute talk. SciNest lets you set the slide count and time limit before generating, then adjust the outline per slide to fit your committee's format.",
      },
    },
    {
      "@type": "Question",
      name: "Do the slides stay editable after generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a real PPTX with editable text and replaceable images. Individual slides can be revised without regenerating the whole deck, unlike screenshot-based tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can it generate speaker notes for the defense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — each slide gets a note drafted from your paper. You can shorten or rewrite notes while rehearsing, and the notes stay attached to the slide.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for a defense — PDF or PPTX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPTX if you want to keep editing up to the last minute; PDF where your institution requires a fixed file. SciNest exports PDF on Free and editable PPTX on Pro.",
      },
    },
  ],
};

const comparisonRows = [
  ["Build time", "Days of manual copying", "Minutes to generate a first draft", "Minutes — then revise slide by slide"],
  ["Content match", "You retype everything", "Slides may drift from the paper", "Every slide is built from your uploaded thesis"],
  ["Editing after generation", "Full control, but slow", "Screenshots — regenerate everything", "Editable text, replaceable images, per-slide revision"],
  ["Speaker notes", "Written separately", "Usually missing", "Drafted per slide from your paper"],
  ["Outline control", "Full manual", "No real outline", "Review and adjust the outline before generation"],
  ["Export format", "PPTX by hand", "Image files", "Real PPTX (Pro) or PDF (Free)"],
];

const workflowSteps = [
  ["01", "Upload thesis & materials", "Add the thesis, references, figures and any committee guidelines. The workspace reads them as the source for every slide."],
  ["02", "Set defense format, time, slide count", "Enter the talk length and target slide count — a 20-minute defense, a 30-minute viva, a 10-minute paper presentation."],
  ["03", "Review the slide outline", "Check the generated outline before the deck is built. Move, merge or drop slides at outline stage — changes here cost nothing."],
  ["04", "Generate deck + speaker notes", "The workspace builds each slide from your paper and drafts a speaker note for it. Revise any slide or note in place."],
  ["05", "Rehearse and export", "Rehearse with the notes, shorten where needed, then export an editable PPTX (Pro) or PDF (Free)."],
];

const useCases = [
  "PhD defense",
  "Master's thesis defense",
  "Proposal defense",
  "Conference talk",
  "Paper presentation",
  "Viva prep",
];

const aiSummary =
  "SciNest is a Windows desktop app that turns a thesis or paper into a defense presentation. Upload the document, set slide count and time limit, review the outline, then generate defense slides and speaker notes from your own materials. Output is an editable PPTX (Pro) or PDF (Free) — not flattened images. SciNest Free: one active project. Pro: $9/month or $49/year (¥29/month or ¥299/year), multiple projects, watermark-free figures, editable PPTX export, cancel anytime. AI runs on your own ChatGPT, DeepSeek or Claude API key. Download at scinest.app.";

export default function ThesisDefensePresentationPage() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbData(siteUrl, "defense")) }} />

      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get SciNest Free</a>
        </div>
      </header>

      <main>
        <ProductBreadcrumbs current="defense" />
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>THESIS DEFENSE PRESENTATION</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,56px)", lineHeight: 1.08, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Turn Your Thesis into a<br /><em>Thesis Defense Presentation</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 680, margin: "0 auto 32px" }}>
            Upload the paper. Set the time limit and slide count. Review the outline. Then generate defense slides
            and speaker notes — from your own thesis, not a generic template.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>Build your defense deck ↗</a>
            <a href="#how-it-works" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)", display: "inline-block" }}>See how it works</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Start free · Use the AI model you prefer · No generation cap</p>
        </section>

        {/* AI summary */}
        <section style={{ maxWidth: 780, margin: "0 auto", padding: "0 28px 44px" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(7,95,85,.16)", borderLeft: "5px solid #087f72", borderRadius: 16, padding: "26px 30px" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>AI SUMMARY</p>
            <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.8, color: "#0a2030", maxWidth: 640 }}>{aiSummary}</p>
          </div>
        </section>

        {/* Value cards */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {[
              { title: "From paper to deck", desc: "Every slide is built from your uploaded thesis — outline, findings and figures stay true to what you wrote.", color: "#10a37f" },
              { title: "Real PPTX, not screenshots", desc: "Export a standard editable PPTX. Change text, swap images, reorder slides — up to the last minute.", color: "#4d6bfe" },
              { title: "Speaker notes per slide", desc: "Each slide gets a note drafted from your paper. Shorten and rehearse — the notes stay attached.", color: "#d97706" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.14)", borderRadius: 20, padding: "28px 24px", borderTop: `4px solid ${item.color}` }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 20 }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.65, fontSize: 15 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The fix */}
        <section style={{ background: "linear-gradient(180deg,#ecf8f4 0%,#dff3ec 100%)", padding: "72px 28px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>THE DEFENSE WORKFLOW</p>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.12, letterSpacing: "-.03em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
              The committee asks about your paper. Your slides should be built from it.
            </h2>
            <p style={{ fontSize: 17, color: "#42606c", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 40px" }}>
              SciNest reads your thesis as the single source of truth: outline first, then slide by slide, with speaker
              notes drafted from the same document.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, maxWidth: 780, margin: "0 auto" }}>
              {[
                ["Paper-bound slides", "Each slide is generated from your uploaded thesis and figures — findings stay consistent with what you wrote."],
                ["Defense timing & slide count", "Set the talk length and target slide count before generation. A 20-minute defense gets a 20-minute deck."],
                ["Outline review before generation", "Review and adjust the slide outline before the deck is built. Move, merge or drop slides at outline stage."],
                ["Per-slide editing", "Revise a single slide without regenerating the deck. Change text, swap images, reorder sections."],
                ["Speaker notes per slide", "Every slide gets a note drafted from your paper — shorten them while rehearsing, keep them attached."],
                ["PDF + PPTX export", "Export a real editable PPTX (Pro) or a fixed PDF (Free). No flattened screenshots."],
              ].map(([title, desc]) => (
                <div key={title} style={{ background: "rgba(255,255,255,.82)", borderRadius: 18, padding: "24px 20px", textAlign: "left", border: "1px solid rgba(7,95,85,.08)" }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: 17, letterSpacing: "-.01em" }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: "#5e6f7c", lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ maxWidth: 880, margin: "0 auto", padding: "72px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>SIDE BY SIDE</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Manual slides vs. screenshot-AI tools vs. SciNest
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>What you need</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>Manual slides</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>Screenshot-AI tools</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#087f72", fontWeight: 750, fontSize: 13 }}>SciNest</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([need, manual, ai, scinest]) => (
                  <tr key={need} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}>
                    <td style={{ padding: "14px 16px", fontWeight: 650 }}>{need}</td>
                    <td style={{ padding: "14px 16px", color: "#5e6f7c" }}>{manual}</td>
                    <td style={{ padding: "14px 16px", color: "#5e6f7c" }}>{ai}</td>
                    <td style={{ padding: "14px 16px", color: "#087f72", fontWeight: 600 }}>{scinest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" style={{ background: "#fff", padding: "72px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>HOW IT WORKS</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 44px", fontFamily: "Georgia,Times New Roman,serif" }}>
              From thesis to defense-ready deck
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {workflowSteps.map(([num, title, desc]) => (
                <div key={num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <span style={{ flex: "0 0 44px", width: 44, height: 44, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 14 }}>{num}</span>
                  <div>
                    <h3 style={{ margin: "0 0 6px", fontSize: 20, letterSpacing: "-.01em" }}>{title}</h3>
                    <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "72px 28px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>BUILT FOR</p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 32px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Every academic talk that starts from a paper
          </h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", maxWidth: 700, margin: "0 auto" }}>
            {useCases.map((u) => (
              <span key={u} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.16)", borderRadius: 999, padding: "10px 20px", fontSize: 14, fontWeight: 650, color: "#42606c" }}>{u}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>FAQ</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "14px 0 32px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Defense presentations with AI
          </h2>
          {[
            ["How do I make a thesis defense presentation from my paper?", "Upload the thesis into SciNest, set the defense format, time limit and slide count, review the generated outline, then generate the deck. Export an editable PPTX (Pro) or PDF (Free)."],
            ["Can AI generate slides directly from my thesis?", "Yes — each slide is built from your uploaded paper and project materials, not a generic prompt. Adjust the outline per slide before generation and edit any slide afterwards."],
            ["How many slides should a thesis defense have?", "Typically 15–30 slides for a 20–30 minute talk. SciNest lets you set slide count and time limit before generating, then adjust the outline to fit your committee's format."],
            ["Do the slides stay editable after generation?", "Yes — a real PPTX with editable text and replaceable images. Individual slides can be revised without regenerating the deck."],
            ["Can it generate speaker notes for the defense?", "Yes — each slide gets a note drafted from your paper. Shorten or rewrite them while rehearsing; they stay attached to the slide."],
            ["Which is better for a defense — PDF or PPTX?", "PPTX if you want to keep editing up to the last minute; PDF where your institution requires a fixed file. SciNest exports PDF on Free and PPTX on Pro."],
          ].map(([q, a]) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(7,95,85,.1)", padding: "18px 0" }}>
              <summary style={{ fontWeight: 650, fontSize: 16, cursor: "pointer", listStyle: "none" }}>{q}</summary>
              <p style={{ margin: "12px 0 0", color: "#42606c", lineHeight: 1.75, fontSize: 15 }}>{a}</p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(180deg,#0a2a30 0%,#0d2328 100%)", color: "#fff", textAlign: "center", padding: "72px 28px" }}>
          <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", lineHeight: 1.12, letterSpacing: "-.025em", margin: "0 0 14px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Your thesis. Your defense. Your deck.
          </h2>
          <p style={{ fontSize: 17, opacity: .78, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
            Build the deck from the paper you already wrote. Start free.
          </p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "16px 38px", borderRadius: 14, fontWeight: 750, fontSize: 17, textDecoration: "none", display: "inline-block" }}>Build your defense deck ↗</a>
          <p style={{ marginTop: 20, fontSize: 13, opacity: .5 }}>Start free · Windows · Use the AI model you prefer</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, color: "#5e6f7c", fontSize: 14 }}>
        <strong style={{ color: "#0a2030" }}>SciNest</strong>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#087f72", textDecoration: "none" }}>Home</a>
          <a href="/ai-paper-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI Paper Writer</a>
          <a href="/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI Long-Form Writer</a>
          <a href="/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI Editable PowerPoint</a>
          <a href="/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI Editable Images</a>
          <a href="/best-ai-tools-for-thesis-writing" style={{ color: "#087f72", textDecoration: "none" }}>Best AI Tools</a>
          <a href="/privacy" style={{ color: "#087f72", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "#087f72", textDecoration: "none" }}>Terms</a>
        </nav>
      </footer>
    </div>
  );
}

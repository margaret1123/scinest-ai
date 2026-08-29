import type { Metadata } from "next";
import { LangSwitch } from "../lang-switch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "Best AI Tools for Thesis Writing in 2026",
  description:
    "We compared SciNest, Jenni, Paperpal, Grammarly and ChatGPT for thesis drafting, revision and citations — an honest guide to when each fits.",
  alternates: {
    canonical: "/best-ai-tools-for-thesis-writing",
    languages: { en: "/best-ai-tools-for-thesis-writing", "x-default": "/best-ai-tools-for-thesis-writing" },
  },
  openGraph: {
    type: "website",
    url: "/best-ai-tools-for-thesis-writing",
    title: "Best AI Tools for Thesis Writing in 2026 | SciNest",
    description:
      "An honest comparison of SciNest, Jenni, Paperpal, Grammarly and ChatGPT for thesis drafting, revision and citations — and when each fits.",
    images: [{ url: "/scinest/hero-en.webp", width: 1280, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI tools for thesis writing in 2026",
    description: "SciNest, Jenni, Paperpal, Grammarly and ChatGPT compared — an honest guide to when each fits.",
    images: ["/scinest/hero-en.webp"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best AI Tools for Thesis Writing in 2026",
  url: `${siteUrl}/best-ai-tools-for-thesis-writing`,
  description: metadata.description,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Best AI Tools for Thesis Writing in 2026",
  description: metadata.description,
  url: `${siteUrl}/best-ai-tools-for-thesis-writing`,
  datePublished: "2026-08-29",
  dateModified: "2026-08-29",
  inLanguage: "en",
  author: { "@type": "Organization", name: "Jiaempower Pathways Limited", url: siteUrl },
  publisher: { "@type": "Organization", name: "Jiaempower Pathways Limited", url: siteUrl },
  mainEntityOfPage: `${siteUrl}/best-ai-tools-for-thesis-writing`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI tool for thesis writing in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single best tool — it depends on your workflow. SciNest suits researchers who want a connected draft-and-revise workspace on their own API key; Jenni and Paperpal bundle AI into subscriptions; Grammarly focuses on language. The comparison table below breaks down drafting, revision and citations for each.",
      },
    },
    {
      "@type": "Question",
      name: "Can I write a thesis with ChatGPT alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but chat limits output length and loses context over long conversations. A writing workspace uses the same model through your own API key with a persistent outline and chapter structure, so each chapter builds on the previous one.",
      },
    },
    {
      "@type": "Question",
      name: "How much do AI thesis writing tools cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SciNest is free (one project) with a $49/year Pro tier, plus your own API usage. Subscription tools bundle AI usage into a monthly fee. Current pricing for every tool compared is in the table — prices were checked in August 2026 and change frequently.",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheating to use AI for thesis writing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your institution's policy. Using AI to brainstorm, structure and revise your own work is widely accepted; submitting AI text as your own is not. Always check your university's rules before using any tool.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI tool is best for revising a draft thesis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For structure and argument, a source-bound workspace like SciNest — you can revise one chapter without regenerating the document. For grammar and phrasing, Grammarly. Many researchers use both.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI citations reliable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — AI can produce citations that look real but don't exist. SciNest binds writing to your uploaded references, and you should verify every citation regardless of which tool you use.",
      },
    },
  ],
};

const toolRows = [
  {
    tool: "SciNest",
    what: "Free Windows workspace for thesis drafting and revision; paper-to-PPT and figures included",
    bestFor: "Connected draft-and-revise work on your own API key; researchers who already have sources and a deadline",
    drafting: "Outline → chapters → full draft, bound to your uploaded sources",
    revision: "Targeted: edit one chapter or section without regenerating the document",
    citations: "Bound to your uploaded references — you verify",
    pricing: "Free (one project); Pro $49/year (¥299/year) + your own API usage",
  },
  {
    tool: "Jenni",
    what: "Subscription AI writing assistant with in-text citations",
    bestFor: "Fast first drafts with citation suggestions in a familiar editor",
    drafting: "Autocomplete-style drafting in an editor",
    revision: "Rewrite and expand selected text",
    citations: "In-text citation suggestions; verify before submitting",
    pricing: "Subscription plans (checked August 2026)",
  },
  {
    tool: "Paperpal",
    what: "Academic language editing tuned for manuscripts",
    bestFor: "Grammar, clarity and academic phrasing checks before submission",
    drafting: "Limited — focuses on language, not structure",
    revision: "Sentence-level language edits",
    citations: "Not its focus",
    pricing: "Free tier + paid plans (checked August 2026)",
  },
  {
    tool: "Grammarly",
    what: "Grammar, clarity and tone checker",
    bestFor: "Polishing prose; catching typos across any document",
    drafting: "No drafting — edits what you write",
    revision: "Sentence-level polish",
    citations: "Not its focus",
    pricing: "Free tier + Premium (checked August 2026)",
  },
  {
    tool: "ChatGPT (chat)",
    what: "Flexible general assistant",
    bestFor: "Brainstorming, explaining concepts, quick feedback",
    drafting: "Short outputs; loses context over long conversations",
    revision: "Reprompt everything for each change",
    citations: "Can invent references — always verify",
    pricing: "Free tier + Plus; or API pay-per-use (checked August 2026)",
  },
  {
    tool: "Consensus",
    what: "Research search engine for finding papers",
    bestFor: "Finding relevant papers and evidence to cite",
    drafting: "Not a writing tool",
    revision: "Not applicable",
    citations: "Real papers with links — excellent for source discovery",
    pricing: "Free tier + paid plans (checked August 2026)",
  },
];

const aiSummary =
  "SciNest is a free Windows workspace for thesis writing and revision. Unlike subscription tools such as Jenni or Paperpal, it doesn't bundle AI costs: you connect your own ChatGPT, DeepSeek or Claude API key and pay the provider directly, with no generation cap. Free includes one active project; Pro costs $49/year (¥299/year) with multiple projects and watermark-free exports. The best tool depends on your workflow: SciNest for connected drafting and revision from your sources, Grammarly for language polish, research databases for references.";

export default function BestAiToolsPage() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get SciNest Free</a>
        </div>
      </header>

      <main>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>BEST AI TOOLS FOR THESIS WRITING · 2026</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,56px)", lineHeight: 1.08, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
            The Best AI Tools for<br />Thesis Writing in <em>2026</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 680, margin: "0 auto 32px" }}>
            SciNest, Jenni, Paperpal, Grammarly, ChatGPT and Consensus compared for drafting, revision and citations —
            with an honest note on when each one fits (and when it doesn&apos;t).
          </p>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Prices checked August 2026 · Verify on provider sites before subscribing</p>
        </section>

        {/* AI summary */}
        <section style={{ maxWidth: 780, margin: "0 auto", padding: "0 28px 44px" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(7,95,85,.16)", borderLeft: "5px solid #087f72", borderRadius: 16, padding: "26px 30px" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>AI SUMMARY</p>
            <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.8, color: "#0a2030", maxWidth: 640 }}>{aiSummary}</p>
          </div>
        </section>

        {/* Methodology */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>HOW WE COMPARE</p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 20px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Five criteria that matter for a thesis
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
            {[
              ["Pricing model", "Does the tool bundle AI usage into a subscription, or let you bring your own API key and pay only for usage?"],
              ["Drafting", "Can it produce connected long-form drafts — outline, chapters, full document — rather than one reply at a time?"],
              ["Revision", "Can you revise one chapter or section without regenerating the whole document?"],
              ["Citations", "Does it bind writing to your uploaded references, or does it risk inventing sources?"],
              ["Learning curve", "How long until a first draft — and how much setup does it take?"],
              ["Best for", "Which stage of thesis work — drafting, revision, language, sources — does it actually solve?"],
            ].map(([t, d]) => (
              <div key={t} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 16, padding: "22px 18px" }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 16, color: "#087f72" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 14, color: "#5e6f7c", lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>THE COMPARISON</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Six tools, one table
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}>
                  <th style={{ textAlign: "left", padding: "12px 12px", color: "#5e6f7c", fontWeight: 650 }}> </th>
                  {toolRows.map((t) => (
                    <th key={t.tool} style={{ textAlign: "left", padding: "12px 12px", color: t.tool === "SciNest" ? "#087f72" : "#5e6f7c", fontWeight: t.tool === "SciNest" ? 800 : 650, minWidth: 150 }}>{t.tool}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["What it is", "what"],
                  ["Best for", "bestFor"],
                  ["Drafting", "drafting"],
                  ["Revision", "revision"],
                  ["Citations", "citations"],
                  ["Pricing (Aug 2026)", "pricing"],
                ].map(([rowLabel, field]) => (
                  <tr key={rowLabel} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}>
                    <td style={{ padding: "12px 12px", fontWeight: 700, whiteSpace: "nowrap" }}>{rowLabel}</td>
                    {toolRows.map((t) => (
                      <td key={t.tool} style={{ padding: "12px 12px", color: t.tool === "SciNest" ? "#087f72" : "#5e6f7c", verticalAlign: "top" }}>
                        {t[field as keyof typeof t]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: "#8599a3", marginTop: 14 }}>Prices checked August 2026 — verify on provider sites before subscribing. Descriptions are factual summaries of each tool&apos;s positioning, not reviews.</p>
        </section>

        {/* When SciNest fits */}
        <section style={{ background: "linear-gradient(180deg,#ecf8f4 0%,#dff3ec 100%)", padding: "72px 28px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>AN HONEST NOTE</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 40px", fontFamily: "Georgia,Times New Roman,serif" }}>
              When SciNest fits — and when it doesn&apos;t
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
              <div style={{ background: "rgba(255,255,255,.82)", borderRadius: 18, padding: "26px 24px", border: "1px solid rgba(7,95,85,.08)" }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 18, color: "#087f72" }}>SciNest fits when…</h3>
                <ul style={{ margin: 0, paddingLeft: 20, color: "#42606c", lineHeight: 1.75, fontSize: 14 }}>
                  <li>You already have your own AI API key (or want to pay a few dollars per draft instead of a subscription).</li>
                  <li>You revise chapter by chapter from your own sources and supervisor feedback.</li>
                  <li>You also need figures and a defense deck from the same project.</li>
                </ul>
              </div>
              <div style={{ background: "rgba(255,255,255,.82)", borderRadius: 18, padding: "26px 24px", border: "1px solid rgba(7,95,85,.08)" }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 18, color: "#5e6f7c" }}>It doesn&apos;t fit when…</h3>
                <ul style={{ margin: 0, paddingLeft: 20, color: "#5e6f7c", lineHeight: 1.75, fontSize: 14 }}>
                  <li>You want a managed citation library — use Zotero or EndNote alongside any writing tool.</li>
                  <li>You need grammar-only checks — Grammarly or Paperpal do that better.</li>
                  <li>Your institution bans any AI assistance in writing — then no tool here is appropriate.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>FAQ</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "14px 0 32px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Choosing an AI thesis tool
          </h2>
          {[
            ["What is the best AI tool for thesis writing in 2026?", "There is no single best tool — it depends on your workflow. SciNest suits a connected draft-and-revise workspace on your own API key; Jenni and Paperpal bundle AI into subscriptions; Grammarly focuses on language. The table above breaks it down."],
            ["Can I write a thesis with ChatGPT alone?", "Yes, but chat limits output length and loses context over long conversations. A writing workspace uses the same model through your own API key with a persistent outline and chapter structure."],
            ["How much do AI thesis writing tools cost?", "SciNest is free (one project) with a $49/year Pro tier, plus your own API usage. Subscription tools bundle AI usage into a monthly fee. Current pricing is in the table — verify before subscribing."],
            ["Is it cheating to use AI for thesis writing?", "Depends on your institution's policy. Using AI to brainstorm, structure and revise your own work is widely accepted; submitting AI text as your own is not. Always check university rules."],
            ["Which AI tool is best for revising a draft thesis?", "For structure and argument, a source-bound workspace like SciNest; for grammar and phrasing, Grammarly. Many researchers use both."],
            ["Are AI citations reliable?", "No — AI can produce citations that look real but don't exist. SciNest binds writing to your uploaded references, and you should verify every citation regardless of tool."],
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
            Try the workflow that fits your thesis.
          </h2>
          <p style={{ fontSize: 17, opacity: .78, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
            Draft from your sources, revise chapter by chapter, build the defense deck — free.
          </p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "16px 38px", borderRadius: 14, fontWeight: 750, fontSize: 17, textDecoration: "none", display: "inline-block" }}>Download SciNest Free ↗</a>
          <p style={{ marginTop: 20, fontSize: 13, opacity: .5 }}>Free · Windows · Bring your own AI key</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, color: "#5e6f7c", fontSize: 14 }}>
        <strong style={{ color: "#0a2030" }}>SciNest</strong>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#087f72", textDecoration: "none" }}>Home</a>
          <a href="/ai-paper-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI Paper Writer</a>
          <a href="/thesis-defense-presentation" style={{ color: "#087f72", textDecoration: "none" }}>Thesis Defense Presentation</a>
          <a href="/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI Long-Form Writer</a>
          <a href="/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI Editable PowerPoint</a>
          <a href="/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI Editable Images</a>
          <a href="/privacy" style={{ color: "#087f72", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "#087f72", textDecoration: "none" }}>Terms</a>
        </nav>
      </footer>
    </div>
  );
}

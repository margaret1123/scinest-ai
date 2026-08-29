import type { Metadata } from "next";
import { LangSwitch } from "../lang-switch";
import { ProductBreadcrumbs, createBreadcrumbData } from "../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "AI Paper Writer — Thesis Drafting & Revision",
  description:
    "Draft and revise your thesis with ChatGPT, DeepSeek or Claude. Upload sources once, build chapters, edit any section without regenerating. Free to start.",
  alternates: {
    canonical: "/ai-paper-writer",
    languages: { en: "/ai-paper-writer", "zh-CN": "/zh/ai-paper-writer", "x-default": "/ai-paper-writer" },
  },
  openGraph: {
    type: "website",
    url: "/ai-paper-writer",
    title: "AI Paper Writer for Thesis Drafting & Revision | SciNest",
    description:
      "An academic writing workspace that drafts and revises your thesis chapter by chapter with your own ChatGPT, DeepSeek or Claude API key. Start free.",
    images: [{ url: "/scinest/writing-ui-en.webp", width: 1280, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Write and revise your thesis with your own AI key",
    description: "Upload sources once. Draft chapter by chapter. Revise any section without regenerating.",
    images: ["/scinest/writing-ui-en.webp"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Paper Writer — Thesis Drafting & Revision",
  url: `${siteUrl}/ai-paper-writer`,
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
      name: "What is the best AI paper writer for thesis writing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best choice depends on your workflow. SciNest is a free Windows workspace that uses your own ChatGPT, DeepSeek or Claude API key with an outline → chapters → targeted revision pipeline, so you pay only API usage instead of a subscription. It keeps your outline, sources and chapters connected in one project, which a chat window cannot do.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI actually write my thesis for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI drafts and revises from your uploaded sources, but SciNest is a writing workspace, not a ghostwriting service. You remain responsible for the final text, its citations and compliance with your institution's AI policy.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to use AI for thesis revision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as an assistant: writing is bound to your uploaded papers, your project stays local by default, and you verify every claim and citation. Always follow your institution's rules on AI assistance.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an AI paper writer cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SciNest Free costs nothing and has no generation cap. Pro is $49/year (¥299/year) and adds multiple projects and watermark-free exports. AI usage is billed directly by your own API provider — typically a few dollars per full draft.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for thesis writing — ChatGPT or DeepSeek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both work. DeepSeek's API is usually the cheapest, Claude writes in a natural academic tone with a large context window, and ChatGPT is a strong all-rounder. SciNest lets you switch providers per task with the same project.",
      },
    },
    {
      "@type": "Question",
      name: "How is SciNest different from pasting my thesis into ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chat returns one short reply and loses context over long conversations. SciNest keeps outline, sources and chapters in one persistent project, so each revision builds on prior work and you can edit a single chapter without regenerating the whole document.",
      },
    },
  ],
};

const chatLimits = [
  ["Draft length", "A few hundred words per reply", "Connected chapters, drafted in sequence"],
  ["Context memory", "Lost after a long conversation", "Persistent project — outline, sources and chapters stay connected"],
  ["Source binding", "Paste snippets, lose track of which source is which", "Upload papers once; each chapter knows its sources"],
  ["Chapter revision", "Reprompt the whole chapter", "Target one section without touching the rest"],
  ["Supervisor feedback", "Re-explain everything to the model", "Bind feedback to a chapter and revise just that part"],
  ["Citations", "Hallucinated references, fake DOIs", "Bound to your uploaded references — you verify, AI doesn't invent"],
];

const workflowSteps = [
  ["01", "Define the thesis outline", "Turn your research question into chapters, sections and word targets. Adjust the structure before a single word is generated."],
  ["02", "Upload sources & supervisor feedback", "Add papers, references, notes and feedback. Bind them to specific chapters so the AI knows what belongs where."],
  ["03", "Draft chapter by chapter", "Choose ChatGPT, DeepSeek, Claude or any compatible API. Each chapter is generated in sequence, inheriting the context of the chapters before it."],
  ["04", "Revise one chapter at a time", "Respond to feedback on chapter 3 without touching chapter 5. Shorten a section, strengthen an argument, rework a paragraph."],
  ["05", "Export and submit", "Export the complete document, review every citation, polish and format for submission. The draft is yours."],
];

const modelList = [
  { name: "ChatGPT (OpenAI)", models: "GPT-4o, GPT-5, o4-mini", note: "Best all-around prose and structure" },
  { name: "DeepSeek", models: "DeepSeek-V3, DeepSeek-R1", note: "Lowest API cost, strong reasoning" },
  { name: "Claude (Anthropic)", models: "Claude Opus 5, Sonnet 5, Haiku 4.5", note: "Natural academic tone, large context window" },
];

const aiSummary =
  "SciNest is a free Windows desktop app for drafting, revising and finishing a thesis with AI. It connects to your own ChatGPT, DeepSeek or Claude API key — no SciNest subscription, no generation cap; you pay the AI provider directly for usage. Free plan: one active project. Pro: $49/year (¥299/year), multiple projects, watermark-free exports. Upload sources, build an outline, draft chapter by chapter, and revise any section without regenerating the whole document. Download free at scinest.app.";

export default function AiPaperWriterPage() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbData(siteUrl, "paperWriter")) }} />

      {/* Header */}
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get SciNest Free</a>
        </div>
      </header>

      <main>
        <ProductBreadcrumbs current="paperWriter" />
        {/* Hero */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>AI PAPER WRITER</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,56px)", lineHeight: 1.08, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Write and Revise Your Thesis<br />with an <em>AI Paper Writer</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 680, margin: "0 auto 32px" }}>
            An academic writing workspace for thesis drafting and revision. Upload your sources once, build an outline,
            draft chapter by chapter with ChatGPT, DeepSeek or Claude — and revise any section without regenerating the whole document.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>Start writing your thesis ↗</a>
            <a href="#how-it-works" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)", display: "inline-block" }}>See how it works</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Start free · Use the AI model you prefer · No generation cap</p>
        </section>

        {/* AI summary — quote-ready for LLMs */}
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
              { title: "Draft from your research question", desc: "Turn a research question into a full thesis outline, then into connected chapters — with word targets for every section.", color: "#10a37f" },
              { title: "Revise from supervisor feedback", desc: "Bind feedback to the chapter it belongs to. Revise one section without regenerating the whole document.", color: "#4d6bfe" },
              { title: "Your key, your cost", desc: "No SciNest subscription. Use ChatGPT, DeepSeek or Claude with your own API key and pay the provider directly.", color: "#d97706" },
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
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>THE THESIS WORKFLOW</p>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.12, letterSpacing: "-.03em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
              A thesis is a project, not a prompt. SciNest treats it like one.
            </h2>
            <p style={{ fontSize: 17, color: "#42606c", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 40px" }}>
              From research question to submission-ready draft: outline first, sources bound to chapters, drafting in sequence,
              revision in place — all in one academic writing workspace.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, maxWidth: 780, margin: "0 auto" }}>
              {[
                ["Thesis outline from your research question", "Define chapters, sections and word targets before generating. Fix the structure at outline stage — not after 60 pages."],
                ["Source-bound chapters", "Upload papers, references, notes and supervisor feedback. Each chapter writes from the materials you bind to it."],
                ["Supervisor-feedback revision", "Attach feedback to a chapter and revise just that part. The rest of the document stays untouched."],
                ["Literature-review section", "Summarise and connect your uploaded papers into a review section that follows your outline."],
                ["Single-chapter rewrite", "Shorten, strengthen or restructure one chapter — no need to regenerate the full document."],
                ["Submission-ready export", "Export the complete draft, verify every citation, polish and submit. The work is yours."],
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
            AI chat window vs. SciNest for thesis writing
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>What you need</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>AI chat window</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#087f72", fontWeight: 750, fontSize: 13 }}>SciNest thesis workspace</th>
                </tr>
              </thead>
              <tbody>
                {chatLimits.map(([need, chat, scinest]) => (
                  <tr key={need} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}>
                    <td style={{ padding: "14px 16px", fontWeight: 650 }}>{need}</td>
                    <td style={{ padding: "14px 16px", color: "#5e6f7c" }}>{chat}</td>
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
              From research question to submission-ready draft
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

        {/* Models */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "72px 28px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>YOUR API KEY, YOUR CHOICE</p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 40px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Works with ChatGPT, DeepSeek, Claude and any compatible API
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, maxWidth: 780, margin: "0 auto" }}>
            {modelList.map((m) => (
              <div key={m.name} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 20, padding: "28px 22px" }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 19 }}>{m.name}</h3>
                <p style={{ margin: "0 0 10px", fontSize: 13, color: "#8599a3" }}>{m.models}</p>
                <p style={{ margin: 0, fontSize: 14, color: "#42606c", lineHeight: 1.6 }}>{m.note}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, color: "#5e6f7c", fontSize: 14 }}>
            Use any OpenAI-compatible endpoint. DeepSeek API costs a fraction of ChatGPT. You control the provider, the model, and the cost.
          </p>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>FAQ</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "14px 0 32px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Thesis writing with AI
          </h2>
          {[
            ["What is the best AI paper writer for thesis writing?", "It depends on your workflow. If you want a connected draft-and-revise workspace on your own API key, SciNest fits: outline first, chapters generated in sequence, single-section revision — you pay only API usage, not a subscription."],
            ["Can AI actually write my thesis for me?", "AI drafts and revises from your uploaded sources. SciNest is a writing workspace, not a ghostwriting service — the final text, citations and compliance with your institution's AI policy are your responsibility."],
            ["Is it safe to use AI for thesis revision?", "Yes, as an assistant: writing stays bound to your uploaded papers, your project is local by default, and you verify every claim and citation. Check your institution's rules first."],
            ["How much does an AI paper writer cost?", "SciNest Free costs nothing and has no generation cap. Pro is $49/year (¥299/year). AI usage is billed by your own provider — typically a few dollars per full draft."],
            ["Which is better for thesis writing — ChatGPT or DeepSeek?", "Both work well. DeepSeek's API is usually cheapest, Claude has a natural academic tone and a large context window, ChatGPT is a strong all-rounder. SciNest lets you switch per task."],
            ["How is SciNest different from pasting my thesis into ChatGPT?", "Chat returns one short reply and loses context. SciNest keeps outline, sources and chapters in one persistent project — each revision builds on prior work, and you can edit one chapter without regenerating the rest."],
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
            Your thesis. Your outline. Your sources. Your draft.
          </h2>
          <p style={{ fontSize: 17, opacity: .78, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
            No complex prompts. No re-explaining. No copy-paste between windows. Start free.
          </p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "16px 38px", borderRadius: 14, fontWeight: 750, fontSize: 17, textDecoration: "none", display: "inline-block" }}>Start writing your thesis ↗</a>
          <p style={{ marginTop: 20, fontSize: 13, opacity: .5 }}>Start free · Windows · Use the AI model you prefer</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, color: "#5e6f7c", fontSize: 14 }}>
        <strong style={{ color: "#0a2030" }}>SciNest</strong>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#087f72", textDecoration: "none" }}>Home</a>
          <a href="/thesis-defense-presentation" style={{ color: "#087f72", textDecoration: "none" }}>Thesis Defense Presentation</a>
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

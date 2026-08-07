import type { Metadata } from "next";
import { LangSwitch } from "../lang-switch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "How to Draft a 10,000+ Word Paper with ChatGPT, DeepSeek or Claude | SciNest",
  description:
    "Connect your own AI API key. Build an editable outline, bind your sources, and draft a complete long-form paper — chapter by chapter, with persistent context. Not a chat reply.",
  alternates: {
    canonical: "/ai-long-form-writer",
    languages: { en: "/ai-long-form-writer", "zh-CN": "/zh/ai-long-form-writer", "x-default": "/ai-long-form-writer" },
  },
  openGraph: {
    type: "website",
    url: "/ai-long-form-writer",
    title: "Draft 10,000+ Word Papers with Your Own AI Key | SciNest",
    description:
      "Bring your own API key. Build the outline first, bind your sources, then draft a complete long-form paper — yours to edit, verify and submit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Write complete long papers with any AI model",
    description:
      "ChatGPT, DeepSeek and Claude all work — when you stop using the chat window.",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Long-Form Writing — Complete Papers With Any AI Model",
  url: `${siteUrl}/ai-long-form-writer`,
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
      name: "Can ChatGPT or DeepSeek actually write a 10,000-word paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with the right workflow. The chat window limits output to a few hundred words at a time and loses context over long conversations. But when you use the same API through a purpose-built writing tool that manages outlines, chapters and source materials, ChatGPT, DeepSeek and Claude can all generate complete long-form drafts. SciNest wraps your own API key and breaks the writing into a structured pipeline: outline → chapters → full draft → edit the parts that need work.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a paid ChatGPT subscription to write long papers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SciNest connects to your own API key from OpenAI, DeepSeek, Anthropic or any compatible provider. You pay the provider directly for actual API usage — there is no SciNest subscription required and no generation limit. A full thesis draft typically costs a few dollars in API credits, far less than a monthly ChatGPT Pro subscription.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from pasting my thesis into ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pasting a thesis into ChatGPT gives you a single chat reply — typically 500–1500 words that cuts off mid-sentence. You also lose context across multiple prompts, and the model has no persistent memory of your outline, sources or previous chapters. A writing workspace keeps the outline, selected materials, generated chapters and revision history connected in one project, so each chapter builds on the previous one without repeating context.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit just one chapter without regenerating the whole paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Once the full draft is generated, you can target a specific chapter, section or paragraph for revision — shorten it, strengthen the evidence, respond to supervisor feedback, or reorganise — without touching the rest of the document. This is the main advantage over a chat interface, where editing one section often means re-explaining the entire context.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with DeepSeek's free API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SciNest supports DeepSeek, OpenAI, Anthropic and any OpenAI-compatible API endpoint. If you have a DeepSeek API key, you can use it for unlimited long-form writing at DeepSeek's standard API pricing — which is significantly cheaper than most alternatives.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of long documents can I write with this?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The workflow works for any structured long-form document: thesis and dissertation chapters, literature reviews, research proposals, long essays, reports, and academic papers. As long as you can define an outline and select the source materials, you can generate a connected draft.",
      },
    },
  ],
};

const chatLimits = [
  ["Output length", "A few hundred words per reply", "Full chapters, connected across the document"],
  ["Context memory", "Lost after ~8K–32K tokens", "Persistent project — outline, sources and chapters stay connected"],
  ["Source binding", "Paste snippets, lose track of which source is which", "Select materials once; each chapter knows its sources"],
  ["Citations", "Hallucinated references, fake DOIs", "Bound to your uploaded papers and references — you verify, AI doesn't invent"],
  ["Chapter editing", "Reprompt the whole chapter", "Select a chapter or paragraph, edit only that part"],
  ["Long-document coherence", "Each reply is isolated", "Outline drives structure; later chapters inherit earlier context"],
];

const workflowSteps = [
  ["01", "Build the outline", "Define chapters, sections, word count targets and writing goals before a single word is generated. Adjust the structure until it makes sense — changes here cost nothing."],
  ["02", "Select the materials", "Upload papers, references, notes, supervisor feedback and submission requirements. Bind them to specific chapters so the AI knows what belongs where."],
  ["03", "Generate the full draft", "Choose your AI provider — ChatGPT, DeepSeek, Claude or any compatible API. The workspace creates each chapter in sequence, keeping the context connected across the entire document."],
  ["04", "Edit what needs editing", "A supervisor comment on chapter 3? Revise just that section. Need to shorten the lit review? Target it directly. The rest of the document stays untouched."],
  ["05", "Export and submit", "Export the complete document. The draft is yours — review, fact-check, polish and format for submission."],
];

const modelList = [
  { name: "ChatGPT (OpenAI)", models: "GPT-4o, GPT-5, o4-mini", note: "Best all-around prose and structure" },
  { name: "DeepSeek", models: "DeepSeek-V3, DeepSeek-R1", note: "Lowest API cost, strong reasoning" },
  { name: "Claude (Anthropic)", models: "Claude Opus 5, Sonnet 5, Haiku 4.5", note: "Natural academic tone, large context window" },
];

export default function AiLongFormWriterPage() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get SciNest Free</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>LONG-FORM AI WRITING</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,56px)", lineHeight: 1.08, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Draft a Complete 10,000+ Word Paper<br />with <em>Your Own</em> AI Key
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 680, margin: "0 auto 32px" }}>
            ChatGPT, DeepSeek and Claude can all help you draft full thesis chapters, dissertations and long essays.
            Not with the chat window — with your own API key, a proper outline, and a writing workspace that keeps every chapter connected.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>Start drafting your paper ↗</a>
            <a href="#how-it-works" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)", display: "inline-block" }}>See how it works</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Free download · Bring your own API key · No generation cap</p>
        </section>

        {/* The chat problem — brief, solution-focused */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>NO COMPLEX PROMPTS. NO CONTEXT REBUILDING.</p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", textAlign: "center", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 20px", fontFamily: "Georgia,Times New Roman,serif" }}>
            ChatGPT, DeepSeek and Claude can write 10,000-word papers — when they have the right workspace.
          </h2>
          <p style={{ textAlign: "center", fontSize: 17, color: "#526974", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 48px" }}>
            ChatGPT, DeepSeek and Claude all have the intelligence to write long papers.
            The problem is the chat window — it was built for conversation, not for managing a 15,000-word document with an outline, sources and supervisor revisions.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
            {[
              { title: "ChatGPT", desc: "Works with your own API key. Full chapters, connected across the document.", color: "#10a37f" },
              { title: "DeepSeek", desc: "Lowest API cost, strong reasoning. Same persistent outline and chapter management as every provider.", color: "#4d6bfe" },
              { title: "Claude", desc: "Natural academic tone, large context window. Bind sources to chapters and track revisions across the full document.", color: "#d97706" },
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
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>THE FIX</p>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.12, letterSpacing: "-.03em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
              Same API. Same model. A workspace where you draft the full paper — not just the next reply.
            </h2>
            <p style={{ fontSize: 17, color: "#42606c", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 40px" }}>
              SciNest connects to your own API key — OpenAI, DeepSeek, Anthropic or any compatible provider.
              It builds an editable outline first, generates chapter by chapter with persistent context, and lets you revise any section without touching the rest of the document.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, maxWidth: 780, margin: "0 auto" }}>
              {[
                ["Bring your own API key", "No subscription. No generation cap. Use ChatGPT, DeepSeek, Claude or any compatible API. You pay the provider directly."],
                ["Editable outline first", "Define chapters, sections and word targets before generating. Change the structure at any point — don't wait until 15,000 words are written to fix the organisation."],
                ["Source-bound writing", "Upload papers, references and supervisor feedback. Bind them to specific chapters. The AI writes from your materials, not from its training data."],
                ["Edit one chapter at a time", "Shorten chapter 3. Strengthen the evidence in chapter 5. Respond to feedback on one section — without regenerating the entire document."],
                ["Persistent project memory", "Outline, sources, generated chapters and revision history stay connected in one workspace. No repeating context. No copy-paste between chat windows."],
                ["Export a complete draft", "When the full draft is done, export it. Review, fact-check, polish and submit. The work is yours."],
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
            Chat window vs. writing workspace
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>What you need</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>AI chat window</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "#087f72", fontWeight: 750, fontSize: 13 }}>SciNest workspace</th>
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
              From a blank page to a complete draft — in one connected workflow
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

        {/* Models — any AI works */}
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
            Writing long papers with AI
          </h2>
          {[
            ["Can ChatGPT or DeepSeek actually write a 10,000-word paper?", "Yes — with the right workflow. The chat window limits output to a few hundred words at a time and loses context over long conversations. But when you use the same API through a purpose-built writing tool that manages outlines, chapters and source materials, ChatGPT, DeepSeek and Claude can all generate complete long-form drafts."],
            ["Do I need a paid ChatGPT subscription?", "No. SciNest connects to your own API key. You pay the provider directly for actual usage. A full thesis draft typically costs a few dollars in API credits — far less than a monthly Pro subscription."],
            ["Can I edit one chapter without touching the rest?", "Yes. Once the full draft is generated, target a specific chapter, section or paragraph for revision without regenerating the whole document."],
            ["Does this work with DeepSeek's free API?", "Yes. SciNest supports DeepSeek, OpenAI, Anthropic and any OpenAI-compatible endpoint. DeepSeek API pricing is significantly cheaper than most alternatives."],
            ["What kinds of documents can I write?", "Theses, dissertations, literature reviews, research proposals, long essays, reports — any structured long-form document with an outline and source materials."],
            ["Will the AI invent fake references?", "SciNest binds your uploaded papers and references to specific chapters. The AI writes from your materials — you verify facts and citations. You control what sources it uses."],
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
            One workspace. Your outline. Your sources. Your draft.
          </h2>
          <p style={{ fontSize: 17, opacity: .78, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
            No complex prompts. No re-explaining. No copy-paste between windows. Start free.
          </p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "16px 38px", borderRadius: 14, fontWeight: 750, fontSize: 17, textDecoration: "none", display: "inline-block" }}>Start drafting ↗</a>
          <p style={{ marginTop: 20, fontSize: 13, opacity: .5 }}>Free download · Windows · Bring your own API key</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, color: "#5e6f7c", fontSize: 14 }}>
        <strong style={{ color: "#0a2030" }}>SciNest</strong>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#087f72", textDecoration: "none" }}>Home</a>
          <a href="/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI Editable PowerPoint</a>
          <a href="/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI Editable Images</a>
          <a href="/privacy" style={{ color: "#087f72", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "#087f72", textDecoration: "none" }}>Terms</a>
        </nav>
      </footer>
    </div>
  );
}

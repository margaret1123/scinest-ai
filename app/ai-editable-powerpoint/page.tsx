import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "Create a Real, Editable PowerPoint with AI",
  description:
    "Generate a standard .PPTX file with structured slides, editable text, replaceable images and speaker notes. Not a screenshot. Not an HTML slideshow. A real PowerPoint you can open and keep editing.",
  alternates: { canonical: "/ai-editable-powerpoint" },
  openGraph: {
    type: "website",
    url: "/ai-editable-powerpoint",
    title: "Create a Real, Editable PowerPoint with AI | SciNest",
    description:
      "Standard PPTX output with editable text boxes, slide layouts, images and speaker notes. Edit the outline before generation. Revise individual slides after.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create a real, editable PowerPoint with AI",
    description: "Standard PPTX. Editable text. Replaceable images. Not a screenshot.",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Create a Real, Editable PowerPoint with AI",
  url: `${siteUrl}/ai-editable-powerpoint`,
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
      name: "Does the AI generate a real PowerPoint file I can edit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SciNest outputs a standard .PPTX file. Titles are real text boxes. Body copy is editable. Images can be replaced. Slide order can be rearranged. Open it in PowerPoint, WPS or any compatible software and keep working — no conversion needed.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from AI tools that export slides as images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many AI presentation tools render each slide as a single flattened image and embed it inside a PPTX container. The result looks like a slide but behaves like a screenshot — you cannot select text, move elements or edit content without regenerating the entire page. A real PPTX keeps titles, body text, images and shapes as separate editable objects, just like a slide you built manually.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the outline before generating the full presentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You define the presentation purpose, audience, slide count and template, then review and adjust every slide title, sequence and emphasis before generating the full deck. Fixing the outline early prevents rework later.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change one slide without regenerating the entire deck?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After generation, you can revise a single slide — change the text, swap an image, adjust the layout — without touching the rest of the presentation. This is the main advantage of structured PPTX output over image-based exports.",
      },
    },
    {
      "@type": "Question",
      name: "Does the AI use my uploaded materials to build the slides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You select which project papers, data, images and existing content belong to the presentation task. SciNest builds slides from the materials you choose, not from a generic prompt.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of presentations can I create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thesis defense, dissertation defense, research presentation, conference talk, paper-to-PowerPoint conversion, literature review summary, research proposal, course report, technical roadmap — any structured presentation with defined content and audience.",
      },
    },
  ],
};

const comparison = [
  ["Standard .PPTX file", "Flattened image or PDF inside a wrapper", "Real PPTX — open and edit natively"],
  ["Editable text", "Text is baked into a screenshot", "Select, edit, reformat text directly"],
  ["Image handling", "Fixed — replace by regenerating the slide", "Swap, resize and reposition images"],
  ["Slide order", "Regenerate the whole deck", "Drag to reorder, delete or insert slides"],
  ["Outline editing", "Skips or hides the outline step", "Review and adjust before generating"],
  ["Source material", "Vague or no source binding", "Slide content built from your selected materials"],
  ["Speaker notes", "Usually absent or one-size-fits-all", "Generated per slide, editable alongside content"],
  ["Export", "PDF, HTML or locked image-based PPTX", "Standard PPTX — no conversion, no fidelity loss"],
];

const workflow = [
  ["01", "Define the presentation", "Set the purpose, audience, time limit and slide count. Choose a thesis defense, conference talk, course report or any real use case."],
  ["02", "Select your materials", "Pick the papers, data, figures and content that belong in this presentation. The AI builds from what you choose — not everything you've ever uploaded."],
  ["03", "Edit the outline", "Review every slide title, adjust the sequence, set the emphasis for each section. Fix the story before a single slide is generated."],
  ["04", "Generate the deck", "Create slides with structured text, visual placements, supporting figures and speaker notes — all from the materials and outline you confirmed."],
  ["05", "Edit and export", "Revise individual slides, swap images, adjust text, refine speaker notes. Export the final PPTX. Open it and keep working."],
];

const useCases = [
  "Thesis defense",
  "Dissertation defense",
  "Research presentation",
  "Paper to PowerPoint",
  "Conference talk",
  "Literature review summary",
  "Research proposal pitch",
  "Course report",
  "Technical roadmap",
];

export default function AiEditablePowerpointPage() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest</a>
        <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get SciNest Free</a>
      </header>

      <main>
        {/* Hero */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>REAL PPTX · NOT A SCREENSHOT</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,56px)", lineHeight: 1.08, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Create a Real, Editable PowerPoint<br />with AI
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 680, margin: "0 auto 32px" }}>
            A standard .PPTX file with structured slides, editable text, replaceable images and speaker notes.
            Edit the outline before generation. Revise individual slides after. Open it in PowerPoint and keep working.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>Create an editable PowerPoint ↗</a>
            <a href="#how-it-works" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)", display: "inline-block" }}>See how it works</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Windows desktop · Standard PPTX export · Use your own AI key</p>
        </section>

        {/* What "real PPTX" means */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>WHAT "EDITABLE" ACTUALLY MEANS</p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", textAlign: "center", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 20px", fontFamily: "Georgia,Times New Roman,serif" }}>
            A slide you can open. Text you can select. Images you can replace.
          </h2>
          <p style={{ textAlign: "center", fontSize: 17, color: "#526974", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 48px" }}>
            Most AI presentation tools export slides as screenshots wrapped in a PPTX container.
            They look correct in the preview — but when you need to fix a typo, change a date or swap an image,
            you discover every slide is one locked picture. A real PPTX keeps every element independent and editable,
            just like a slide you built yourself.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, maxWidth: 800, margin: "0 auto" }}>
            {[
              { title: "Editable text", desc: "Select any title, bullet or paragraph and edit it directly. Fix a typo without regenerating the slide.", icon: "T" },
              { title: "Replaceable images", desc: "Swap in a different figure, chart or photo. Resize and reposition — the layout adapts.", icon: "🖼" },
              { title: "Rearrangeable slides", desc: "Change slide order, insert new slides or delete ones you don't need. The deck stays intact.", icon: "⇅" },
              { title: "Working speaker notes", desc: "Notes generated per slide, editable alongside the content. Keep refining them after export.", icon: "📝" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.14)", borderRadius: 20, padding: "28px 22px" }}>
                <div style={{ width: 40, height: 40, background: "#e6f5f1", borderRadius: 12, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 18, color: "#087f72", marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.65, fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ background: "#fff", padding: "72px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>THE DIFFERENCE</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>
              Image-based PPT vs. real editable PPTX
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>What you need</th>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>Image-based AI tools</th>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#087f72", fontWeight: 750, fontSize: 13 }}>SciNest editable PPTX</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([need, other, scinest]) => (
                    <tr key={need} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}>
                      <td style={{ padding: "14px 16px", fontWeight: 650 }}>{need}</td>
                      <td style={{ padding: "14px 16px", color: "#5e6f7c" }}>{other}</td>
                      <td style={{ padding: "14px 16px", color: "#087f72", fontWeight: 600 }}>{scinest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" style={{ maxWidth: 800, margin: "0 auto", padding: "72px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>HOW IT WORKS</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 44px", fontFamily: "Georgia,Times New Roman,serif" }}>
            From your materials to an editable PPTX — in one workflow
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {workflow.map(([num, title, desc]) => (
              <div key={num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ flex: "0 0 44px", width: 44, height: 44, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 14 }}>{num}</span>
                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 20, letterSpacing: "-.01em" }}>{title}</h3>
                  <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section style={{ background: "linear-gradient(180deg,#ecf8f4 0%,#dff3ec 100%)", padding: "72px 28px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>BUILT FOR REAL DELIVERY</p>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 14px", fontFamily: "Georgia,Times New Roman,serif" }}>
              One editable deck for the presentation you actually have to give
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 28 }}>
              {useCases.map((item) => (
                <span key={item} style={{ background: "rgba(255,255,255,.82)", border: "1px solid rgba(7,95,85,.14)", borderRadius: 999, padding: "10px 20px", fontSize: 14, fontWeight: 600, color: "#0a2030" }}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>FAQ</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "14px 0 32px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Creating editable PowerPoint presentations with AI
          </h2>
          {[
            ["Does the AI generate a real PowerPoint file I can edit?", "Yes. SciNest outputs a standard .PPTX file. Titles are real text boxes. Body copy is editable. Images can be replaced. Slide order can be rearranged. Open it in PowerPoint, WPS or any compatible software and keep working."],
            ["How is this different from tools that export slides as images?", "Many AI presentation tools render each slide as a single flattened image inside a PPTX container. The result looks like a slide but behaves like a screenshot — text cannot be selected or edited. A real PPTX keeps every element as an independent editable object."],
            ["Can I edit the outline before generating?", "Yes. Define the purpose, audience and slide count, then review and adjust every slide title and sequence before generating the full deck."],
            ["Can I change one slide without regenerating the entire presentation?", "Yes. Revise a single slide — change text, swap an image, adjust layout — without touching the rest of the deck."],
            ["Does the AI use my uploaded materials?", "Yes. Select which project papers, data and images belong to the presentation. The AI builds slides from your chosen materials, not generic prompts."],
            ["What kinds of presentations can I create?", "Thesis defense, dissertation defense, research presentation, conference talk, paper-to-PowerPoint conversion, literature review, research proposal, course report, technical roadmap — any structured presentation."],
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
            A real PowerPoint. Not a screenshot.
          </h2>
          <p style={{ fontSize: 17, opacity: .78, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
            Upload your materials. Edit the outline. Generate the deck. Open the PPTX and keep editing.
            Every slide element stays independent — just like a presentation you built yourself.
          </p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "16px 38px", borderRadius: 14, fontWeight: 750, fontSize: 17, textDecoration: "none", display: "inline-block" }}>Create an editable PowerPoint ↗</a>
          <p style={{ marginTop: 20, fontSize: 13, opacity: .5 }}>Free download · Windows · Standard PPTX export</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, color: "#5e6f7c", fontSize: 14 }}>
        <strong style={{ color: "#0a2030" }}>SciNest</strong>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#087f72", textDecoration: "none" }}>Home</a>
          <a href="/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI Long-Form Writer</a>
          <a href="/scientific-figure-generator" style={{ color: "#087f72", textDecoration: "none" }}>AI Figure Generator</a>
          <a href="/privacy" style={{ color: "#087f72", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "#087f72", textDecoration: "none" }}>Terms</a>
        </nav>
      </footer>
    </div>
  );
}

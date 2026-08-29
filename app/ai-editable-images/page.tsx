import type { Metadata } from "next";
import { LangSwitch } from "../lang-switch";
import { ProductBreadcrumbs, createBreadcrumbData } from "../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "Create Editable Images with AI — Revise, Don't Redo",
  description:
    "Generate images with editable text and movable shapes. Change a label without regenerating — revise selected areas, not the whole image. Start free.",
  alternates: {
    canonical: "/ai-editable-images",
    languages: { en: "/ai-editable-images", "zh-CN": "/zh/ai-editable-images", "x-default": "/ai-editable-images" },
  },
  openGraph: {
    type: "website",
    url: "/ai-editable-images",
    title: "Create Editable Images with AI | SciNest",
    description:
      "Layer-based AI image generation. Edit text labels, resize elements, revise selected areas — without regenerating the entire image. Start free.",
    images: [{ url: "/scinest/figures-ui-en.webp", width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create editable images with AI",
    description: "Change a label. Move an element. Revise a region. Not regenerate everything.",
    images: ["/scinest/figures-ui-en.webp"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Create Editable Images with AI",
  url: `${siteUrl}/ai-editable-images`,
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
      name: "Can I edit text labels on an AI-generated image without regenerating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SciNest generates images with editable text layers. Labels, annotations and callouts remain independent text elements — change wording, fix a typo or update terminology without regenerating the entire image. This is the core difference from pixel-based AI image generators where text is permanently baked into the output.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from DALL-E or Midjourney?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DALL-E, Midjourney and similar tools produce a single flattened pixel image. Every element — shapes, text, arrows, labels — is fused into one uneditable layer. If a label is misspelled or a client asks for a different color scheme, you must regenerate the entire image from scratch with a new prompt. SciNest keeps text, shapes and regions as separate editable layers so you can revise individual elements.",
      },
    },
    {
      "@type": "Question",
      name: "Can I resize or move individual elements after generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Supported objects — text labels, shapes, arrows, image regions — can be selected, moved, resized and repositioned directly. Change the layout without regenerating.",
      },
    },
    {
      "@type": "Question",
      name: "Can I regenerate just one part of an image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Select a region or element and use AI to revise only that part. Keep the rest of the image — labels, layout, approved sections — exactly as they were. This is called targeted revision and it is the most efficient way to iterate on complex diagrams and figures.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of images can I create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mechanism diagrams, technical flowcharts, research roadmaps, experimental procedure diagrams, conceptual frameworks, graphical abstracts, process diagrams, relationship maps — any structured visual that combines text labels, shapes, connectors and regions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reuse the images in presentations or documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Images created in SciNest can be exported and reused in presentations, papers and documents. If you are also using SciNest for presentations, figures can be reused directly within the same project without re-uploading.",
      },
    },
  ],
};

const comparison = [
  ["Text labels", "Baked into pixels — cannot select or edit", "Independent text layers — edit anytime"],
  ["Element editing", "Regenerate entire image", "Select, move, resize individual elements"],
  ["Local revision", "New prompt = new image from scratch", "Select a region, revise only that area"],
  ["Typography accuracy", "Garbled text, misspelled labels", "Real rendered text — fix a typo in one click"],
  ["Layout changes", "Start over", "Drag to reposition, resize, reorder"],
  ["Reuse in projects", "Export and re-upload to every tool", "Stays connected inside the SciNest project"],
  ["File format", "Flattened PNG/JPG", "Layered project with export options"],
];

const workflow = [
  ["01", "Define the visual", "Describe what needs to be shown — a mechanism, a process, a relationship, a timeline. The AI starts from the research logic, not decorative choices."],
  ["02", "Plan the structure", "Choose the figure type, panels, nodes, relationships, labels and key areas. Adjust the layout before the visual is generated."],
  ["03", "Generate the image", "Create the structured visual with separate layers for text, shapes, connectors and regions. Every element is independently accessible."],
  ["04", "Edit what needs editing", "Change a label. Resize a shape. Move an arrow. Revise a selected area with AI — without touching the approved parts."],
  ["05", "Export and reuse", "Export the final image. Use it in your paper, presentation or document. Changes later don't require rebuilding from nothing."],
];

const diagramTypes = [
  "Mechanism & pathway diagrams",
  "Technical flowcharts",
  "Research roadmaps",
  "Experimental procedure diagrams",
  "Conceptual frameworks",
  "Graphical abstracts",
  "Process diagrams",
  "Relationship & network maps",
  "Timeline & milestone charts",
  "Comparative schematic diagrams",
];

export default function AiEditableImagesPage() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbData(siteUrl, "figures")) }} />

      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get SciNest Free</a>
        </div>
      </header>

      <main>
        <ProductBreadcrumbs current="figures" />
        {/* Hero */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>EDITABLE IMAGES · CHANGE WHAT YOU NEED, KEEP THE REST</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,56px)", lineHeight: 1.08, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Create Editable Images with AI
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 680, margin: "0 auto 32px" }}>
            Generate images where text labels, shapes and regions stay editable.
            Change a label without regenerating. Move elements. Resize objects.
            Use AI on selected areas only — keep everything else as it is.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>Create an editable image ↗</a>
            <a href="#how-it-works" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)", display: "inline-block" }}>See how it works</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Windows desktop · Editable layers · Export and reuse anywhere</p>
        </section>

        {/* Core value props */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>BEYOND THE PIXEL</p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", textAlign: "center", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 20px", fontFamily: "Georgia,Times New Roman,serif" }}>
            AI image generation where text stays text.<br />Where every element can be revised.
          </h2>
          <p style={{ textAlign: "center", fontSize: 17, color: "#526974", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 48px" }}>
            Text stays as text. Shapes stay as separate objects.
            Change a label without regenerating. Move an element without starting over.
            Revise a selected area — the rest stays exactly as it is.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, maxWidth: 800, margin: "0 auto" }}>
            {[
              { title: "Editable text labels", desc: "Change a label, fix a typo, update terminology — without regenerating the entire image. Text layers stay independent." },
              { title: "Movable elements", desc: "Select a shape, arrow or text block and move it. Resize it. Reposition the layout without starting over." },
              { title: "Selective AI revision", desc: "Choose a region, rerun AI on just that area. The approved parts stay exactly as they are." },
              { title: "Reusable across projects", desc: "Export the image for your paper. When the presentation needs the same figure, reuse it directly — no re-upload." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.14)", borderRadius: 20, padding: "28px 22px" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 18 }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.65, fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section style={{ background: "#fff", padding: "72px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>THE DIFFERENCE</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>
              Flattened pixel output vs. editable image layers
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>What you need</th>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#5e6f7c", fontWeight: 650, fontSize: 13 }}>Pixel-based AI generators</th>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#087f72", fontWeight: 750, fontSize: 13 }}>SciNest editable images</th>
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
            From research logic to an editable visual — in one workflow
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

        {/* Diagram types */}
        <section style={{ background: "linear-gradient(180deg,#ecf8f4 0%,#dff3ec 100%)", padding: "72px 28px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>WHAT YOU CAN CREATE</p>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "16px 0 14px", fontFamily: "Georgia,Times New Roman,serif" }}>
              Diagrams, charts, frameworks — any structured visual
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 28 }}>
              {diagramTypes.map((item) => (
                <span key={item} style={{ background: "rgba(255,255,255,.82)", border: "1px solid rgba(7,95,85,.14)", borderRadius: 999, padding: "10px 20px", fontSize: 14, fontWeight: 600, color: "#0a2030" }}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>FAQ</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, letterSpacing: "-.03em", margin: "14px 0 32px", fontFamily: "Georgia,Times New Roman,serif" }}>
            Creating editable images with AI
          </h2>
          {[
            ["Can I edit text labels without regenerating?", "Yes. Labels, annotations and callouts remain independent text layers. Change wording, fix a typo or update terminology without regenerating the entire image."],
            ["How is this different from DALL-E or Midjourney?", "Pixel-based generators fuse everything into one flat image. Text is permanently baked in. A single typo means a new prompt and a new image from scratch. Editable generation keeps elements separate and revisable."],
            ["Can I move or resize individual elements?", "Yes. Text, shapes, arrows and image regions can be selected, moved, resized and repositioned. Change the layout without regenerating."],
            ["Can I regenerate just part of an image?", "Yes. Select a region, rerun AI on only that area. Approved parts stay exactly as they are."],
            ["What kinds of images can I create?", "Mechanism diagrams, flowcharts, research roadmaps, experimental procedure diagrams, conceptual frameworks, graphical abstracts, process diagrams, relationship maps — any structured visual with text and shapes."],
            ["Can I reuse images across projects?", "Yes. Export for papers and documents. Figures stay connected inside SciNest projects — reuse them in presentations without re-uploading."],
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
            Generate. Edit. Don't start over.
          </h2>
          <p style={{ fontSize: 17, opacity: .78, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
            Create images with editable text, movable elements and selective AI revision.
            Change what needs changing — keep what already works.
          </p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "16px 38px", borderRadius: 14, fontWeight: 750, fontSize: 17, textDecoration: "none", display: "inline-block" }}>Create an editable image ↗</a>
          <p style={{ marginTop: 20, fontSize: 13, opacity: .5 }}>Start free · Windows · Edit what needs editing, keep what works</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, color: "#5e6f7c", fontSize: 14 }}>
        <strong style={{ color: "#0a2030" }}>SciNest</strong>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#087f72", textDecoration: "none" }}>Home</a>
          <a href="/ai-paper-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI Paper Writer</a>
          <a href="/thesis-defense-presentation" style={{ color: "#087f72", textDecoration: "none" }}>Thesis Defense Presentation</a>
          <a href="/best-ai-tools-for-thesis-writing" style={{ color: "#087f72", textDecoration: "none" }}>Best AI Tools</a>
          <a href="/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI Long-Form Writer</a>
          <a href="/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI Editable PowerPoint</a>
          <a href="/privacy" style={{ color: "#087f72", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "#087f72", textDecoration: "none" }}>Terms</a>
        </nav>
      </footer>
    </div>
  );
}

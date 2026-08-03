import type { Metadata } from "next";
import type { CSSProperties } from "react";
import styles from "./ai-thesis-writing-assistant.module.css";
import { ProductBreadcrumbs, RelatedProductPages } from "../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";
const registerUrl = "/login?redirect=/dashboard&intent=early-bird";
const writingProofImage = "/scinest/writing-long-form-hero-en.svg";

export const metadata: Metadata = {
  title: "AI Thesis Writing Assistant With References and Long-Form Drafts | SciNest",
  description:
    "Build an editable outline, bind selected materials and references, then generate a coherent long-form academic draft in one run. Revise chapters without restarting the whole document.",
  alternates: { canonical: "/ai-thesis-writing-assistant" },
  openGraph: {
    type: "website",
    url: "/ai-thesis-writing-assistant",
    title: "AI Thesis Writing Assistant With References | SciNest",
    description:
      "From selected sources and an editable outline to a coherent 10,000-word academic draft with references and section-level revision.",
    images: [{ url: writingProofImage, width: 1280, height: 800, alt: "SciNest source-bound academic writing workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate a long academic draft from an editable outline and selected references",
    description: "Outline first. Source-bound writing. References included. Long-form generation in one run.",
    images: [writingProofImage],
  },
};

const faq = [
  ["Can SciNest generate a long academic draft in one run?", "Yes. The writing workflow is designed to produce a connected long-form draft from an approved outline rather than forcing you to prompt one paragraph at a time."],
  ["Can I edit the outline before writing starts?", "Yes. You can review chapter structure, section order, scope and writing goals before expanding the document."],
  ["Does the draft use my uploaded materials?", "You select the project materials and references that belong to the writing task. The draft is built from that selected context rather than a blank prompt."],
  ["Are references included?", "The workflow carries source and reference context into the writing process so citations and evidence can remain connected to the relevant sections. Users must still verify every citation and institutional requirement."],
  ["Can I revise only one chapter later?", "Yes. You can continue editing the document and target specific chapters or passages instead of regenerating the entire draft."],
  ["Does SciNest guarantee academic acceptance or publication?", "No. Users remain responsible for facts, references, originality, research quality and institutional AI-use rules."],
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Thesis Writing Assistant",
    url: `${siteUrl}/ai-thesis-writing-assistant`,
    description: metadata.description,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SciNest",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Windows",
    url: `${siteUrl}/ai-thesis-writing-assistant`,
    featureList: [
      "Editable academic outline",
      "Selected-material binding",
      "Reference-aware writing context",
      "Long-form draft generation",
      "Section-level revision",
      "Editable academic writing workspace",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
];

const workflow = [
  ["01", "Select the real materials", "Choose the papers, notes, existing draft, rubric and reference library that belong to this task."],
  ["02", "Build the outline", "Define the chapters, section goals, order, scope and target length before the document expands."],
  ["03", "Bind evidence and references", "Connect source context to the sections where it is needed instead of treating all uploaded files as one undifferentiated pile."],
  ["04", "Generate the long-form draft", "Expand the approved structure into a connected academic document rather than prompting one paragraph at a time."],
  ["05", "Revise the right section", "Edit a chapter, rewrite a passage or respond to feedback without discarding the confirmed structure."],
];

const proofFigureStyle: CSSProperties = {
  maxWidth: 1200,
  margin: "42px auto 0",
  padding: 14,
  border: "1px solid rgba(7, 95, 85, 0.16)",
  borderRadius: 28,
  background: "linear-gradient(145deg, #ffffff, #edf7f4)",
  boxShadow: "0 30px 80px rgba(18, 72, 77, 0.16)",
};

const proofImageStyle: CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: 18,
  border: "1px solid rgba(7, 95, 85, 0.12)",
  background: "white",
};

const proofCaptionStyle: CSSProperties = {
  margin: "14px 8px 2px",
  color: "#5e6f7c",
  fontSize: 13,
  lineHeight: 1.65,
};

export default function AiThesisWritingAssistantPage() {
  return (
    <div className={styles.page}>
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <header className={styles.header}>
        <a className={styles.brand} href="/"><span>S</span><strong>SciNest<small>Academic work, finished</small></strong></a>
        <nav aria-label="Page navigation">
          <a href="#outline">Outline first</a>
          <a href="#references">References</a>
          <a href="#long-form">Long-form</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.headerActions}><a href="/login">Sign in</a><a className={styles.smallCta} href={registerUrl}>Get SciNest Free</a></div>
      </header>

      <ProductBreadcrumbs current="writing" />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>OUTLINE FIRST · MATERIALS BOUND · REFERENCES INCLUDED</p>
            <h1>From an editable outline to a <em>10,000-word academic draft.</em></h1>
            <p className={styles.lead}>Select the materials that matter, shape the outline, connect the references and generate a coherent long-form document in one run—without prompting one chapter at a time.</p>
            <div className={styles.heroPoints}>
              {['Editable outline', 'Selected materials', 'Reference-aware', 'Long-form generation', 'Section revision'].map(item => <span key={item}>✓ {item}</span>)}
            </div>
            <div className={styles.ctas}><a className={styles.primary} href={registerUrl}>Generate my long-form draft ↗</a><a className={styles.secondary} href="#proof">See the writing workflow</a></div>
            <p className={styles.note}>Windows desktop · Bring your own AI key · Project files stay local by default</p>
          </div>

          <div className={styles.heroStage} id="proof">
            <div className={styles.stageTop}><span>SCINEST WRITING WORKSPACE</span><b>Outline → Draft → References</b></div>
            <img src={writingProofImage} alt="SciNest academic writing workspace with outline, materials and editable long-form draft" width="1280" height="800" />
            <div className={`${styles.callout} ${styles.calloutOutline}`}><b>01</b><span>Outline stays editable</span></div>
            <div className={`${styles.callout} ${styles.calloutSources}`}><b>02</b><span>Materials stay connected</span></div>
            <div className={`${styles.callout} ${styles.calloutDraft}`}><b>03</b><span>Long-form draft in one run</span></div>
          </div>
        </section>

        <section className={styles.claimStrip} aria-label="Writing capabilities">
          <div><strong>Outline</strong><span>Approve structure before expansion</span></div>
          <div><strong>Sources</strong><span>Use selected project materials</span></div>
          <div><strong>References</strong><span>Keep evidence connected to sections</span></div>
          <div><strong>10k+</strong><span>Generate long connected drafts</span></div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>THE PARAGRAPH-BY-PARAGRAPH TRAP</p><h2>A long paper should not require fifty separate prompts.</h2><p>Generic chat tools lose structure as the conversation grows. You end up copying fragments, rebuilding headings and repairing contradictions between sections.</p></div>
          <div className={styles.problemGrid}>
            <article><span>01</span><h3>Prompt one chapter</h3><p>The model forgets decisions made in earlier sections.</p></article>
            <article><span>02</span><h3>Copy the answer</h3><p>References, terminology and argument structure begin to drift.</p></article>
            <article><span>03</span><h3>Repeat the context</h3><p>Every new chat needs the same materials explained again.</p></article>
            <article><span>04</span><h3>Repair the document</h3><p>The final job becomes merging and rewriting AI fragments.</p></article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.outlineSection}`} id="outline">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>THE OUTLINE IS THE CONTROL LAYER</p>
            <h2>Decide the structure before the word count grows.</h2>
            <p>The real task screen assigns a word target to every chapter and keeps the generated structure editable before the document expands.</p>
          </div>
          <figure style={proofFigureStyle}>
            <img src="/scinest/writing-outline-overview-en.svg" alt="SciNest writing task showing selected source papers and an editable AI-generated chapter structure with word targets" width="1200" height="760" style={proofImageStyle} />
            <figcaption style={proofCaptionStyle}>Selected project papers remain visible beside the complete AI-generated structure, including chapter order, word targets and edit controls.</figcaption>
          </figure>
        </section>

        <section className={`${styles.section} ${styles.referenceSection}`} id="references">
          <div className={styles.referenceCopy}>
            <p className={styles.kicker}>MATERIALS AND REFERENCES STAY ATTACHED</p>
            <h2>Each chapter has a job, key points and an evidence area before drafting begins.</h2>
            <p>Expand a chapter to review its goal, refine the points it must cover and keep the evidence and materials area attached to that section.</p>
            <ul><li>Choose the papers included in the task.</li><li>Edit the chapter goal before generation.</li><li>Add or remove key points.</li><li>Review evidence and materials by section.</li></ul>
          </div>
          <figure style={{ ...proofFigureStyle, margin: 0 }}>
            <img src="/scinest/writing-outline-detail-en.svg" alt="SciNest expanded writing chapter plan with editable chapter goal, key points and evidence and materials area" width="1200" height="760" style={proofImageStyle} />
            <figcaption style={proofCaptionStyle}>The expanded chapter plan is the real control surface for scope, points and section-level evidence—not a decorative table of contents.</figcaption>
          </figure>
        </section>

        <section className={`${styles.section} ${styles.longForm}`} id="long-form">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>LONG-FORM MEANS ONE CONNECTED DOCUMENT</p>
            <h2>Generate the whole draft, then edit the exact passage that needs work.</h2>
            <p>The real editor keeps the Smart Outline, complete document and selected-text AI Edit in the same writing workspace.</p>
          </div>
          <div className={styles.metricRow}><div><strong>10,000+</strong><span>word long-form target</span></div><div><strong>1</strong><span>approved outline</span></div><div><strong>Selected</strong><span>materials and references</span></div><div><strong>Editable</strong><span>chapters and passages</span></div></div>
          <figure style={proofFigureStyle}>
            <img src={writingProofImage} alt="SciNest long-form academic document editor with Smart Outline, character count and selected passage AI Edit" width="1200" height="760" style={proofImageStyle} />
            <figcaption style={proofCaptionStyle}>A 100,000-character document remains inside a structured editor, with navigation by heading and targeted AI revision for the selected passage.</figcaption>
          </figure>
        </section>

        <section className={`${styles.section} ${styles.workflowSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>ONE CONTROLLED WRITING WORKFLOW</p><h2>From selected materials to a long-form draft you can continue editing.</h2></div>
          <div className={styles.workflowGrid}>{workflow.map(([number, title, body]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.revisionSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>KEEP THE DOCUMENT. CHANGE THE PART.</p><h2>A supervisor comment should not trigger a full rewrite.</h2><p>After the long-form draft exists, work on the exact chapter or passage that needs attention while keeping the approved structure and the rest of the document intact.</p></div>
          <div className={styles.commands}>{['Shorten this section', 'Strengthen the evidence', 'Rewrite this paragraph', 'Respond to supervisor feedback', 'Reorganise chapter 3', 'Keep citations while revising'].map(command => <span key={command}>{command}</span>)}</div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.sectionIntro}><p className={styles.kicker}>FAQ</p><h2>What source-bound long-form writing means in practice.</h2></div>
          <div className={styles.faq}>{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.final}><h2>Stop assembling a long paper from disconnected AI fragments.</h2><p>Build the outline, bind the materials and references, then generate the connected draft in one workflow.</p><a className={styles.lightCta} href={registerUrl}>Generate my long-form draft ↗</a></section>
      </main>

      <RelatedProductPages current="writing" />

      <footer className={styles.footer}><strong>SciNest · Academic work, finished</strong><span>Operated by Jiaempower Pathways Limited</span><a href="/">Back to SciNest</a></footer>
    </div>
  );
}

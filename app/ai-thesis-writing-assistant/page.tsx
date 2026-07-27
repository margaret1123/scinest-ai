import type { Metadata } from "next";
import styles from "./ai-thesis-writing-assistant.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";
const registerUrl = "/login?redirect=/dashboard&intent=early-bird";

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
    images: [{ url: "/scinest/writing-ui-en.webp", width: 1280, height: 800, alt: "SciNest source-bound academic writing workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate a long academic draft from an editable outline and selected references",
    description: "Outline first. Source-bound writing. References included. Long-form generation in one run.",
    images: ["/scinest/writing-ui-en.webp"],
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
        <div className={styles.headerActions}><a href="/login">Sign in</a><a className={styles.smallCta} href={registerUrl}>Claim 30 days of Pro</a></div>
      </header>

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
            <img src="/scinest/writing-ui-en.webp" alt="SciNest academic writing workspace with outline, materials and editable long-form draft" width="1280" height="800" />
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
          <div className={styles.sectionIntro}><p className={styles.kicker}>THE OUTLINE IS THE CONTROL LAYER</p><h2>Decide the structure before the word count grows.</h2><p>The outline is not a decorative table of contents. It defines what each section must achieve, which materials it can use and how the argument progresses.</p></div>
          <div className={styles.outlineDemo}>
            <ol>
              <li><b>01</b><span><strong>Introduction</strong><small>Problem, context and research objective</small></span></li>
              <li className={styles.active}><b>02</b><span><strong>Literature review</strong><small>Three themes · eight selected sources</small></span></li>
              <li><b>03</b><span><strong>Methodology</strong><small>Design, data and analytical approach</small></span></li>
              <li><b>04</b><span><strong>Results and discussion</strong><small>Evidence, interpretation and limitations</small></span></li>
              <li><b>05</b><span><strong>Conclusion</strong><small>Contribution, implications and next steps</small></span></li>
            </ol>
            <div className={styles.outlineInspector}><span>SECTION 02 · EDITABLE PLAN</span><h3>Compare the literature instead of listing it</h3><dl><div><dt>Target length</dt><dd>2,400 words</dd></div><div><dt>Selected sources</dt><dd>8 papers + project notes</dd></div><div><dt>Section job</dt><dd>Establish the gap and position the study</dd></div></dl><div className={styles.fakeButtons}><span>Move section</span><span>Change scope</span><span>Add evidence</span></div></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.referenceSection}`} id="references">
          <div className={styles.referenceCopy}><p className={styles.kicker}>MATERIALS AND REFERENCES STAY ATTACHED</p><h2>Uploading twenty papers is not the same as using the right evidence.</h2><p>Select which materials belong to the task, then connect them to the sections where they are relevant. The writing context stays tied to the project instead of disappearing after one answer.</p><ul><li>Choose the sources included in the task.</li><li>Keep source context available while drafting.</li><li>Carry reference information into relevant sections.</li><li>Review citations before final use.</li></ul></div>
          <div className={styles.referenceVisual}><div className={styles.sourceStack}><span><b>S1</b> Literature-review.pdf</span><span><b>S2</b> Methods-notes.docx</span><span><b>S3</b> Dataset-summary.xlsx</span><span><b>S4</b> Reference-library.bib</span></div><div className={styles.bindLine}>SELECTED → BOUND</div><div className={styles.paragraphCard}><small>SECTION 2.3 · DRAFT</small><p>The existing literature converges on three explanations, but the evidence remains fragmented across context, mechanism and implementation.</p><footer><span>[S1]</span><span>[S4]</span></footer></div></div>
        </section>

        <section className={`${styles.section} ${styles.longForm}`} id="long-form">
          <div className={styles.sectionIntro}><p className={styles.kicker}>LONG-FORM MEANS ONE CONNECTED DOCUMENT</p><h2>Generate the whole draft without losing the structure halfway through.</h2><p>SciNest expands the approved plan into a connected document with section goals, shared terminology and project context carried across the draft.</p></div>
          <div className={styles.metricRow}><div><strong>10,000+</strong><span>word long-form target</span></div><div><strong>1</strong><span>approved outline</span></div><div><strong>Selected</strong><span>materials and references</span></div><div><strong>Editable</strong><span>chapters and passages</span></div></div>
          <div className={styles.documentFlow}><span>Outline approved</span><i>→</i><span>Sections generated</span><i>→</i><span>References carried</span><i>→</i><span>Document revised</span></div>
        </section>

        <section className={`${styles.section} ${styles.workflowSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>ONE CONTROLLED WRITING WORKFLOW</p><h2>From selected materials to a long-form draft you can continue editing.</h2></div>
          <div className={styles.workflowGrid}>{workflow.map(([number, title, body]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.revisionSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>KEEP THE DOCUMENT. CHANGE THE PART.</p><h2>A supervisor comment should not trigger a full rewrite.</h2><p>After the long-form draft exists, you can work on the exact chapter or passage that needs attention while keeping the approved structure and the rest of the document intact.</p></div>
          <div className={styles.commands}>{['Shorten this section', 'Strengthen the evidence', 'Rewrite this paragraph', 'Respond to supervisor feedback', 'Reorganise chapter 3', 'Keep citations while revising'].map(command => <span key={command}>{command}</span>)}</div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.sectionIntro}><p className={styles.kicker}>FAQ</p><h2>What source-bound long-form writing means in practice.</h2></div>
          <div className={styles.faq}>{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.final}><h2>Stop assembling a long paper from disconnected AI fragments.</h2><p>Build the outline, bind the materials and references, then generate the connected draft in one workflow.</p><a className={styles.lightCta} href={registerUrl}>Generate my long-form draft ↗</a></section>
      </main>

      <footer className={styles.footer}><strong>SciNest · Academic work, finished</strong><span>Operated by Jiaempower Pathways Limited</span><a href="/">Back to SciNest</a></footer>
    </div>
  );
}

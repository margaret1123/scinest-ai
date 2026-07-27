import type { Metadata } from "next";
import styles from "./scientific-figure-generator.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";
const registerUrl = "/login?redirect=/dashboard&intent=early-bird";

export const metadata: Metadata = {
  title: "AI Scientific Figure Generator With Editable Layers | SciNest",
  description:
    "Generate scientific figures with separate editable layers. Drag elements, rewrite text without garbled labels, regenerate only the selected area, and keep the rest of the figure unchanged.",
  alternates: { canonical: "/scientific-figure-generator" },
  openGraph: {
    type: "website",
    url: "/scientific-figure-generator",
    title: "AI Scientific Figure Generator With Editable Layers | SciNest",
    description:
      "Create scientific figures whose layers, text and selected regions remain editable after AI generation.",
    images: [{ url: "/scinest/figures-ui-en.webp", width: 1280, height: 640, alt: "SciNest layered scientific figure editor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate scientific figures you can still edit",
    description: "Drag layers, edit text directly and regenerate only the selected area.",
    images: ["/scinest/figures-ui-en.webp"],
  },
};

const faq = [
  ["Are the generated figures flattened images?", "No. Supported figure elements are kept as separate editable layers so you can move, reorder and revise them."],
  ["Can I change labels after generation?", "Yes. Labels are editable text objects rather than text painted permanently into the image."],
  ["Why does this avoid garbled text?", "SciNest separates text from AI-generated visual content. Labels are rendered as editable text, so they are not dependent on an image model drawing letters correctly."],
  ["Can I regenerate only one part of the figure?", "Yes. Select the area or element that needs work and regenerate that part without discarding the confirmed sections."],
  ["Can I drag and rearrange elements?", "Yes. Supported layers can be selected, moved and reordered inside the figure workspace."],
  ["Can I reuse the figure in a presentation?", "Yes. Figures remain project assets and can be reused in supported presentation workflows."],
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Scientific Figure Generator With Editable Layers",
    url: `${siteUrl}/scientific-figure-generator`,
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
    url: `${siteUrl}/scientific-figure-generator`,
    featureList: [
      "Layer-based scientific figure editing",
      "Drag and reorder figure elements",
      "Editable text labels",
      "Selected-area AI regeneration",
      "Project material binding",
      "Scientific figure reuse in presentations",
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

const problems = [
  ["Wrong label", "The whole image is regenerated because the text is baked into the picture."],
  ["Wrong arrow", "A small relationship change forces another full redraw."],
  ["One weak area", "A single bad region destroys an otherwise usable figure."],
  ["No layer control", "Objects cannot be moved, reordered or reused independently."],
];

const workflow = [
  ["01", "Add the research material", "Bring in the paper, methods, notes, reference images and figure requirements."],
  ["02", "Generate the first figure", "SciNest creates the visual structure and separates supported elements into editable layers."],
  ["03", "Drag and reorganise", "Move objects, change layer order and repair the visual hierarchy without redrawing everything."],
  ["04", "Edit labels directly", "Rewrite titles, labels and annotations as normal text without asking an image model to redraw letters."],
  ["05", "Regenerate only the weak part", "Select a region, regenerate it with AI and preserve the parts already approved."],
];

export default function ScientificFigureGeneratorPage() {
  return (
    <div className={styles.page}>
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <header className={styles.header}>
        <a className={styles.brand} href="/"><span>S</span><strong>SciNest<small>Academic work, finished</small></strong></a>
        <nav aria-label="Page navigation">
          <a href="#layers">Editable layers</a>
          <a href="#regenerate">Partial regeneration</a>
          <a href="#text">Editable text</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.headerActions}>
          <a href="/login">Sign in</a>
          <a className={styles.smallCta} href={registerUrl}>Claim 30 days of Pro</a>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AI-GENERATED · LAYERED · STILL EDITABLE</p>
            <h1>Generate the figure.<br /><em>Keep control of every layer.</em></h1>
            <p className={styles.lead}>Drag elements, rewrite labels and regenerate only the selected area. SciNest keeps text and supported visual elements editable instead of locking the entire scientific figure into one image.</p>
            <div className={styles.heroPoints}>
              {['Layer drag and reorder', 'Selected-area AI regeneration', 'Editable text', 'No image-model text garbling'].map(item => <span key={item}>✓ {item}</span>)}
            </div>
            <div className={styles.ctas}>
              <a className={styles.primary} href={registerUrl}>Generate an editable figure ↗</a>
              <a className={styles.secondary} href="#layers">See how the layers work</a>
            </div>
            <p className={styles.note}>Windows desktop · Bring your own AI key · Project files stay local by default</p>
          </div>

          <div className={styles.editorStage}>
            <div className={styles.stageBar}><span>SCINEST FIGURE WORKSPACE</span><b>Layers · Text · AI selection</b></div>
            <img src="/scinest/figures-ui-en.webp" alt="SciNest scientific figure editor with editable layers and text" width="1280" height="640" />
            <div className={`${styles.callout} ${styles.calloutLayers}`}><b>01</b><span>Drag separate layers</span></div>
            <div className={`${styles.callout} ${styles.calloutText}`}><b>02</b><span>Edit text directly</span></div>
            <div className={`${styles.callout} ${styles.calloutAi}`}><b>03</b><span>Regenerate selected area</span></div>
          </div>
        </section>

        <section className={styles.claimStrip} aria-label="Core scientific figure capabilities">
          <div><strong>Layers</strong><span>Move and reorder supported elements</span></div>
          <div><strong>Selection</strong><span>Regenerate only the weak region</span></div>
          <div><strong>Text</strong><span>Rewrite labels without redrawing the image</span></div>
          <div><strong>Control</strong><span>Keep confirmed areas unchanged</span></div>
        </section>

        <section className={`${styles.section} ${styles.dark}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>THE FLATTENED-IMAGE PROBLEM</p>
            <h2>A beautiful figure stops being useful the moment one small detail changes.</h2>
            <p>Most AI image workflows treat every correction as a reason to redraw the whole image.</p>
          </div>
          <div className={styles.problemGrid}>
            {problems.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className={`${styles.section} ${styles.editorSection}`} id="layers">
          <div className={styles.editorCopy}>
            <p className={styles.kicker}>SEPARATE LAYERS, NOT ONE LOCKED IMAGE</p>
            <h2>Select it. Drag it. Reorder it. Keep editing.</h2>
            <p>The figure workspace treats supported labels, nodes, arrows and sections as separate objects instead of one flattened picture.</p>
            <ul>
              <li>Move an element without moving the whole figure.</li>
              <li>Change the order of overlapping layers.</li>
              <li>Adjust visual hierarchy after generation.</li>
              <li>Keep the approved parts while repairing one relationship.</li>
            </ul>
          </div>
          <div className={styles.layerPanel} aria-label="Layer editing demonstration">
            <div className={styles.layerPanelHeader}><span>FIGURE LAYERS</span><b>Drag to reorder</b></div>
            <div className={styles.layerRows}>
              {['Annotations', 'Validation stage', 'Mechanism arrows', 'Cell structure', 'Background'].map((layer, index) => (
                <div className={styles.layerRow} key={layer}><span className={styles.drag}>⠿</span><strong>{layer}</strong><em>Layer {5 - index}</em></div>
              ))}
            </div>
            <div className={styles.canvasMock}>
              <div className={`${styles.node} ${styles.nodeA}`}>Input</div>
              <div className={`${styles.node} ${styles.nodeB} ${styles.selected}`}>Mechanism<span className={`${styles.handle} ${styles.h1}`} /><span className={`${styles.handle} ${styles.h2}`} /></div>
              <div className={`${styles.node} ${styles.nodeC}`}>Response</div>
              <div className={`${styles.node} ${styles.nodeD}`}>Validation</div>
              <i className={`${styles.arrow} ${styles.arrow1}`} /><i className={`${styles.arrow} ${styles.arrow2}`} /><i className={`${styles.arrow} ${styles.arrow3}`} />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.aiSection}`} id="regenerate">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>AI WHERE YOU NEED IT</p>
            <h2>Regenerate the weak area—not the entire figure.</h2>
            <p>Box-select the part that needs work, describe the correction and preserve the regions already approved.</p>
          </div>
          <div className={styles.aiGrid}>
            <article className={styles.figureCard}><small>BEFORE · SELECTED REGION</small><div className={styles.figurePreview}><i className={styles.blob} /><i className={styles.cell} /><i className={styles.signal} /><span className={styles.selectionBox} /></div><p>Only the selected cell illustration needs to change.</p></article>
            <div className={styles.aiArrow}><small>AI REGENERATES</small><span>→</span><small>SELECTION ONLY</small></div>
            <article className={styles.figureCard}><small>AFTER · REST PRESERVED</small><div className={styles.figurePreview}><i className={styles.blob} /><i className={styles.cell} /><i className={styles.signal} /></div><p>The edited region changes while the confirmed composition stays in place.</p></article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.textSection}`} id="text">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>TEXT IS TEXT, NOT PIXELS</p>
            <h2>Edit the labels directly. Do not ask an image model to spell them again.</h2>
            <p>SciNest separates editable labels from the generated visual layer, avoiding the common problem of distorted or unreadable lettering inside AI images.</p>
          </div>
          <div className={styles.textGrid}>
            <article className={styles.badText}><h3>Text baked into an AI image</h3><div className={styles.garble}>Mec han1sm R3sp0nse</div><p>A spelling correction can require another full image generation—and may introduce new errors elsewhere.</p></article>
            <article className={styles.goodText}><h3>Editable SciNest label</h3><div className={styles.editableText}><span>TEXT LAYER · EDITING</span><strong>Mechanism response</strong></div><p>Click the label, rewrite it normally and keep the visual content untouched.</p></article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>MATERIALS STILL MATTER</p>
            <h2>The editing advantage starts with a figure built from the right research context.</h2>
            <p>Choose the paper, methods, notes, data and reference images that belong to the current figure task.</p>
          </div>
          <div className={styles.materialGrid}>
            <div className={styles.sourceStack}><h3>Selected materials</h3><span>PDF · Methods chapter</span><span>DOCX · Figure requirements</span><span>PNG · Approved reference style</span><span>XLSX · Results table</span></div>
            <div className={styles.materialBridge}>→</div>
            <div className={styles.artifactCard}><h3>Editable figure artifact</h3><ul><li>Layer structure</li><li>Editable labels</li><li>Selected-area regeneration</li><li>Reusable project asset</li></ul></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.aiSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>ONE CONTROLLED WORKFLOW</p><h2>Generate once. Correct precisely. Keep the result usable.</h2></div>
          <div className={styles.workflowGrid}>
            {workflow.map(([number, title, body]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.sectionIntro}><p className={styles.kicker}>FAQ</p><h2>What “editable scientific figure” means in practice.</h2></div>
          <div className={styles.faq}>
            {faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className={styles.final}>
          <h2>Do not regenerate the whole figure because one label or one region is wrong.</h2>
          <p>Generate a layered scientific figure, move the elements, edit the text and use AI only on the part that needs changing.</p>
          <a className={styles.lightCta} href={registerUrl}>Generate an editable scientific figure ↗</a>
        </section>
      </main>

      <footer className={styles.footer}><strong>SciNest · Academic work, finished</strong><span>Operated by Jiaempower Pathways Limited</span><a href="/">Back to SciNest</a></footer>
    </div>
  );
}

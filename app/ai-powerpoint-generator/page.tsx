import type { Metadata } from "next";
import styles from "./ai-powerpoint-generator.module.css";
import { ProductBreadcrumbs, RelatedProductPages } from "../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.exe";

const proofFigureStyle = {
  maxWidth: 980,
  margin: "0 auto",
  overflow: "hidden",
  border: "1px solid rgba(7, 95, 85, 0.16)",
  borderRadius: 24,
  background: "#fff",
  boxShadow: "0 24px 70px rgba(18, 72, 77, 0.12)",
} as const;
const proofImageStyle = {
  display: "block",
  width: "100%",
  height: "auto",
  maxHeight: 640,
  objectFit: "contain",
  background: "#f7fbfa",
} as const;
const proofCaptionStyle = {
  margin: 0,
  padding: "15px 20px 18px",
  color: "#5e6f7c",
  fontSize: 13,
  lineHeight: 1.65,
  borderTop: "1px solid rgba(7, 95, 85, 0.12)",
} as const;
const proofToolbarStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 1,
  background: "rgba(7, 95, 85, 0.12)",
  borderBottom: "1px solid rgba(7, 95, 85, 0.12)",
} as const;
const proofPointStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  minHeight: 54,
  padding: "12px 16px",
  background: "#f5fbf9",
  color: "#0c6d63",
  fontSize: 12,
  fontWeight: 800,
  lineHeight: 1.45,
} as const;
const proofNumberStyle = {
  display: "grid",
  width: 25,
  height: 25,
  flex: "0 0 25px",
  placeItems: "center",
  borderRadius: 999,
  background: "#079987",
  color: "#fff",
  fontSize: 10,
} as const;

export const metadata: Metadata = {
  title: "Create Real Editable PPTX with AI — Not a Screenshot, Not HTML",
  description:
    "Upload papers, documents, data and images. SciNest creates a real editable PowerPoint presentation—not an image-based PDF or HTML slideshow. Edit the outline, slides, text and visuals, then export a ready-to-use PPTX.",
  alternates: { canonical: "/ai-powerpoint-generator" },
  openGraph: {
    type: "website",
    url: "/ai-powerpoint-generator",
    title: "Create Real Editable PPTX with AI",
    description:
      "Create a real editable PowerPoint from your own materials, with source-bound content, visuals, an editable outline and WYSIWYG preview.",
    images: [{ url: "/scinest/ppt-ui-en.webp", width: 1280, height: 800, alt: "SciNest editable PowerPoint workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create a real editable PowerPoint with AI",
    description: "Not an image, PDF or HTML slideshow. Generate an editable PPTX from your own materials.",
    images: ["/scinest/ppt-ui-en.webp"],
  },
};

const faq = [
  ["Does SciNest generate a real PowerPoint file?", "Yes. The final output is a standard .pptx file that can be opened, presented and continued in Microsoft PowerPoint, WPS and compatible software."],
  ["Is every slide just one flattened image?", "No. Titles, text, images and supported slide elements remain structured for editing instead of being flattened into a single page image."],
  ["Can I edit the outline before generating the full deck?", "Yes. You can review and adjust the number of slides, order, titles and emphasis before generating the presentation."],
  ["Will SciNest use everything I upload?", "You choose which project materials belong to the current task. SciNest builds the outline and slides from the selected materials rather than treating every file as equally relevant."],
  ["Can I reuse my existing figures and images?", "Yes. Existing project images and scientific figures can be reused in the presentation where supported by the current version."],
  ["Can I keep editing after generation?", "Yes. You can continue refining the outline, slide order, titles, body copy, visuals and speaker notes before exporting."],
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI PowerPoint Generator",
    url: `${siteUrl}/ai-powerpoint-generator`,
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
    url: `${siteUrl}/ai-powerpoint-generator`,
    featureList: [
      "Real editable PPTX export",
      "Source-bound presentation generation",
      "Editable slide outline",
      "Scientific figure and image reuse",
      "WYSIWYG slide preview",
      "Slide-level revision and speaker notes",
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

const falseOutputs = [
  ["Flattened pages", "Every slide is one image. A typo can force a full-page regeneration."],
  ["HTML slideshows", "They may look fine in a browser, then shift when converted to PowerPoint."],
  ["Outline only", "You still copy text, find visuals, format pages and rebuild the deck yourself."],
  ["Unbound agents", "Uploading many files does not guarantee the right material is used or verified."],
];

const workflow = [
  ["01", "Add the real project", "Bring in papers, reports, data, images, existing slides and presentation requirements."],
  ["02", "Set the purpose", "Choose a defense, research talk, course report, conference presentation or another real use case."],
  ["03", "Review the outline", "Adjust slide count, sequence, titles, emphasis, audience and speaking time before full generation."],
  ["04", "Generate the deck", "Create slide content, visual placements, supporting figures and speaker notes from the selected materials."],
  ["05", "Edit what you see", "Refine slide text, order, images and individual pages without restarting the whole presentation."],
  ["06", "Export the PPTX", "Download a standard PowerPoint file that remains editable after it leaves SciNest."],
];

const comparison = [
  ["Standard editable PPTX", "Usually no", "Conversion can break", "Usually content only", "Yes"],
  ["Editable text and elements", "No or limited", "Mostly inside browser", "You rebuild the slides", "Yes"],
  ["Uses selected materials", "Unclear", "Varies", "May miss sources", "Source-bound"],
  ["Editable outline", "Limited", "Sometimes", "Text outline only", "Before generation"],
  ["Visual planning", "Page image", "Varies", "Separate work", "Built into slide plan"],
  ["WYSIWYG export", "Fixed but flattened", "Often changes", "Not applicable", "Preview matches slide structure"],
  ["Targeted revision", "Regenerate page", "HTML constraints", "Regenerate text", "Edit a page or selected content"],
];

export default function AiPowerPointGeneratorPage() {
  return (
    <div className={styles.page}>
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <header className={styles.header}>
        <a className={styles.brand} href="/"><span>S</span><strong>SciNest<small>Academic work, finished</small></strong></a>
        <nav aria-label="Page navigation">
          <a href="#difference">Why it is different</a>
          <a href="#materials">Your materials</a>
          <a href="#workflow">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.headerActions}>
          <a href="/login">Sign in</a>
          <a className={styles.smallCta} href={downloadUrl}>Get SciNest Free</a>
        </div>
      </header>

      <ProductBreadcrumbs current="powerpoint" />

      <main>
        <p style={{maxWidth:720, margin:"0 auto 60px", fontSize:17, lineHeight:1.7, color:"#42606c", textAlign:"center", padding:"0 28px"}}>
          SciNest creates real editable PPTX presentations from your uploaded papers, data and materials. Unlike AI tools that export each slide as a flattened image or HTML slideshow, SciNest outputs a standard PowerPoint file with editable text boxes, replaceable images, rearrangeable slides and speaker notes. Edit the outline before generation, then revise individual slides after export — all from your own AI API key.
        </p>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>REAL POWERPOINT · NOT AN IMAGE OR HTML PREVIEW</p>
            <h1>AI creates a <em>real PowerPoint.</em><br />Ready now. Editable next.</h1>
            <p className={styles.lead}>Upload papers, reports, data and images. SciNest turns the material into a presentation you can open, present and continue editing as a standard PowerPoint file.</p>
            <div className={styles.heroPoints}>
              {['Real PPTX', 'Source-bound', 'Visuals included', 'Editable outline', 'WYSIWYG'].map(item => <span key={item}>✓ {item}</span>)}
            </div>
            <div className={styles.ctas}>
              <a className={styles.primary} href={downloadUrl}>Generate my real PowerPoint ↗</a>
              <a className={styles.secondary} href="#proof">See the editable result</a>
            </div>
            <p className={styles.note}>Windows desktop · Bring your own AI key · Project files stay local by default</p>
          </div>

          <div className={styles.heroStage} id="proof">
            <div className={styles.stageTop}><span>SCI NEST PRESENTATION WORKSPACE</span><b>Export · .PPTX</b></div>
            <img src="/scinest/ppt-ui-en.webp" alt="SciNest workspace showing an editable PowerPoint presentation generated from research materials" width="1280" height="800" />
            <div className={`${styles.callout} ${styles.calloutOutline}`}><b>01</b><span>Outline stays editable</span></div>
            <div className={`${styles.callout} ${styles.calloutSources}`}><b>02</b><span>Slides stay tied to materials</span></div>
            <div className={`${styles.callout} ${styles.calloutExport}`}><b>03</b><span>Exports as real PPTX</span></div>
          </div>
        </section>

        <section className={styles.claimStrip} aria-label="Product capabilities">
          <div><strong>.PPTX</strong><span>Not a flattened PDF</span></div>
          <div><strong>Editable</strong><span>Text, sequence and supported elements</span></div>
          <div><strong>Bound</strong><span>Built from selected project materials</span></div>
          <div><strong>Visual</strong><span>Figures, images and page-level planning</span></div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="difference">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>THE OUTPUT PROBLEM</p>
            <h2>Many “AI presentations” are not presentations when the work is finished.</h2>
            <p>They look complete during generation, then hand the editing work back to you.</p>
          </div>
          <div className={styles.falseGrid}>
            {falseOutputs.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className={`${styles.section} ${styles.realFile}`}>
          <div className={styles.realCopy}>
            <p className={styles.kicker}>A REAL PRESENTATION FILE</p>
            <h2>When generation ends, the PowerPoint work does not restart.</h2>
            <p>SciNest creates structured slides instead of screenshotting every page and calling it a deck.</p>
            <ul>
              <li>Titles remain titles.</li><li>Body text remains editable.</li><li>Images can be replaced and repositioned.</li>
              <li>Slide order can be changed.</li><li>Speaker notes can continue evolving.</li><li>The final file exports as standard .pptx.</li>
            </ul>
          </div>
          <div className={styles.fileVisual} aria-label="Editable PowerPoint file structure">
            <div className={styles.fileBadge}>PPTX</div>
            <div className={styles.fileLayers}><span>Title block</span><span>Editable text</span><span>Figure slot</span><span>Speaker notes</span></div>
            <p>One presentation. Separate editable parts.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.outlineSection}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>EDIT THE STORY BEFORE THE SLIDES</p>
            <h2>Fix the outline before it becomes twenty pages of rework.</h2>
            <p>Set the purpose, audience, slide count and template, then edit the generated structure before full generation.</p>
          </div>
          <figure style={proofFigureStyle}>
            <div style={proofToolbarStyle}>
              <span style={proofPointStyle}><b style={proofNumberStyle}>01</b>Purpose, audience and page count stay visible</span>
              <span style={proofPointStyle}><b style={proofNumberStyle}>02</b>Every generated slide title remains editable</span>
              <span style={proofPointStyle}><b style={proofNumberStyle}>03</b>Expand a slide to refine its actual content</span>
            </div>
            <img src="/scinest/ppt-outline-edit-proof-en.svg" alt="SciNest PowerPoint task settings with AI optimization and an editable generated slide outline" width="1200" height="760" style={proofImageStyle} loading="lazy" decoding="async" />
            <figcaption style={proofCaptionStyle}>The real task screen keeps presentation goals, audience, page count, template and every generated slide title editable before the deck is built.</figcaption>
          </figure>
        </section>

        <section className={`${styles.section} ${styles.materialSection}`} id="materials">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>BUILT FROM YOUR SOURCES</p>
            <h2>The selected papers stay visible beside the slide they help create.</h2>
            <p>Choose the materials that belong to this presentation instead of letting an agent treat every upload as equally relevant.</p>
          </div>
          <figure style={proofFigureStyle}>
            <div style={proofToolbarStyle}>
              <span style={proofPointStyle}><b style={proofNumberStyle}>01</b>Selected papers remain inside the same workspace</span>
              <span style={proofPointStyle}><b style={proofNumberStyle}>02</b>The generated slide stays visible beside the sources</span>
              <span style={proofPointStyle}><b style={proofNumberStyle}>03</b>Visual evidence is reused instead of recreated</span>
            </div>
            <img src="/scinest/ppt-source-bound-en.svg" alt="SciNest PowerPoint editor showing selected source papers beside a generated research slide" width="1200" height="760" style={proofImageStyle} loading="lazy" decoding="async" />
            <figcaption style={proofCaptionStyle}>Selected project papers remain in the same workspace as the generated slide, its visual and its evidence context.</figcaption>
          </figure>
        </section>

        <section className={`${styles.section} ${styles.visualSection}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>TEXT ALONE IS NOT A PRESENTATION</p>
            <h2>SciNest plans where the research needs a figure, chart or visual relationship.</h2>
            <p>Existing project assets can be reused. Missing visual explanations can be built from the same project context.</p>
          </div>
          <div className={styles.visualModes}>
            <article><span>01</span><h3>Reuse existing figures</h3><p>Bring an approved scientific figure into the correct slide instead of recreating it.</p></article>
            <article><span>02</span><h3>Turn data into charts</h3><p>Use selected tables and results where a chart communicates faster than paragraphs.</p></article>
            <article><span>03</span><h3>Explain a process visually</h3><p>Convert methods, stages or relationships into a roadmap or structured diagram.</p></article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.wysiwyg}`}>
          <div className={styles.wysiwygCopy}>
            <p className={styles.kicker}>EDIT THE ACTUAL SLIDE</p>
            <h2>Select the element on the page—not a flattened screenshot of the page.</h2>
            <p>The real editor exposes slide thumbnails, text controls and selection handles so supported objects can be moved, resized and revised directly.</p>
            <div className={styles.checks}><span>✓ Select objects</span><span>✓ Move and resize</span><span>✓ Edit text</span><span>✓ Review the full deck</span></div>
          </div>
          <figure style={{ ...proofFigureStyle, margin: 0, maxWidth: 760 }}>
            <div style={proofToolbarStyle}>
              <span style={proofPointStyle}><b style={proofNumberStyle}>01</b>The selected object has its own handles</span>
              <span style={proofPointStyle}><b style={proofNumberStyle}>02</b>Move, resize or rewrite only that element</span>
            </div>
            <img src="/scinest/ppt-element-edit-en.svg" alt="SciNest PowerPoint editor with a slide title selected using real resize and rotation handles" width="1200" height="760" style={proofImageStyle} loading="lazy" decoding="async" />
            <figcaption style={proofCaptionStyle}>The selected title remains an independent slide object with visible handles for direct editing and positioning.</figcaption>
          </figure>
        </section>

        <section className={`${styles.section} ${styles.revisionSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>EDIT THE PART THAT NEEDS EDITING</p><h2>One wrong number should not regenerate the whole deck.</h2></div>
          <div className={styles.revisionCommands}>{["Shorten this slide", "Move slide 3 after slide 5", "Replace this visual", "Turn this table into a chart", "Add speaker notes", "Regenerate this page only"].map(command => <span key={command}>{command}</span>)}</div>
        </section>

        <section className={`${styles.section} ${styles.workflowSection}`} id="workflow">
          <div className={styles.sectionIntro}><p className={styles.kicker}>ONE CONTINUOUS WORKFLOW</p><h2>From real materials to a real PowerPoint—without rebuilding the presentation in five tools.</h2></div>
          <div className={styles.workflowGrid}>{workflow.map(([number, title, body]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.comparisonSection}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>NOT ALL “PRESENTATION GENERATORS” DELIVER THE SAME THING</p><h2>Compare the result you actually receive.</h2></div>
          <div className={styles.tableWrap}><table><thead><tr><th>Capability</th><th>Image / PDF tools</th><th>HTML slides</th><th>General AI agent</th><th>SciNest</th></tr></thead><tbody>{comparison.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={`${row[0]}-${cell}`}>{cell}</td>)}</tr>)}</tbody></table></div>
        </section>

        <section className={`${styles.section} ${styles.useCases}`}>
          <div className={styles.sectionIntro}><p className={styles.kicker}>BUILT FOR REAL DELIVERY</p><h2>One editable deck for the presentation you actually have to give.</h2></div>
          <div>{['Thesis defense', 'Dissertation defense', 'Research presentation', 'Paper to PowerPoint', 'Literature review', 'Research proposal', 'Conference talk', 'Course report', 'Technical roadmap'].map(item => <span key={item}>{item}</span>)}</div>
        </section>

        <section className={`${styles.section} ${styles.boundarySection}`}>
          <div><p className={styles.kicker}>YOU REMAIN IN CONTROL</p><h2>AI builds the presentation. You confirm what represents your work.</h2></div>
          <ul><li>No guaranteed grade, defense result or publication.</li><li>No invented experiments or unsupported results.</li><li>Facts, citations, numbers and institutional rules still require user review.</li><li>Selected sources guide the deck; missing evidence should be surfaced, not disguised.</li></ul>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="faq">
          <div className={styles.sectionIntro}><p className={styles.kicker}>FAQ</p><h2>What “real editable PowerPoint” means.</h2></div>
          <div className={styles.faq}>{faq.map(([question, answer]) => <details key={question}><summary>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.finalCta}>
          <p>STOP GENERATING CONTENT THAT STILL NEEDS TO BECOME A PRESENTATION</p>
          <h2>Upload the material.<br />Get a real, visual, editable PowerPoint.</h2>
          <a href={downloadUrl}>Generate my real PowerPoint ↗</a>
          <span>Use your own AI key · Local project files by default · Real PPTX export</span>
        </section>
      </main>

      <RelatedProductPages current="powerpoint" />

      <footer className={styles.footer}>
        <div><strong>SciNest</strong><span>Operated by Jiaempower Pathways Limited</span></div>
        <nav><a href="/">Home</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/refund-policy">Refund policy</a></nav>
        <small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small>
      </footer>
    </div>
  );
}

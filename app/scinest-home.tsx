import styles from "./scinest-home.module.css";
import { pricing, type Locale } from "./home-content";

const content = {
  zh: {
    lang: "zh-CN",
    subBrand: "科研小棉袄",
    nav: ["如何完成", "可编辑成果", "为什么不同", "价格", "常见问题"],
    login: "登录",
    start: "免费试用",
    eyebrow: "为有截止日期的学生与早期研究者设计 · 本地项目 · 自备 AI API",
    title: <>资料已经有了。把它们变成<em>可编辑文稿、科研图和答辩 PPT</em>，赶在截止日期前完成</>,
    intro: "上传论文、文献、现有草稿、课程要求或导师意见。SciNest 在同一个项目里整理材料、生成初稿、制作科研图和答辩演示，让你把时间用在核对和修改，而不是从零开始。",
    primary: "开始 7 天免费试用",
    secondary: "查看完成过程",
    note: "使用自己的 AI API；项目文件默认保存在本地；生成内容需要由你核查和修改。",
    stats: [["已有材料即可开始", "论文、草稿、rubric、导师反馈和参考文献"], ["3 类可编辑成果", "文稿、科研图和演示文稿"], ["一个项目连续完成", "材料、写作、图片和幻灯片保持一致"], ["不含模型溢价", "使用自己的 AI API，按实际用量付费"]],
    painKicker: "不是缺少 AI，而是任务仍然没有完成",
    painTitle: "聊天能给答案，但截止日期需要的是一套能继续修改和提交的成果",
    painBody: "通用 AI 可以写一段文字，PPT 工具可以生成几页幻灯片，绘图工具可以做一张图。真正耗时的是反复解释同一批材料、复制内容、重做结构，并让文稿、图片和演示保持一致。",
    oldTitle: "分散完成任务",
    old: ["把同一批资料重复上传", "自己整理长文结构", "把回答复制进 Word", "重新描述科研图需求", "再从头组织答辩 PPT", "逐项检查内容是否一致"],
    newTitle: "在 SciNest 中连续完成",
    newer: ["论文、草稿和要求进入一个项目", "先形成清楚的结构和任务计划", "生成并局部修改可编辑文稿", "从同一材料生成科研图", "复用文稿和图制作答辩 PPT", "导出前由你统一核对和完善"],
    flowKicker: "从已有材料到可交付成果",
    flowTitle: "不要求你先学一套复杂工作流",
    flowBody: "告诉 SciNest 你需要完成什么，并提供已有材料。系统保留项目上下文，让每一步直接继承前一步。",
    flow: [["01", "上传已有材料", "加入论文、文献、草稿、课程要求、导师意见、图片或已有 PPT。"], ["02", "说明眼前任务", "选择论文初稿、文献综述、修改意见、科研图、paper-to-PPT 或答辩演示。"], ["03", "得到可编辑文稿", "按章节目标生成和修改内容，不把一次回答当成最终结果。"], ["04", "补齐科研图", "沿用同一项目材料生成图形，再调整标签、关系、图层和布局。"], ["05", "完成答辩或汇报 PPT", "复用已有文稿和图片组织演示，继续修改并导出可编辑文件。"]],
    outputKicker: "为真实截止日期设计的成果",
    outputTitle: "先看到自己的材料能做成什么，再决定是否购买",
    outputBody: "试用不是观看官方样例。你可以用自己的材料验证理解、生成和编辑效果；购买后继续使用完整工作流和导出能力。",
    outputs: [
      ["01 · 学术文稿", "把草稿、文献和反馈整理成可继续修改的长文", "适用于 thesis / dissertation draft、literature review、research proposal、course report 和导师意见修改。", ["章节级结构与写作", "结合项目材料和引用", "局部重写、扩写、压缩与重排"]],
      ["02 · 科研图", "把研究逻辑变成可继续调整的视觉表达", "为论文、开题、答辩和汇报生成科研图、技术路线图或图形摘要，并保留后续修改空间。", ["标签、元素和关系可调整", "与文稿使用同一项目材料", "适合论文和演示复用"]],
      ["03 · 答辩与研究演示", "把论文和材料直接组织成可编辑幻灯片", "根据受众、页数和任务目标生成 thesis defense、paper-to-PPT、conference presentation 或课程汇报。", ["从论文提取演示结构", "复用项目中的文稿和科研图", "页面内容和布局继续修改"]]
    ],
    bentoKicker: "比一次聊天更接近交付",
    bentoTitle: "材料、文稿、科研图和 PPT 保持在同一个项目里",
    bentoBody: "SciNest 不替你保证成绩、毕业、发表或录用。它减少从材料到可编辑成果之间的重复劳动，最终内容由你核查、修改并决定如何使用。",
    contextTitle: "围绕你的材料工作",
    contextBody: "论文、草稿、要求、导师意见和已有成果持续留在项目上下文中。",
    editTitle: "生成后仍然能改",
    editBody: "继续修改段落、标签、元素、页面内容和布局，而不是接受一张锁死的结果。",
    modelTitle: "本地项目，自选模型",
    modelBody: "项目文件和成果默认保存在本地；需要 AI 的任务发送给你选择并配置的模型服务商。",
    priceKicker: "创始版本",
    priceTitle: "一个个人许可证，覆盖文稿、科研图和 PPT 工作流",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "一次性创始价格",
    priceFeatures: ["完整文稿、科研图与 PPT 工作流", "1 名用户，最多 2 台个人设备", "包含 12 个月功能更新", "更新期后仍可使用已购买版本", "使用自己的模型 API，模型费用另付"],
    priceCta: "注册并开始 7 天试用",
    faqTitle: "开始前需要知道的事",
    faq: [["SciNest 最适合什么任务？", "最适合你已经有论文、文献、草稿、课程要求或导师意见，但仍需要完成可编辑文稿、科研图、paper-to-PPT 或答辩演示的情况。"], ["SciNest 与直接使用通用 AI 有什么区别？", "通用 AI 擅长单次对话。SciNest 把材料、结构、写作、科研图、PPT 和引用放进同一个项目，使后续成果能够继承前一步。"], ["购买价格包含 AI 模型费用吗？", "不包含。SciNest 收取软件许可证费用；模型调用由你选择的服务商按实际使用量收取。"], ["资料会不会上传到 SciNest 服务器？", "项目文件和成果默认保存在本地。需要调用 AI 模型时，任务所需内容会发送给你配置的模型服务商。"], ["SciNest 会保证通过、毕业或发表吗？", "不会。SciNest 是研究与学术表达工具，不保证成绩、毕业、发表、录用或任何学术结果。所有生成内容都需要用户核查和修改。"], ["一次购买包括多久更新？", "创始个人版包含 12 个月功能更新。更新期结束后，已购买版本仍可继续使用。"]],
    finalTitle: "下一次截止日期，不必再从空白文档开始",
    finalBody: "用你自己的材料完成第一版文稿、科研图和答辩 PPT，再把它们改成真正属于你的成果。",
    finalCta: "免费试用 SciNest"
  },
  en: {
    lang: "en",
    subBrand: "Academic work, finished",
    nav: ["How it works", "Editable outputs", "Why SciNest", "Pricing", "FAQ"],
    login: "Sign in",
    start: "Start free trial",
    eyebrow: "For deadline-driven students and early researchers · Local projects · Bring your own AI key",
    title: <>Your research materials are ready. Turn them into an <em>editable draft, scientific figures and defense slides</em> before the deadline</>,
    intro: "Upload your papers, sources, existing draft, rubric or supervisor feedback. SciNest helps you organise the material, develop the writing, create scientific visuals and build the presentation in one project—so you can review and refine instead of starting from zero.",
    primary: "Start a 7-day free trial",
    secondary: "See how it works",
    note: "Use your own AI API. Project files stay local by default. You remain responsible for reviewing and editing the output.",
    stats: [["Start with what you have", "Papers, drafts, rubrics, feedback and references"], ["3 editable output types", "Academic writing, scientific figures and presentations"], ["One connected project", "Materials, writing, visuals and slides stay aligned"], ["No bundled model markup", "Use your own AI API and pay the provider for actual usage"]],
    painKicker: "The problem is not access to AI",
    painTitle: "A chat response is not the same as work you can edit, present and submit",
    painBody: "A general AI can draft a paragraph. A slide tool can generate a deck. A figure tool can create an image. The time disappears when you repeatedly explain the same sources, move content between tools, rebuild the structure and reconcile inconsistencies before the deadline.",
    oldTitle: "A fragmented deadline workflow",
    old: ["Upload the same sources repeatedly", "Work out the long-form structure alone", "Copy responses into a document", "Restate the scientific figure brief", "Rebuild the defense presentation", "Check every output for consistency"],
    newTitle: "A connected SciNest project",
    newer: ["Bring the draft, sources and requirements together", "Shape a clear structure and task plan", "Generate and revise editable writing", "Create figures from the same project material", "Reuse writing and visuals in defense slides", "Review and finish the outputs before export"],
    flowKicker: "From existing materials to editable deliverables",
    flowTitle: "You do not need to design the workflow first",
    flowBody: "Tell SciNest what you need to finish and provide the material you already have. The project retains context so each step can build on the previous one.",
    flow: [["01", "Add your existing materials", "Import papers, references, drafts, rubrics, supervisor feedback, images or an existing presentation."], ["02", "Choose the task in front of you", "Work on a thesis draft, literature review, feedback revision, scientific figure, paper-to-PPT or defense deck."], ["03", "Develop editable writing", "Draft from section goals, then revise individual parts instead of treating one AI response as the final answer."], ["04", "Create the scientific visuals", "Use the same project context to generate a figure, then refine labels, relationships, layers and layout."], ["05", "Build the defense or research presentation", "Reuse the writing and figures, organise the story and export an editable presentation."]],
    outputKicker: "Designed for real academic deadlines",
    outputTitle: "Test SciNest with your own material before you buy",
    outputBody: "The trial is not limited to watching a polished demo. Use a real project to check whether SciNest understands your material and produces work you can continue editing.",
    outputs: [
      ["01 · Academic writing", "Turn drafts, sources and feedback into structured long-form work", "Use SciNest for a thesis or dissertation draft, literature review, research proposal, course report or supervisor-feedback revision.", ["Section-level planning and drafting", "Work from project sources and citations", "Rewrite, expand, shorten and reorder selected parts"]],
      ["02 · Scientific figures", "Turn research logic into visuals you can keep refining", "Create scientific figures, research roadmaps or graphical abstracts for a paper, proposal, defense or presentation.", ["Adjust labels, elements and relationships", "Use the same context as the writing", "Reuse visuals across documents and slides"]],
      ["03 · Defense and research presentations", "Turn a paper or project into editable slides", "Build a thesis defense, paper-to-PPT deck, conference presentation or course report around its audience, length and purpose.", ["Extract a presentation structure from the paper", "Reuse project writing and scientific figures", "Continue editing slide content and layout"]]
    ],
    bentoKicker: "Closer to a deliverable than a one-off chat",
    bentoTitle: "Keep the sources, draft, figures and slides in one project",
    bentoBody: "SciNest does not guarantee grades, graduation, publication or acceptance. It reduces the repeated work between your materials and editable outputs; you review, revise and decide how the result is used.",
    contextTitle: "Ground the work in your materials",
    contextBody: "Papers, drafts, requirements, feedback and existing outputs remain available within the project context.",
    editTitle: "Keep editing after generation",
    editBody: "Revise paragraphs, labels, elements, slide content and layouts instead of being locked into a single generated result.",
    modelTitle: "Local projects, your model",
    modelBody: "Project files and outputs are stored locally by default; AI tasks go to the model provider you choose and configure.",
    priceKicker: "Founding release",
    priceTitle: "One personal licence for the writing, figure and presentation workflow",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "one-time founding price",
    priceFeatures: ["Complete writing, figure and presentation workflow", "1 user and up to 2 personal devices", "12 months of feature updates", "Keep using the purchased version afterwards", "Bring your own model API; model charges are separate"],
    priceCta: "Register for the 7-day trial",
    faqTitle: "What to know before starting",
    faq: [["Which tasks is SciNest best suited for?", "SciNest is designed for people who already have papers, references, a draft, assignment requirements or supervisor feedback and still need to finish editable writing, scientific figures, paper-to-PPT slides or a defense presentation."], ["How is SciNest different from a general AI tool?", "General AI tools are strong at individual conversations. SciNest keeps the materials, structure, writing, figures, slides and citations together so later outputs can build on earlier work."], ["Does the licence include model usage?", "No. The SciNest price covers the software licence. Your chosen model provider charges separately for actual API usage."], ["Are my materials uploaded to SciNest?", "Project files and outputs are stored locally by default. When an AI task runs, the necessary content is sent to the model provider you configured."], ["Does SciNest guarantee a grade, graduation or publication?", "No. SciNest is a research and academic-expression tool. It does not guarantee grades, graduation, publication, acceptance or any academic outcome. Users must review and edit generated content."], ["How long are updates included?", "The founding personal edition includes 12 months of feature updates. The purchased version remains usable afterwards."]],
    finalTitle: "Do not start the next deadline from a blank document",
    finalBody: "Use your own materials to produce the first complete draft, scientific visuals and defense slides—then refine them into work that is genuinely yours.",
    finalCta: "Try SciNest free"
  }
} as const;

export function SciNestHome({ locale }: { locale: Locale }) {
  const c = content[locale];
  const other = locale === "zh" ? "/" : "/zh";
  const languageLabel = locale === "zh" ? "English" : "中文";
  const price = pricing[locale];
  const image = (name: string) => `/scinest/${name}-${locale}.webp`;
  const imageAlt = locale === "zh" ? "SciNest 科研任务工作区" : "SciNest academic project workspace";

  return <div className={styles.page} lang={c.lang}>
    <header className={styles.header}><div className={styles.navbar}>
      <a className={styles.brand} href="#top"><span>S</span><strong>SciNest<small>{c.subBrand}</small></strong></a>
      <nav>{c.nav.map((item, i) => <a key={item} href={`#${["workflow","outputs","why","pricing","faq"][i]}`}>{item}</a>)}</nav>
      <div className={styles.actions}><a href={other} hrefLang={locale === "zh" ? "en" : "zh-CN"}>{languageLabel}</a><a href="/login">{c.login}</a><a className={styles.smallPrimary} href="/login?intent=trial">{c.start}</a></div>
    </div></header>
    <main>
      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{c.eyebrow}</p><h1>{c.title}</h1><p className={styles.lead}>{c.intro}</p><div className={styles.ctas}><a className={styles.primary} href="/login?intent=trial">{c.primary} ↗</a><a className={styles.secondary} href="#workflow">{c.secondary}</a></div><p className={styles.note}>✓ {c.note}</p></div>
        <div className={styles.heroVisual}><img src={image("hero")} alt={imageAlt} width="1280" height="800" /><span className={styles.floatTop}>01 · {c.flow[0][1]}</span><span className={styles.floatBottom}>05 · {c.flow[4][1]}</span></div>
      </section>
      <section className={styles.stats}>{c.stats.map(([v,l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</section>
      <section className={`${styles.section} ${styles.darkCompare}`} id="why"><div className={styles.sectionHead}><p>{c.painKicker}</p><h2>{c.painTitle}</h2><span>{c.painBody}</span></div><div className={styles.compare}><article className={styles.old}><h3>{c.oldTitle}</h3><ol>{c.old.map((x,i)=><li key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</li>)}</ol></article><div className={styles.bridge}>→</div><article className={styles.new}><h3>{c.newTitle}</h3><ol>{c.newer.map((x,i)=><li key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</li>)}</ol></article></div></section>
      <section className={`${styles.section} ${styles.workflow}`} id="workflow"><div className={styles.sectionHead}><p>{c.flowKicker}</p><h2>{c.flowTitle}</h2><span>{c.flowBody}</span></div><div className={styles.flow}>{c.flow.map(([n,t,b])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>
      <section className={`${styles.section} ${styles.outputs}`} id="outputs"><div className={styles.sectionHead}><p>{c.outputKicker}</p><h2>{c.outputTitle}</h2><span>{c.outputBody}</span></div>
        <article className={styles.outputRow}><div><small>{c.outputs[0][0]}</small><h3>{c.outputs[0][1]}</h3><p>{c.outputs[0][2]}</p><ul>{c.outputs[0][3].map(x=><li key={x}>✓ {x}</li>)}</ul></div><figure><img src={image("writing-ui")} alt={locale === "zh" ? "SciNest 可编辑学术文稿工作区" : "SciNest editable academic writing workspace"} width="1280" height="800" loading="lazy" /></figure></article>
        <article className={styles.figureFeature}><div><small>{c.outputs[1][0]}</small><h3>{c.outputs[1][1]}</h3><p>{c.outputs[1][2]}</p><ul>{c.outputs[1][3].map(x=><li key={x}>✓ {x}</li>)}</ul></div><figure><img src={image("figures-ui")} alt={locale === "zh" ? "SciNest 可编辑科研图工作区" : "SciNest editable scientific figure workspace"} width="1280" height="640" loading="lazy" /></figure></article>
        <article className={`${styles.outputRow} ${styles.reverse}`}><figure><img src={image("ppt-ui")} alt={locale === "zh" ? "SciNest 可编辑答辩 PPT 工作区" : "SciNest editable thesis defense presentation workspace"} width="1280" height="800" loading="lazy" /></figure><div><small>{c.outputs[2][0]}</small><h3>{c.outputs[2][1]}</h3><p>{c.outputs[2][2]}</p><ul>{c.outputs[2][3].map(x=><li key={x}>✓ {x}</li>)}</ul></div></article>
      </section>
      <section className={`${styles.section} ${styles.bento}`}><div className={styles.bentoIntro}><p className={styles.kicker}>{c.bentoKicker}</p><h2>{c.bentoTitle}</h2><p>{c.bentoBody}</p></div><article className={styles.bentoMain}><span>01</span><h3>{c.contextTitle}</h3><p>{c.contextBody}</p></article><article><span>02</span><h3>{c.editTitle}</h3><p>{c.editBody}</p></article><article><span>03</span><h3>{c.modelTitle}</h3><p>{c.modelBody}</p></article></section>
      <section className={styles.section} id="pricing"><div className={styles.sectionHead}><p>{c.priceKicker}</p><h2>{c.priceTitle}</h2></div><article className={styles.price}><div><span>{c.plan}</span><small><s>{price.standard}</s> {locale === "zh" ? "标准价" : "standard"}</small></div><h3>{price.founding}<small>{c.priceUnit}</small></h3><ul>{c.priceFeatures.map(x=><li key={x}>✓ {x}</li>)}</ul><a className={styles.primary} href="/login?intent=trial">{c.priceCta} ↗</a></article></section>
      <section className={`${styles.section} ${styles.faqSection}`} id="faq"><div className={styles.sectionHead}><h2>{c.faqTitle}</h2></div><div className={styles.faq}>{c.faq.map(([q,a])=><details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.final}><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><a className={styles.lightButton} href="/login?intent=trial">{c.finalCta} ↗</a></section>
    </main>
    <footer><div><strong>SciNest · {locale === "zh" ? "科研小棉袄" : "Academic work, finished"}</strong><span>{locale === "zh" ? "由 Jiaempower Pathways Limited 运营" : "Operated by Jiaempower Pathways Limited"}</span></div><nav><a href="#">{locale === "zh" ? "隐私政策" : "Privacy"}</a><a href="#">{locale === "zh" ? "服务条款" : "Terms"}</a><a href="#">{locale === "zh" ? "退款政策" : "Refund policy"}</a></nav><small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small></footer>
  </div>;
}

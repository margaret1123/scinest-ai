import styles from "./scinest-home.module.css";
import { pricing, type Locale } from "./home-content";

const content = {
  en: {
    lang: "en",
    subBrand: "Academic work, finished",
    nav: ["Your situation", "How it works", "Editable outputs", "Pricing", "FAQ"],
    login: "Sign in",
    start: "Try your project",
    eyebrow: "FOR THESIS DEADLINES, SUPERVISOR REVISIONS AND DEFENSE WEEK",
    title: <>One deadline. <em>A thesis to revise. Figures to finish. Slides to build.</em></>,
    intro:
      "You already have the papers, notes, draft, data and feedback. SciNest brings them into one project and helps turn the work you have already done into editable academic writing, scientific figures and a defense-ready presentation.",
    primary: "Try it with your own materials",
    secondary: "See the thesis-to-defense workflow",
    note: "Windows desktop · Bring your own AI key · Project files stay local by default · Outputs remain editable",
    stats: [
      ["Thesis revision", "Work from the current draft, source papers and supervisor comments"],
      ["Scientific figures", "Turn methods, mechanisms and research logic into visuals you can refine"],
      ["Defense slides", "Build an editable presentation from the thesis instead of a blank template"],
      ["One project", "Keep writing, figures, slides and source context connected"],
    ],
    painKicker: "THE LAST PART IS NEVER JUST ONE TASK",
    painTitle: "The research may be there. The deliverables are still piling up.",
    painBody:
      "Another round of supervisor comments. A literature review that no longer matches the final argument. Methods that still need a figure. A thesis that still needs to become a presentation. The real cost is rebuilding the same research in every tool.",
    oldTitle: "The usual deadline scramble",
    old: [
      "Search through papers and notes again",
      "Turn fragments into a workable revision",
      "Explain the research to another AI",
      "Recreate the figure in a separate tool",
      "Copy everything into PowerPoint",
      "Repair inconsistencies before submission",
    ],
    newTitle: "One SciNest project",
    newer: [
      "Bring in papers, drafts and feedback",
      "Keep source context and decisions connected",
      "Revise the writing without discarding the project",
      "Turn methods and findings into figures",
      "Build an editable defense deck",
      "Review, refine and export the files",
    ],
    flowKicker: "START WITH WHAT YOU ALREADY HAVE",
    flowTitle: "From scattered materials to work you can submit, present and keep editing",
    flowBody:
      "SciNest does not ask you to start from a blank page. Each result continues from the materials and decisions already inside the project.",
    flow: [
      ["01", "Bring in the existing work", "Add papers, references, notes, draft chapters, supervisor comments, figures, presentations and submission requirements."],
      ["02", "Say what is still unfinished", "Revise a chapter, build a literature review, create a research figure, turn a paper into slides or prepare the defense."],
      ["03", "Build and revise the writing", "Develop the structure and section goals, then rewrite or reorganise the parts that still need work."],
      ["04", "Explain the research visually", "Create a scientific figure, mechanism diagram, research roadmap or graphical abstract from the same project context."],
      ["05", "Finish an editable defense deck", "Reuse the writing and figures to build the presentation structure, slide content and speaker notes."],
    ],
    outputKicker: "NOT ANOTHER ANSWER TO COPY AND PASTE",
    outputTitle: "The result should reduce the work left—not create another editing job.",
    outputBody:
      "Useful academic outputs must remain reviewable, editable and exportable. The first version is a working result, not a locked image or disposable chat response.",
    outputs: [
      [
        "01 · Thesis and academic writing",
        "Revise the thesis without losing the material behind it",
        "Keep the current draft, uploaded papers and supervisor feedback inside one project. Work through the structure, revise specific sections and continue editing the result.",
        ["Theses, literature reviews, proposals and reports", "Targeted revision from supervisor feedback", "Editable writing designed for user review"],
      ],
      [
        "02 · Scientific figures",
        "Make the research understandable—not trapped in a locked image",
        "Turn methods, mechanisms, stages and relationships into scientific visuals that can be labelled, refined and reused in the document and presentation.",
        ["Research roadmaps and mechanism diagrams", "Editable labels, elements and relationships", "Reusable across the same project"],
      ],
      [
        "03 · Thesis defense presentations",
        "Turn the thesis into a defense narrative, not a generic slide template",
        "Build the presentation around the research contribution, evidence, audience and time limit. Reuse work already completed in the project.",
        ["Thesis defense and academic presentations", "Editable slide content and layout", "Consistent writing, figures and presentation logic"],
      ],
    ],
    bentoKicker: "AI IS NOT THE PRODUCT. COMPLETION IS.",
    bentoTitle: "General AI gives you an answer. SciNest keeps the academic task moving.",
    bentoBody:
      "The value is not another chat window. It is keeping sources, writing, figures and slides connected so that each output can become the next input.",
    contextTitle: "The project remembers the context",
    contextBody: "Sources, notes, feedback, writing, figures, slides and citations remain organised around the same task.",
    editTitle: "Generated work remains yours to change",
    editBody: "Continue revising paragraphs, labels, relationships, slide content and layouts instead of being locked into the first result.",
    modelTitle: "Local project, your AI provider",
    modelBody: "Project files and outputs stay local by default. AI tasks are sent to the model provider you choose and configure.",
    priceKicker: "FOUNDING EDITION",
    priceTitle: "One licence for the thesis, figure and presentation deadlines that do not arrive separately",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "one-time founding price",
    priceFeatures: [
      "Academic writing, scientific figure and presentation workflows",
      "1 user and up to 2 personal devices",
      "12 months of feature updates",
      "Keep using the purchased version after the update period",
      "Bring your own model API; provider charges are separate",
    ],
    priceCta: "Try your project before purchasing",
    faqTitle: "Clear answers before you install",
    faq: [
      ["What is SciNest?", "SciNest is a Windows desktop research productivity application for students and early researchers. It helps turn existing papers, references, drafts, data, supervisor feedback and project materials into editable academic writing, scientific figures and presentations."],
      ["Who is SciNest best for?", "It is designed for people who already have research materials but still need to complete thesis revision, a literature review, a research proposal, scientific figures, paper-to-PowerPoint work or a thesis defense presentation."],
      ["How is it different from a general AI chatbot?", "General AI tools usually handle one conversation or output at a time. SciNest keeps materials, writing, figures and presentation work connected inside the same project, reducing repeated uploads, explanations, copy-paste and reformatting."],
      ["Does SciNest write and submit a thesis for me?", "No. SciNest helps organise, generate, revise and export academic work. Users remain responsible for checking facts, citations and final submissions and for following institutional AI-use rules."],
      ["Does SciNest guarantee a grade, graduation or publication?", "No. SciNest does not guarantee grades, graduation, thesis approval, publication, journal acceptance or research outcomes."],
      ["Does the licence include AI model usage?", "No. The licence covers the software. Your selected model provider charges separately for actual API usage."],
      ["Where are project files stored?", "Project files and generated outputs are stored locally by default. Content required for an AI task is sent to the model provider selected and configured by the user."],
    ],
    finalTitle: "The deadline is not asking you to restart.",
    finalBody: "Bring in the research, draft and feedback you already have. Finish the writing. Make the figures clear. Build the defense. Keep every result editable.",
    finalCta: "Try SciNest with your own materials",
  },
  zh: {
    lang: "zh-CN",
    subBrand: "科研小棉袄",
    nav: ["你的处境", "如何完成", "可编辑成果", "价格", "常见问题"],
    login: "登录",
    start: "用自己的项目试试",
    eyebrow: "面向论文截止、导师修改与答辩冲刺",
    title: <>一个截止日期。<em>论文要改，科研图要补，答辩 PPT 还没做。</em></>,
    intro:
      "论文、文献、草稿、数据和导师意见你已经有了。SciNest 把这些材料放进同一个项目，继续完成可编辑文稿、科研图和答辩 PPT，不必每换一个工具就重新解释和返工。",
    primary: "用自己的材料体验",
    secondary: "查看论文到答辩的流程",
    note: "Windows 桌面端 · 使用自己的 AI Key · 项目文件默认保存在本地 · 成果可继续编辑",
    stats: [
      ["论文修改", "围绕现有草稿、文献和导师意见继续完成"],
      ["科研图", "把方法、机制和研究逻辑变成可继续调整的图"],
      ["答辩 PPT", "从论文内容形成可编辑的答辩结构和页面"],
      ["一个项目", "文稿、科研图、PPT 与材料上下文保持连接"],
    ],
    painKicker: "最后阶段从来不只剩一件事",
    painTitle: "研究内容可能已经有了，交付物却还在不断堆积",
    painBody:
      "导师又发来一轮修改；综述和最终论点对不上；方法还需要画成图；论文还要变成答辩 PPT。真正消耗时间的，是在每个工具里重新搭建同一份研究。",
    oldTitle: "常见的截止日期冲刺",
    old: ["重新翻找论文和笔记", "把零散内容整理成修改稿", "向另一个 AI 重讲研究背景", "在单独工具里重做科研图", "复制到 PowerPoint 重新排版", "提交前修复前后不一致"],
    newTitle: "一个 SciNest 项目",
    newer: ["导入论文、草稿和导师意见", "让材料与判断保持连接", "基于同一项目继续修改文稿", "把方法和结果转成科研图", "生成可编辑答辩 PPT", "检查、精修并导出文件"],
    flowKicker: "从你已经完成的工作开始",
    flowTitle: "把散乱材料变成可以提交、展示和继续修改的成果",
    flowBody: "SciNest 不要求你从空白页开始。每一步都继承项目中已有的材料、判断和成果。",
    flow: [
      ["01", "放入已有材料", "导入论文、参考文献、笔记、草稿章节、导师意见、已有图片、PPT 和提交要求。"],
      ["02", "说明还没完成什么", "修改章节、写综述、做科研图、把论文转成 PPT，或准备答辩。"],
      ["03", "生成并修改文稿", "先建立结构和章节目标，再改写、重排仍需处理的部分。"],
      ["04", "把研究讲清楚", "沿用同一项目材料生成机制图、技术路线、研究框架或图形摘要。"],
      ["05", "完成可编辑答辩 PPT", "复用已有文稿和科研图，形成演示结构、页面内容和讲稿。"],
    ],
    outputKicker: "不是又一段需要复制粘贴的回答",
    outputTitle: "结果应该减少剩余工作，而不是制造新的返工",
    outputBody: "真正有用的学术成果必须能检查、修改和导出，而不是一次生成后锁死。",
    outputs: [
      ["01 · 论文与研究文稿", "修改论文时，不再丢掉背后的材料", "把现有草稿、文献和导师意见放在同一个项目中，继续修改具体章节并保留编辑能力。", ["论文、综述、Proposal 与课程报告", "围绕导师意见做定向修改", "用户核查后继续编辑和导出"]],
      ["02 · 科研图", "让别人看懂研究，而不是得到一张锁死的图片", "把方法、机制、阶段和关系变成可调整、可复用的科研视觉表达。", ["技术路线、机制图与研究框架", "标签、元素和关系继续修改", "在文稿和 PPT 中重复使用"]],
      ["03 · 答辩与研究汇报", "把论文变成答辩逻辑，而不是套一个通用模板", "围绕研究贡献、证据、受众和时长组织汇报，并复用项目中已有的文稿和科研图。", ["毕业答辩与学术汇报", "页面内容和布局可编辑", "文稿、图和演示逻辑保持一致"]],
    ],
    bentoKicker: "卖点不是 AI，而是把任务完成",
    bentoTitle: "通用 AI 给你一个回答，SciNest 让整项学术任务继续向前",
    bentoBody: "价值不在多一个聊天窗口，而在于让材料、文稿、科研图和 PPT 互相继承，减少重复劳动。",
    contextTitle: "项目持续保留研究背景",
    contextBody: "资料、笔记、导师意见、文稿、科研图、PPT 和引用围绕同一任务组织。",
    editTitle: "生成后仍然属于你",
    editBody: "段落、标签、关系、页面内容和布局都可以继续修改，不被第一版结果锁死。",
    modelTitle: "本地项目，自选模型",
    modelBody: "项目文件和成果默认保存在本地；AI 任务发送给你选择并配置的模型服务商。",
    priceKicker: "创始版本",
    priceTitle: "论文、科研图和答辩任务不会分开到来，一份个人授权统一处理",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "创始版一次性价格",
    priceFeatures: ["文稿、科研图与 PPT 工作流", "1 名用户，最多 2 台个人设备", "包含 12 个月功能更新", "更新期结束后仍可使用已购买版本", "使用自己的模型 API，调用费另付"],
    priceCta: "先用自己的项目体验再购买",
    faqTitle: "下载安装前，把关键问题说清楚",
    faq: [
      ["SciNest 是什么？", "SciNest 是面向学生和早期研究者的 Windows 桌面科研生产力工具。它帮助用户把已有论文、文献、草稿、数据、导师意见和项目材料继续变成可编辑文稿、科研图与演示文稿。"],
      ["SciNest 最适合谁？", "最适合已经有研究材料，但还需要完成论文修改、Literature Review、Research Proposal、科研图、Paper-to-PowerPoint 或 Thesis Defense Presentation 的用户。"],
      ["它和通用 AI 聊天工具有什么区别？", "通用 AI 通常一次处理一个对话或结果。SciNest 把材料、文稿、科研图和 PPT 放在同一个项目里，减少反复上传、解释、复制和重新排版。"],
      ["SciNest 会替我提交论文吗？", "不会。SciNest 帮助整理、生成、修改和导出学术成果。用户仍需核查事实、引用和最终提交内容，并遵守所在机构的 AI 使用规则。"],
      ["SciNest 保证成绩、毕业或发表吗？", "不保证。SciNest 不保证成绩、毕业、论文通过、期刊录用或任何研究结果。"],
      ["购买价格包含 AI 模型费用吗？", "不包含。软件授权与模型调用费用分开，模型服务商按用户实际 API 使用量收费。"],
      ["项目文件保存在哪里？", "项目文件和生成成果默认保存在本地。执行 AI 任务时，完成该任务所需的内容会发送给用户选择并配置的模型服务商。"],
    ],
    finalTitle: "截止日期不是让你重新开始。",
    finalBody: "带上已经有的研究、草稿和导师意见。完成文稿，把图讲清楚，做好答辩，并保留每一项成果的编辑权。",
    finalCta: "用自己的材料体验 SciNest",
  },
} as const;

export function SciNestHome({ locale }: { locale: Locale }) {
  const c = content[locale];
  const other = locale === "zh" ? "/" : "/zh";
  const price = pricing[locale];
  const image = (name: string) => `/scinest/${name}-${locale}.webp`;
  const heroAlt = locale === "zh" ? "SciNest 论文修改、科研图与答辩PPT工作台" : "SciNest thesis revision, scientific figure and thesis defense presentation workspace";
  const writingAlt = locale === "zh" ? "SciNest 可编辑论文与研究文稿工作区" : "SciNest editable thesis and academic writing workspace";
  const figureAlt = locale === "zh" ? "SciNest 科研图、机制图与研究路线图编辑界面" : "SciNest scientific figure, mechanism diagram and research roadmap editor";
  const pptAlt = locale === "zh" ? "SciNest 可编辑答辩PPT与研究汇报工作流" : "SciNest editable thesis defense PowerPoint and academic presentation workflow";

  return <div className={styles.page} lang={c.lang}>
    <header className={styles.header}><div className={styles.navbar}>
      <a className={styles.brand} href="#top"><span>S</span><strong>SciNest<small>{c.subBrand}</small></strong></a>
      <nav>{c.nav.map((item, i) => <a key={item} href={`#${["why", "workflow", "outputs", "pricing", "faq"][i]}`}>{item}</a>)}</nav>
      <div className={styles.actions}><a href={other}>{locale === "zh" ? "EN" : "中文"}</a><a href="/login">{c.login}</a><a className={styles.smallPrimary} href="/login?intent=trial">{c.start}</a></div>
    </div></header>
    <main>
      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{c.eyebrow}</p><h1>{c.title}</h1><p className={styles.lead}>{c.intro}</p><div className={styles.ctas}><a className={styles.primary} href="/login?intent=trial">{c.primary} ↗</a><a className={styles.secondary} href="#workflow">{c.secondary}</a></div><p className={styles.note}>✓ {c.note}</p></div>
        <div className={styles.heroVisual}><img src={image("hero")} alt={heroAlt} width="1280" height="800" /><span className={styles.floatTop}>01 · {c.flow[0][1]}</span><span className={styles.floatBottom}>05 · {c.flow[4][1]}</span></div>
      </section>
      <section className={styles.stats}>{c.stats.map(([v, l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</section>
      <section className={`${styles.section} ${styles.darkCompare}`} id="why"><div className={styles.sectionHead}><p>{c.painKicker}</p><h2>{c.painTitle}</h2><span>{c.painBody}</span></div><div className={styles.compare}><article className={styles.old}><h3>{c.oldTitle}</h3><ol>{c.old.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article><div className={styles.bridge}>→</div><article className={styles.new}><h3>{c.newTitle}</h3><ol>{c.newer.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article></div></section>
      <section className={`${styles.section} ${styles.workflow}`} id="workflow"><div className={styles.sectionHead}><p>{c.flowKicker}</p><h2>{c.flowTitle}</h2><span>{c.flowBody}</span></div><div className={styles.flow}>{c.flow.map(([n, t, b]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>
      <section className={`${styles.section} ${styles.outputs}`} id="outputs"><div className={styles.sectionHead}><p>{c.outputKicker}</p><h2>{c.outputTitle}</h2><span>{c.outputBody}</span></div>
        <article className={styles.outputRow}><div><small>{c.outputs[0][0]}</small><h3>{c.outputs[0][1]}</h3><p>{c.outputs[0][2]}</p><ul>{c.outputs[0][3].map(x => <li key={x}>✓ {x}</li>)}</ul></div><figure><img src={image("writing-ui")} alt={writingAlt} width="1280" height="800" loading="lazy" /></figure></article>
        <article className={styles.figureFeature}><div><small>{c.outputs[1][0]}</small><h3>{c.outputs[1][1]}</h3><p>{c.outputs[1][2]}</p><ul>{c.outputs[1][3].map(x => <li key={x}>✓ {x}</li>)}</ul></div><figure><img src={image("figures-ui")} alt={figureAlt} width="1280" height="640" loading="lazy" /></figure></article>
        <article className={`${styles.outputRow} ${styles.reverse}`}><figure><img src={image("ppt-ui")} alt={pptAlt} width="1280" height="800" loading="lazy" /></figure><div><small>{c.outputs[2][0]}</small><h3>{c.outputs[2][1]}</h3><p>{c.outputs[2][2]}</p><ul>{c.outputs[2][3].map(x => <li key={x}>✓ {x}</li>)}</ul></div></article>
      </section>
      <section className={`${styles.section} ${styles.bento}`}><div className={styles.bentoIntro}><p className={styles.kicker}>{c.bentoKicker}</p><h2>{c.bentoTitle}</h2><p>{c.bentoBody}</p></div><article className={styles.bentoMain}><span>01</span><h3>{c.contextTitle}</h3><p>{c.contextBody}</p></article><article><span>02</span><h3>{c.editTitle}</h3><p>{c.editBody}</p></article><article><span>03</span><h3>{c.modelTitle}</h3><p>{c.modelBody}</p></article></section>
      <section className={styles.section} id="pricing"><div className={styles.sectionHead}><p>{c.priceKicker}</p><h2>{c.priceTitle}</h2></div><article className={styles.price}><div><span>{c.plan}</span><small><s>{price.standard}</s> {locale === "zh" ? "标准参考价" : "standard reference"}</small></div><h3>{price.founding}<small>{c.priceUnit}</small></h3><ul>{c.priceFeatures.map(x => <li key={x}>✓ {x}</li>)}</ul><a className={styles.primary} href="/login?intent=trial">{c.priceCta} ↗</a></article></section>
      <section className={`${styles.section} ${styles.faqSection}`} id="faq"><div className={styles.sectionHead}><h2>{c.faqTitle}</h2></div><div className={styles.faq}>{c.faq.map(([q, a]) => <details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.final}><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><a className={styles.lightButton} href="/login?intent=trial">{c.finalCta} ↗</a></section>
    </main>
    <footer><div><strong>SciNest · {locale === "zh" ? "科研小棉袄" : "Academic work, finished"}</strong><span>{locale === "zh" ? "由 Jiaempower Pathways Limited 运营" : "Operated by Jiaempower Pathways Limited"}</span></div><nav><a href="#">{locale === "zh" ? "隐私政策" : "Privacy"}</a><a href="#">{locale === "zh" ? "服务条款" : "Terms"}</a><a href="#">{locale === "zh" ? "退款政策" : "Refund policy"}</a></nav><small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small></footer>
  </div>;
}

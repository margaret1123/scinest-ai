import styles from "./scinest-home.module.css";
import { pricing, type Locale } from "./home-content";

const copy = {
  zh: {
    lang: "zh-CN",
    subBrand: "科研小棉袄",
    nav: ["连续工作流", "可编辑成果", "为什么不同", "价格", "常见问题"],
    login: "登录",
    start: "开始体验",
    eyebrow: "AI 科研创作工作台 · 本地项目 · 自选模型",
    title: <>从散乱科研资料到 <em>文稿、科研图和 PPT</em>，一条流程顺下来</>,
    intro: "把论文、Reference、笔记和项目文件放进同一个研究项目。SciNest 持续理解上下文，从梳理思路、搭建结构，到写作、绘图和制作 PPT，不必反复上传、解释和搬运内容。",
    primary: "用一个项目体验完整流程",
    secondary: "看看资料如何一路变成成果",
    note: "生成只是第一版：文字、图形和幻灯片都可以继续修改与导出。",
    stats: [["1 个项目", "承载资料、思路与全部成果"], ["3 类成果", "文稿、科研图、可编辑 PPT"], ["持续上下文", "无需在每个工具里重新解释"], ["BYOK", "自由选择支持的模型"]],
    painKicker: "真正浪费时间的，不只是写和画",
    painTitle: "每换一个工具，大脑就要重新进入一次项目",
    painBody: "ChatGPT、Word、绘图工具和 PPT 工具都能完成其中一部分。真正耗损的是跨界面切换后，资料关系、研究思路和表达目标一次次断开。",
    oldTitle: "多工具拼接",
    old: ["逐篇上传与阅读", "手动整理笔记", "重新解释研究背景", "复制到 Word 修改", "换工具描述绘图需求", "再从零组织 PPT", "一处变更，多处重做"],
    newTitle: "SciNest 连续项目",
    newer: ["资料集中进入项目", "在同一上下文里提问与梳理", "沿用结构继续写作", "直接把内容转成科研图", "复用文稿与图制作 PPT", "局部调整，不必推倒重来"],
    painEnd: "SciNest 不是把多个 AI 按钮放在一起，而是让科研任务不再在每个工具之间断掉。",
    flowKicker: "从混乱到成果",
    flowTitle: "前一步的结果，直接成为下一步的起点",
    flowBody: "同一批材料在项目中持续被理解、组织和复用。你把精力放在判断和修改上，而不是不断重建上下文。",
    flow: [
      ["01", "收进一个项目", "导入论文、文献、笔记、Word、PPT 与已有图片，统一选择本次任务要使用的材料。"],
      ["02", "对话并形成思路", "跨多份资料提炼观点、比较方法、发现矛盾，逐步形成研究框架和表达方向。"],
      ["03", "展开成可编辑文稿", "从章节目标和要点开始分段生成，支持局部重写、扩写和调整。"],
      ["04", "把内容变成科研图", "沿用项目内容生成图形，再移动元素、调整图层、文字、颜色和连接关系。"],
      ["05", "复用成果制作 PPT", "根据受众、场景和页数组织叙事，复用已有文稿和图，继续编辑与导出。"],
    ],
    outputKicker: "不是聊天答案，而是可以继续工作的成果",
    outputTitle: "先快速得到完整第一版，再按自己的想法精修",
    outputBody: "赶时间时，最重要的是让整套流程流畅完成；需要提高质量时，又能对文字、图和页面进行精确控制。",
    outputs: [
      ["文稿", "让散乱资料变成有结构的长文", "先规划章节目标和关键要点，再逐段写作。项目资料、引用和前后文持续关联。", ["章节级结构与目标", "局部改写、扩写和重排", "编辑器内继续修改与导出"], "/mockup.png"],
      ["科研图", "生成后仍能精确移动、分层和修改", "科研图不是一张不可控的最终图片。选中元素后可继续调整位置、文字、颜色、关系和布局。", ["图层与元素控制", "局部 AI 改图", "可调整布局和视觉表达"], "/mockup.png"],
      ["PPT", "文章和图已经在项目里，演示不再从零开始", "从现有资料、文稿和科研图中组织汇报逻辑。不是只能观看的 AI 成品，而是可以继续修改的演示文稿。", ["按目的、受众和页数规划", "复用项目内容", "页面内容与布局可编辑"], "/mockup.png"],
    ],
    contextKicker: "一个项目上下文",
    contextTitle: "不用每打开一个界面，就重新解释你在研究什么",
    contextBody: "资料、问答、章节结构、文稿、科研图、PPT 和引用都围绕同一个项目组织。你的研究方向和已有成果不会因为切换任务而消失。",
    context: [["资料关系持续保留", "选择过的来源和生成过的成果留在项目中，后续任务可以直接复用。"], ["思路不会卡在聊天记录里", "问答中形成的判断可以进入文章结构、科研图和演示。"], ["修改可以继续向后流动", "文章方向变化时，可基于新内容继续调整图和 PPT。"]],
    controlKicker: "控制权仍然属于你",
    controlTitle: "生成只是开始，真正有用的是还能继续改",
    controlBody: "很多 AI 工具能给出完整结果，但局部修改困难。SciNest 的目标是让第一版尽快出现，同时把精修能力留在同一个工作空间里。",
    control: ["文稿：选中段落后调整论证、长度和表达", "科研图：移动元素、修改图层和局部视觉", "PPT：替换内容、调整布局、重新组织页面叙事"],
    modelKicker: "本地项目 + 自选 AI 模型",
    modelTitle: "材料由你管理，模型由你选择",
    modelBody: "SciNest 是本地桌面工作台，不出售 AI 额度。项目文件和成果默认保存在本地；使用模型时，必要内容会发送给你选择的模型服务商。官网只处理账户、订单、下载和授权。",
    priceKicker: "首发版本",
    priceTitle: "一个完整个人版，不用在功能表里做选择题",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "首发一次性购买",
    priceFeatures: ["完整文稿、科研图与 PPT 工作流", "1 名用户，最多 2 台个人设备", "包含 12 个月功能更新", "未续更新仍可继续使用已购买版本", "使用自己的模型 API，调用费另付"],
    priceCta: "注册并开始 7 天试用",
    faqTitle: "开始前需要知道的事",
    faq: [["SciNest 与直接使用通用 AI 有什么区别？", "通用 AI 擅长单次问答。SciNest 把资料、结构、写作、科研图、PPT 和引用放进同一个项目，使每一步都能继承前一步。"], ["购买价格包含 AI 模型费用吗？", "不包含。SciNest 收取软件授权费用；模型调用费由所选服务商按实际使用量收取。"], ["资料会不会上传到 SciNest 服务器？", "项目文件和成果默认保存在本地。使用 AI 模型时，任务所需内容会发送给所选模型服务商。"], ["一次购买包括多久更新？", "首发个人版包含 12 个月功能更新。到期后可以继续使用已购买版本。"], ["会保证论文通过或内容绝对正确吗？", "不会。SciNest 是创作与效率工具，不替代事实核验、导师审核或同行评审。"]],
    finalTitle: "别再把同一个研究项目拆散在十几个窗口里",
    finalBody: "把材料放进一个项目，先做出完整第一版，再继续把它改成真正属于你的成果。",
    finalCta: "开始体验 SciNest",
  },
  en: {
    lang: "en",
    subBrand: "Research creation workspace",
    nav: ["Workflow", "Editable outputs", "Why SciNest", "Pricing", "FAQ"],
    login: "Sign in",
    start: "Start exploring",
    eyebrow: "AI research creation workspace · Local projects · Your choice of model",
    title: <>From scattered research materials to <em>writing, figures and presentations</em> in one continuous workflow</>,
    intro: "Bring papers, references, notes and project files into one research workspace. SciNest keeps the context as you move from understanding and outlining to writing, figure design and slides—without repeatedly uploading, explaining or moving content between tools.",
    primary: "Experience the complete workflow",
    secondary: "See materials become finished outputs",
    note: "Generation is the first draft, not the finish line. Writing, figures and slides remain editable.",
    stats: [["1 project", "Materials, reasoning and outputs stay connected"], ["3 output types", "Writing, scientific figures and editable slides"], ["Continuous context", "No re-explaining the project in every tool"], ["BYOK", "Choose a supported model"]],
    painKicker: "The expensive part is not only writing or designing",
    painTitle: "Every tool switch forces you to reconstruct the project in your head",
    painBody: "ChatGPT, a word processor, a figure tool and a slide generator can each complete a separate task. The real drain is rebuilding context, moving content and reorganizing the same research every time the interface changes.",
    oldTitle: "A stitched-together tool stack",
    old: ["Upload and read papers one by one", "Collect notes manually", "Explain the research context again", "Move the draft into a word processor", "Describe the figure in another tool", "Rebuild the story in a slide app", "Repeat edits across every output"],
    newTitle: "A continuous SciNest project",
    newer: ["Bring materials into one project", "Ask, compare and organize in context", "Carry the structure into long-form writing", "Turn the same ideas into editable figures", "Reuse writing and figures in presentations", "Refine without starting over"],
    painEnd: "SciNest is not a collection of AI buttons. It stops the research task from breaking apart between tools.",
    flowKicker: "From clutter to deliverables",
    flowTitle: "Each result becomes the starting point for the next step",
    flowBody: "The same materials remain available as the project develops. You spend time judging and refining the work rather than rebuilding context.",
    flow: [["01", "Collect the project", "Import papers, references, notes, documents, presentations and existing images."], ["02", "Understand and shape the idea", "Summarize across sources, compare methods and turn the material into a usable direction."], ["03", "Develop editable writing", "Draft from section goals and key points, then revise, expand or reorganize individual parts."], ["04", "Express the research visually", "Generate a figure from project context, then refine elements, layers, labels and relationships."], ["05", "Build the presentation", "Reuse existing writing and figures, organize the story, then keep editing and export the deck."]],
    outputKicker: "Not a chat response—work you can continue",
    outputTitle: "Get a complete first version quickly, then refine it on your terms",
    outputBody: "When time is short, the whole process needs to flow. When quality matters, you still need precise control over the writing, visuals and slides.",
    outputs: [["Writing", "Turn scattered sources into structured long-form work", "Plan section goals and key points before drafting. Sources, citations and earlier sections stay connected.", ["Section-level structure and goals", "Local rewriting, expansion and reordering", "Continue editing and export"], "/mockup.png"], ["Figures", "Generate, then move, layer and refine precisely", "A scientific figure should not be a locked image. Continue changing position, labels, color, relationships and layout.", ["Layer and element control", "Targeted AI refinement", "Editable layout and visual structure"], "/mockup.png"], ["Presentations", "Your writing and figures are already in the project", "Build a presentation around its audience, purpose and length, reusing work already completed.", ["Purpose- and audience-aware structure", "Reuse project writing and figures", "Editable content and layout"], "/mockup.png"]],
    contextKicker: "One project context",
    contextTitle: "Stop explaining the same research every time you open a new interface",
    contextBody: "Sources, conversations, outlines, writing, figures, presentations and citations are organized around one project.",
    context: [["Source relationships remain available", "Selected materials and generated outputs stay in the project for later tasks."], ["Reasoning does not stay trapped in chat", "Insights can move into outlines, figures and presentations."], ["Changes can continue downstream", "When the written direction changes, figures and slides can be refined rather than rebuilt."]],
    controlKicker: "You keep control",
    controlTitle: "Generation is only useful when you can keep editing",
    controlBody: "Many AI tools produce a finished-looking result that is difficult to change. SciNest gets the first version on screen quickly while keeping refinement in the same workspace.",
    control: ["Writing: revise reasoning, length and wording at paragraph level", "Figures: move elements and adjust layers, labels and relationships", "Slides: replace content, alter layout and reorganize the story"],
    modelKicker: "Local projects + your choice of AI model",
    modelTitle: "You manage the materials and choose the model",
    modelBody: "SciNest is a local desktop workspace and does not sell bundled AI usage. Files and outputs are stored locally by default; model requests send necessary content to the provider you select. The website handles accounts, orders, downloads and licensing.",
    priceKicker: "Founding release",
    priceTitle: "One complete personal edition—not a feature comparison exercise",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "one-time founding price",
    priceFeatures: ["Complete writing, figure and presentation workflow", "1 user and up to 2 personal devices", "12 months of feature updates", "Keep using the purchased version afterwards", "Bring your own model API; model charges are separate"],
    priceCta: "Register for the 7-day trial",
    faqTitle: "What to know before starting",
    faq: [["How is SciNest different from using a general AI tool directly?", "General AI tools are strong at individual conversations. SciNest keeps sources, structure, writing, figures, slides and citations in one project."], ["Does the software price include AI model usage?", "No. The SciNest price covers the software licence. Your selected model provider charges for actual usage."], ["Are my research materials uploaded to SciNest?", "Project files and outputs are stored locally by default. Model tasks send necessary content to the provider you select."], ["How long are updates included?", "The founding personal edition includes 12 months of feature updates. The purchased version remains usable afterwards."], ["Does SciNest guarantee acceptance or accuracy?", "No. It is a creation and productivity tool and does not replace factual verification, supervision or peer review."]],
    finalTitle: "Do not let one research project fragment across a dozen windows",
    finalBody: "Bring the materials into one project, create the complete first version, then keep refining it into work that is genuinely yours.",
    finalCta: "Start exploring SciNest",
  },
} as const;

export function SciNestHome({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const ids = ["workflow", "outputs", "why", "pricing", "faq"];
  const other = locale === "zh" ? "/en" : "/";
  const price = pricing[locale];
  return (
    <div className={styles.page} lang={c.lang}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a className={styles.brand} href="#top"><span>S</span><strong>SciNest<small>{c.subBrand}</small></strong></a>
          <nav>{c.nav.map((item, i) => <a href={`#${ids[i]}`} key={item}>{item}</a>)}</nav>
          <div className={styles.actions}><a href={other}>{locale === "zh" ? "EN" : "中文"}</a><a href="/login">{c.login}</a><a className={styles.smallPrimary} href="/login?intent=trial">{c.start}</a></div>
        </div>
      </header>

      <main>
        <section className={styles.hero} id="top">
          <div className={styles.heroCopy}><p className={styles.eyebrow}>{c.eyebrow}</p><h1>{c.title}</h1><p className={styles.lead}>{c.intro}</p><div className={styles.ctas}><a className={styles.primary} href="/login?intent=trial">{c.primary} ↗</a><a className={styles.secondary} href="#workflow">{c.secondary}</a></div><p className={styles.note}>✓ {c.note}</p></div>
          <div className={styles.heroVisual}><img src="/mockup.png" alt="SciNest research workspace" /><span className={styles.floatTop}>01 · {c.flow[0][1]}</span><span className={styles.floatBottom}>05 · {c.flow[4][1]}</span></div>
        </section>

        <section className={styles.stats}>{c.stats.map(([v, l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</section>

        <section className={styles.section} id="why"><div className={styles.sectionHead}><p>{c.painKicker}</p><h2>{c.painTitle}</h2><span>{c.painBody}</span></div><div className={styles.compare}><article className={styles.old}><h3>× {c.oldTitle}</h3><ol>{c.old.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article><i>→</i><article className={styles.new}><h3>✓ {c.newTitle}</h3><ol>{c.newer.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article></div><p className={styles.conclusion}>{c.painEnd}</p></section>

        <section className={`${styles.section} ${styles.soft}`} id="workflow"><div className={styles.sectionHead}><p>{c.flowKicker}</p><h2>{c.flowTitle}</h2><span>{c.flowBody}</span></div><div className={styles.flow}>{c.flow.map(([n, t, b]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>

        <section className={styles.section} id="outputs"><div className={styles.sectionHead}><p>{c.outputKicker}</p><h2>{c.outputTitle}</h2><span>{c.outputBody}</span></div><div className={styles.outputs}>{c.outputs.map(([label, title, body, bullets, image], i) => <article key={label}><div><small>{String(i + 1).padStart(2, "0")} · {label}</small><h3>{title}</h3><p>{body}</p><ul>{bullets.map(x => <li key={x}>✓ {x}</li>)}</ul></div><img src={image} alt={`${label} interface`} /></article>)}</div></section>

        <section className={`${styles.section} ${styles.context}`}><div><p className={styles.kicker}>{c.contextKicker}</p><h2>{c.contextTitle}</h2><span>{c.contextBody}</span></div><div>{c.context.map(([t, b], i) => <article key={t}><b>{String(i + 1).padStart(2, "0")}</b><span><h3>{t}</h3><p>{b}</p></span></article>)}</div></section>

        <section className={styles.section}><div className={styles.control}><div><p className={styles.kicker}>{c.controlKicker}</p><h2>{c.controlTitle}</h2><span>{c.controlBody}</span></div><ul>{c.control.map(x => <li key={x}>✓ {x}</li>)}</ul></div></section>

        <section className={`${styles.section} ${styles.model}`}><p className={styles.kicker}>{c.modelKicker}</p><h2>{c.modelTitle}</h2><p>{c.modelBody}</p></section>

        <section className={styles.section} id="pricing"><div className={styles.sectionHead}><p>{c.priceKicker}</p><h2>{c.priceTitle}</h2></div><article className={styles.price}><div><span>{c.plan}</span><small>{price.standard} {locale === "zh" ? "标准价" : "standard"}</small></div><h3>{price.founding}<small>{c.priceUnit}</small></h3><ul>{c.priceFeatures.map(x => <li key={x}>✓ {x}</li>)}</ul><a className={styles.primary} href="/login?intent=trial">{c.priceCta} ↗</a></article></section>

        <section className={`${styles.section} ${styles.soft}`} id="faq"><div className={styles.sectionHead}><h2>{c.faqTitle}</h2></div><div className={styles.faq}>{c.faq.map(([q, a]) => <details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>

        <section className={styles.final}><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><a className={styles.lightButton} href="/login?intent=trial">{c.finalCta} ↗</a></section>
      </main>

      <footer><div><strong>SciNest · {locale === "zh" ? "科研小棉袄" : "Research creation workspace"}</strong><span>{locale === "zh" ? "由 Jiaempower Pathways Limited 运营" : "Operated by Jiaempower Pathways Limited"}</span></div><nav><a href="#">{locale === "zh" ? "隐私政策" : "Privacy"}</a><a href="#">{locale === "zh" ? "服务条款" : "Terms"}</a><a href="#">{locale === "zh" ? "退款政策" : "Refund policy"}</a></nav><small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small></footer>
    </div>
  );
}

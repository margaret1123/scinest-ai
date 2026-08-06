import styles from "./scinest-home.module.css";
import launchStyles from "./prelaunch.module.css";
import { pricing, type Locale } from "./home-content";
import { DownloadCTA } from "./download-cta";
import { LangSwitch } from "./lang-switch";

const content = {
  en: {
    lang: "en",
    subBrand: "Beyond the chat window",
    nav: ["How it works", "Editable outputs", "Free vs Pro", "FAQ"],
    login: "Sign in",
    start: "Download SciNest Free",
    strip: "SciNest Free for Windows",
    stripOffer: "Pro unlocked for new accounts",
    eyebrow: "WINDOWS DESKTOP · BRING YOUR OWN API KEY · CHATGPT, DEEPSEEK, CLAUDE",
    title: <>One workspace. <em>Draft, revise, and finish the full paper. Build the deck. Create the diagrams.</em></>,
    intro: "ChatGPT, DeepSeek and Claude can all help you draft and revise long-form academic work, build editable presentations and generate diagrams — when they have the right workspace. Bring your own API key. Stop fighting the chat window.",
    primary: "Download SciNest Free",
    secondary: "See Free vs Pro",
    note: "Free download · Pro unlocked · Use ChatGPT, DeepSeek or Claude API",
    installNote: ".zip file — extract and run SciNest.exe. If you downloaded the .exe version, click More info → Run anyway to install safely.",
    stats: [
      ["Unlimited AI generations", "Free and Pro both use your own API key — SciNest never limits your output"],
      ["Editable diagrams & images", "Generate diagrams with real text labels you can change; Pro unlocks layer editing and watermark-free export"],
      ["Real PPTX presentations", "Not a screenshot. Not HTML. A standard .PPTX file you can open and keep editing"],
      ["One connected project", "Keep writing, images, slides and source context together — no copy-paste between tools"],
    ],
    painKicker: "THE CHAT WINDOW IS THE BOTTLENECK",
    painTitle: "The AI is capable. The interface holds it back.",
    painBody: "ChatGPT, DeepSeek and Claude all have the intelligence to write long papers, build presentations and create diagrams. But the chat window was built for conversation — not for managing a 15,000-word document, an editable slide deck or a layered diagram.",
    oldTitle: "The chat-window scramble",
    old: ["Copy-paste between chat windows", "Lose context after a few exchanges", "Regenerate the entire output for one change", "Re-explain the same research to every new AI", "End up with disconnected fragments"],
    newTitle: "One connected workspace",
    newer: ["Bring in papers, drafts and feedback", "Build the outline — edit it before a word is written", "Generate the full draft, deck or diagram", "Revise the part that needs changing — not everything", "Export your work and keep editing"],
    flowKicker: "START WITH WHAT YOU ALREADY HAVE",
    flowTitle: "From scattered materials to connected outputs",
    flowBody: "Each output continues from the materials and decisions already inside the project. No re-explaining. No copy-paste between tools.",
    flow: [
      ["01", "Bring in the existing work", "Add papers, references, notes, drafts, feedback, data and images — anything that belongs to the task."],
      ["02", "Define the outline", "Set the structure before generating. Chapters for a paper. Slides for a deck. Panels for a diagram. Change it anytime."],
      ["03", "Generate the complete output", "Choose your AI provider — ChatGPT, DeepSeek or Claude. The workspace generates a full connected draft, not a disconnected chat reply."],
      ["04", "Edit what needs editing", "A supervisor comment on chapter 3? Fix just that section. A typo on one slide? Edit that slide. A label on a diagram? Change it."],
      ["05", "Export and keep working", "Standard .PPTX, document or image export. The output is yours — open it, present it, submit it."],
    ],
    outputKicker: "NOT ANOTHER ANSWER TO COPY AND PASTE",
    outputTitle: "The result should reduce the work left—not create another editing job.",
    outputBody: "SciNest keeps the writing, figures and presentation connected so each result can become the next input.",
    outputs: [
      ["01 · Academic writing", "Revise without losing the material behind the draft", "Keep the current draft, papers and supervisor feedback inside one project.", ["Theses, literature reviews, proposals and reports", "Targeted revision from feedback", "Editable writing for user review"]],
      ["02 · Scientific figures", "Make the research understandable—not trapped in a locked image", "Turn methods, mechanisms and relationships into scientific visuals.", ["Research roadmaps and mechanism diagrams", "Pro layer, label and element editing", "Reusable across the same project"]],
      ["03 · Defense presentations", "Turn the thesis into a defense narrative", "Build the presentation around contribution, evidence, audience and time limit.", ["Thesis defense and academic presentations", "Free PDF export", "Pro editable PowerPoint export"]],
    ],
    bentoKicker: "AI IS NOT THE PRODUCT. COMPLETION IS.",
    bentoTitle: "General AI gives you an answer. SciNest keeps the academic task moving.",
    bentoBody: "The value is keeping sources, writing, figures and slides connected instead of rebuilding the same research context.",
    contextTitle: "The project remembers the context",
    contextBody: "Sources, notes, feedback, writing, figures, slides and citations remain organised around the same task.",
    editTitle: "Generate without SciNest limits",
    editBody: "Both plans allow unlimited generation because model usage is paid through your own API key.",
    modelTitle: "Local project, your AI provider",
    modelBody: "Project files and outputs stay local by default. AI tasks are sent to the provider you configure.",
    guideLinks: {
      eyebrow: "HOW TO USE YOUR AI KEY",
      title: "Draft papers, build decks, create diagrams",
      links: [
        ["Draft 10,000+ word papers", "How to use ChatGPT, DeepSeek or Claude API for complete long-form writing →", "/ai-long-form-writer"],
        ["Create real editable PPTX", "Standard PowerPoint files — not screenshots, not HTML slideshows →", "/ai-editable-powerpoint"],
        ["Generate editable diagrams", "Change text labels, move elements, revise selected areas →", "/ai-editable-images"],
      ],
    },
    planKicker: "FREE TO START · PRO WHEN YOU NEED TO FINISH",
    planTitle: "Generate freely. Upgrade for professional editing and final delivery.",
    freeName: "SciNest Free",
    freeDesc: "For occasional work and one active project.",
    freeFeatures: ["Unlimited SciNest generations", "1 active project", "Writing generation and revision", "Scientific figure export with watermark", "Presentation export as PDF", "No figure layer editing"],
    proName: "SciNest Pro",
    proDesc: "For continuous coursework, thesis work and multiple projects.",
    proFeatures: ["Unlimited SciNest generations", "Multiple projects", "Watermark-free figure export", "Figure layer, label and element editing", "Editable PowerPoint export", "Pro unlocked from day one"],
    planNote: "AI provider charges are paid through your own API key.",
    faqTitle: "Quick answers",
    faq: [
      ["How do I get started?", "Download SciNest Free for Windows. Create an account, add your AI API key, and open your first project."],
      ["What's in Pro?", "Multiple projects, watermark-free scientific figures, layer editing, and editable PowerPoint export."],
      ["Are generations limited?", "No. Free and Pro both allow unlimited SciNest generations. Your selected AI provider charges separately for actual API usage."],
      ["Does SciNest guarantee a grade, graduation or publication?", "No. Users remain responsible for checking facts, citations, originality and institutional AI-use rules."],
      ["Is SciNest an essay-writing service?", "No. SciNest is a desktop workspace that connects to your own AI API key. It helps you organize materials, build outlines, draft and revise your own work — you stay in control of every word. A ghostwriting service would not ask you to bring your own API key. Users are responsible for ensuring their work complies with their institution's academic integrity and AI-use policies."],
    ],
    academicIntegrity: {
      title: "Academic Integrity",
      body: "SciNest is a research productivity workspace — not an essay-writing or ghostwriting service. You bring your own AI API key, your own research materials, and your own expertise. SciNest provides the workspace to organize, outline, draft and revise — but you stay in control of every word. Users are responsible for fact-checking, verifying citations, ensuring originality, and complying with their institution's academic integrity and AI-use policies.",
    },
    finalTitle: "Your thesis won't write itself",
    finalBody: "Download SciNest Free for Windows. Pro is already unlocked.",
    finalCta: "Download SciNest Free",
  },
  zh: {
    lang: "zh-CN",
    subBrand: "不只是聊天窗口",
    nav: ["如何使用", "可编辑成果", "Free 与 Pro", "常见问题"],
    login: "登录",
    start: "下载 SciNest Free",
    strip: "SciNest Free · Windows 版",
    stripOffer: "新账户即享 Pro",
    eyebrow: "WINDOWS 桌面端 · 自带 API KEY · CHATGPT / DEEPSEEK / CLAUDE",
    title: <>一个工作区。<em>起草、修改、完成你自己的论文。做可编辑 PPT。画可修改的图。</em></>,
    intro: "ChatGPT、DeepSeek、Claude 都能帮你起草和修改长文学术内容、做可编辑 PPT、生成可修改的图表——只要给它们对的工具。自带 API Key，别再跟聊天窗口较劲。",
    primary: "下载 SciNest Free",
    secondary: "查看 Free 与 Pro",
    note: "免费下载 · Pro 已解锁 · 支持 ChatGPT / DeepSeek / Claude API",
    installNote: ".zip 压缩包 — 解压后直接运行 SciNest.exe。如果下载的是 .exe 安装版，点击「更多信息」→「仍要运行」即可放心安装。",
    stats: [
      ["AI 生成不限次数", "Free 与 Pro 均使用你自己的 API Key，SciNest 不限制生成次数"],
      ["可编辑图片与图表", "生成带真实文字标签的图表，支持图层编辑和无水印导出"],
      ["真正可编辑的 PPTX", "不是截图，不是 HTML。标准 PPTX 文件，打开就能继续改"],
      ["一个连续项目", "文稿、图片、幻灯片和材料上下文保持连接，不用在工具间复制粘贴"],
    ],
    painKicker: "聊天窗口是瓶颈",
    painTitle: "AI 够聪明，对话界面拖了后腿",
    painBody: "ChatGPT、DeepSeek、Claude 都有写长文、做 PPT、画图的能力。但聊天窗口是为对话设计的，不是为管理一万五千字的文档、可编辑的幻灯片或分层图表而建的。",
    oldTitle: "聊天窗口的困境",
    old: ["在多个对话窗口间复制粘贴", "几次对话后丢失上下文", "改一个字就得重新生成全部内容", "向每个新 AI 重新解释同一份研究", "最后得到一堆互不关联的碎片"],
    newTitle: "一个连接的工作区",
    newer: ["导入论文、草稿和导师意见", "先定大纲——在动笔前把结构调好", "生成完整文稿、幻灯片或图表", "只修改需要改的部分，不用推翻全部", "导出成果，继续编辑"],
    flowKicker: "从你已经完成的工作开始",
    flowTitle: "把散乱材料变成互相连接的成果",
    flowBody: "每一步都继承项目中已有的材料和判断。不用重新解释，不用在工具间复制粘贴。",
    flow: [
      ["01", "放入已有材料", "导入论文、文献、笔记、草稿、导师意见、数据和图片——任何跟任务相关的内容。"],
      ["02", "定义结构", "生成前先定大纲。论文定章节。PPT 定页面。图表定板块。随时可以改。"],
      ["03", "生成完整输出", "选择你的 AI —— ChatGPT、DeepSeek 或 Claude。工作区生成完整连贯的草稿，不是断开的聊天回复。"],
      ["04", "只改需要改的部分", "导师对第三章有意见？只修那一段。某一页 PPT 有错字？只改那一页。图表标签要更新？直接改。"],
      ["05", "导出继续编辑", "标准 PPTX、文档或图片导出。成果是你的——打开、展示、提交。"],
    ],
    outputKicker: "不是又一段需要复制粘贴的回答",
    outputTitle: "结果应该减少剩余工作，而不是制造新的返工",
    outputBody: "SciNest 让文稿、科研图和 PPT 保持连接，使前一个成果成为下一个任务的输入。",
    outputs: [
      ["01 · 论文与研究文稿", "修改论文时，不再丢掉背后的材料", "把草稿、文献和导师意见放在同一个项目中。", ["论文、综述、Proposal 与课程报告", "围绕导师意见定向修改", "文稿可继续检查和编辑"]],
      ["02 · 科研图", "让别人看懂研究，而不是得到一张锁死的图片", "把方法、机制和关系变成科研视觉表达。", ["技术路线、机制图与研究框架", "Pro 支持图层、标签和元素编辑", "在同一项目中重复使用"]],
      ["03 · 答辩与研究汇报", "把论文变成答辩逻辑，而不是套通用模板", "围绕研究贡献、证据、受众和时长组织汇报。", ["毕业答辩与学术汇报", "Free 导出 PDF", "Pro 导出可编辑 PowerPoint"]],
    ],
    bentoKicker: "卖点不是 AI，而是把任务完成",
    bentoTitle: "通用 AI 给你一个回答，SciNest 让整项学术任务继续向前",
    bentoBody: "价值在于让材料、文稿、科研图和 PPT 互相继承，减少重复劳动。",
    contextTitle: "项目持续保留研究背景",
    contextBody: "资料、笔记、导师意见、文稿、科研图、PPT 和引用围绕同一任务组织。",
    editTitle: "生成不限次数",
    editBody: "Free 与 Pro 都不限制 SciNest 内的生成次数，因为模型调用使用用户自己的 API。",
    modelTitle: "本地项目，自选模型",
    modelBody: "项目文件和成果默认保存在本地；AI 任务发送给你选择并配置的模型服务商。",
    guideLinks: {
      eyebrow: "如何用好你的 API KEY",
      title: "起草长文、做 PPT、画可编辑的图",
      links: [
        ["起草万字长文", "如何用 ChatGPT、DeepSeek 或 Claude API 完成完整长文写作 →", "/zh/ai-long-form-writer"],
        ["生成可编辑 PPTX", "标准 PowerPoint 文件 — 不是截图，不是 HTML →", "/zh/ai-editable-powerpoint"],
        ["画可修改的图表", "改文字标签、移动元素、只重绘选定区域 →", "/zh/ai-editable-images"],
      ],
    },
    planKicker: "FREE 免费开始 · PRO 完成专业交付",
    planTitle: "自由生成，需要专业编辑与最终交付时再升级。",
    freeName: "SciNest Free",
    freeDesc: "适合偶尔使用和单个活跃项目。",
    freeFeatures: ["SciNest 生成不限次数", "1个活跃项目", "文稿生成与修改", "科研图导出带水印", "PPT 导出为 PDF", "不支持科研图图层编辑"],
    proName: "SciNest Pro",
    proDesc: "适合持续课程、论文和多个项目。",
    proFeatures: ["SciNest 生成不限次数", "多项目", "科研图无水印导出", "图层、标签和元素编辑", "导出可编辑 PowerPoint", "首日即享 Pro"],
    planNote: "模型调用费通过你自己的 API Key 支付。",
    faqTitle: "常见问题",
    faq: [
      ["如何开始？", "下载 SciNest Free Windows 版，创建账户，配置 AI API Key，打开第一个项目。"],
      ["Pro 有什么？", "多项目、科研图无水印导出、图层编辑、可编辑 PowerPoint 导出。"],
      ["生成次数有限制吗？", "没有。Free 与 Pro 均不限 SciNest 生成次数，模型服务商按你自己的 API 实际用量收费。"],
      ["SciNest 保证成绩、毕业或发表吗？", "不保证。用户仍需核查事实、引用、原创性，并遵守所在机构的 AI 使用规则。"],
      ["SciNest 是论文代写服务吗？", "不是。SciNest 是桌面工作区，连接你自己的 AI API Key。它帮助你组织材料、构建大纲、起草和修改你自己的作品——每一个字都由你掌控。代写服务不会让你自带 API Key。用户有责任确保自己的作品符合所在机构的学术诚信和 AI 使用规范。"],
    ],
    academicIntegrity: {
      title: "学术诚信声明",
      body: "SciNest 是科研生产力工作区，不是论文代写或学术不端服务平台。用户使用自己的 API Key、自己的研究材料、自己的专业知识。SciNest 提供的是组织、大纲、起草和修改的工作区——每一个字都由用户主导。用户有责任核查事实、引用和原创性，并遵守所在机构的学术诚信与 AI 使用规范。",
    },
    finalTitle: "论文不会自己写完",
    finalBody: "下载 SciNest Free Windows 版，Pro 已就绪。",
    finalCta: "下载 SciNest Free",
  },
} as const;

const productPages = {
  writing: "/ai-thesis-writing-assistant",
  figures: "/scientific-figure-generator",
  powerpoint: "/ai-powerpoint-generator",
} as const;

export function SciNestHome({ locale }: { locale: Locale }) {
  const c = content[locale];
  const image = (name: string) => `/scinest/${name}-en.webp`;
  const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";
  const heroAlt = locale === "zh" ? "SciNest 论文修改、科研图与答辩PPT工作台" : "SciNest thesis revision, scientific figure and thesis defense presentation workspace";
  const writingAlt = locale === "zh" ? "SciNest 可编辑论文与研究文稿工作区" : "SciNest editable thesis and academic writing workspace";
  const figureAlt = locale === "zh" ? "SciNest 科研图编辑界面" : "SciNest scientific figure editor";
  const pptAlt = locale === "zh" ? "SciNest 答辩PPT工作流" : "SciNest thesis defense presentation workflow";
  const productLinkLabels = locale === "zh"
    ? { writing: "查看论文写作详情 →", figures: "查看科研图详情 →", powerpoint: "查看可编辑 PPT 详情 →" }
    : { writing: "Explore academic writing →", figures: "Explore editable scientific figures →", powerpoint: "Explore editable PowerPoint →" };

  return <div className={styles.page} lang={c.lang}>
    <div className={launchStyles.launchStrip}><strong>{c.strip}</strong><span>{c.stripOffer}</span></div>
    <header className={styles.header}><div className={styles.navbar}>
      <a className={styles.brand} href="#top"><span>S</span><strong>SciNest<small>{c.subBrand}</small></strong></a>
      <nav>{c.nav.map((item, i) => <a key={item} href={`#${["why", "workflow", "outputs", "pricing", "faq"][i]}`}>{item}</a>)}</nav>
      <div className={styles.actions}><LangSwitch /><a href="https://github.com/margaret1123/scinest-ai/issues/new/choose" target="_blank" rel="noopener noreferrer">{locale === "zh" ? "反馈" : "Feedback"}</a><a href="/login">{c.login}</a><DownloadCTA className={styles.smallPrimary} href={downloadUrl} placement="nav">{c.start}</DownloadCTA></div>
    </div></header>
    <main>
      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{c.eyebrow}</p><h1>{c.title}</h1><p className={styles.lead}>{c.intro}</p><div className={styles.ctas}><DownloadCTA className={styles.primary} href={downloadUrl} placement="hero">{c.primary} ↗</DownloadCTA><a className={styles.secondary} href="#pricing">{c.secondary}</a></div><p className={styles.note}>✓ {c.note}</p><p className={styles.note} style={{ fontSize: 12, opacity: 0.7 }}>💡 {c.installNote}</p></div>
        <div className={styles.heroVisual}><img src={image("hero")} alt={heroAlt} width="1280" height="800" /><span className={styles.floatTop}>01 · {c.flow[0][1]}</span><span className={styles.floatBottom}>05 · {c.flow[4][1]}</span></div>
      </section>
      <section className={styles.stats}>{c.stats.map(([v, l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</section>
      <section className={styles.videoSection}><p className={styles.videoKicker}>{locale === "zh" ? "30 秒了解 SciNest" : "See SciNest in 30 seconds"}</p><video src="/scinest-promo.mp4" poster={image("hero")} width={1280} height={800} autoPlay muted loop playsInline preload="metadata" controls aria-label="SciNest product demo video" /></section>
      <section className={`${styles.section} ${styles.darkCompare}`} id="why"><div className={styles.sectionHead}><p>{c.painKicker}</p><h2>{c.painTitle}</h2><span>{c.painBody}</span></div><div className={styles.compare}><article className={styles.old}><h3>{c.oldTitle}</h3><ol>{c.old.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article><div className={styles.bridge}>→</div><article className={styles.new}><h3>{c.newTitle}</h3><ol>{c.newer.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article></div></section>
      <section className={`${styles.section} ${styles.workflow}`} id="workflow"><div className={styles.sectionHead}><p>{c.flowKicker}</p><h2>{c.flowTitle}</h2><span>{c.flowBody}</span></div><div className={styles.flow}>{c.flow.map(([n, t, b]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>
      {"guideLinks" in c && (
        <section style={{maxWidth:1180, margin:"0 auto", padding:"60px 28px", textAlign:"center"}}>
          <p style={{color:"#087f72", fontSize:13, fontWeight:850, letterSpacing:".12em", margin:0}}>{c.guideLinks.eyebrow}</p>
          <h2 style={{fontSize:"clamp(26px,3.4vw,40px)", lineHeight:1.15, letterSpacing:"-.03em", margin:"16px 0 36px", fontFamily:"Georgia,Times New Roman,serif"}}>{c.guideLinks.title}</h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16, maxWidth:900, margin:"0 auto"}}>
            {c.guideLinks.links.map(([title, desc, href]) => (
              <a key={href} href={href} style={{background:"#fff", border:"1px solid rgba(7,95,85,.14)", borderRadius:20, padding:"28px 24px", textDecoration:"none", color:"inherit", textAlign:"left", transition:"transform 180ms ease,box-shadow 180ms ease"}}>
                <h3 style={{margin:"0 0 8px", fontSize:18, color:"#0a2030"}}>{title}</h3>
                <p style={{margin:0, fontSize:14, color:"#5e6f7c", lineHeight:1.65}}>{desc}</p>
              </a>
            ))}
          </div>
        </section>
      )}
      <section className={`${styles.section} ${styles.outputs}`} id="outputs"><div className={styles.sectionHead}><p>{c.outputKicker}</p><h2>{c.outputTitle}</h2><span>{c.outputBody}</span></div>
        <article className={styles.outputRow}>
          <div><small>{c.outputs[0][0]}</small><h3>{c.outputs[0][1]}</h3><p>{c.outputs[0][2]}</p><ul>{c.outputs[0][3].map(x => <li key={x}>✓ {x}</li>)}</ul><div className={styles.ctas}><a className={styles.secondary} href={productPages.writing}>{productLinkLabels.writing}</a></div></div>
          <figure><a href={productPages.writing} aria-label={productLinkLabels.writing} style={{ display: "block" }}><img src={image("writing-ui")} alt={writingAlt} width="1280" height="800" loading="lazy" /></a></figure>
        </article>
        <article className={styles.figureFeature}>
          <div><small>{c.outputs[1][0]}</small><h3>{c.outputs[1][1]}</h3><p>{c.outputs[1][2]}</p><ul>{c.outputs[1][3].map(x => <li key={x}>✓ {x}</li>)}</ul><div className={styles.ctas} style={{ justifyContent: "center" }}><a className={styles.secondary} href={productPages.figures}>{productLinkLabels.figures}</a></div></div>
          <figure><a href={productPages.figures} aria-label={productLinkLabels.figures} style={{ display: "block" }}><img src={image("figures-ui")} alt={figureAlt} width="1280" height="640" loading="lazy" /></a></figure>
        </article>
        <article className={`${styles.outputRow} ${styles.reverse}`}>
          <figure><a href={productPages.powerpoint} aria-label={productLinkLabels.powerpoint} style={{ display: "block" }}><img src={image("ppt-ui")} alt={pptAlt} width="1280" height="800" loading="lazy" /></a></figure>
          <div><small>{c.outputs[2][0]}</small><h3>{c.outputs[2][1]}</h3><p>{c.outputs[2][2]}</p><ul>{c.outputs[2][3].map(x => <li key={x}>✓ {x}</li>)}</ul><div className={styles.ctas}><a className={styles.secondary} href={productPages.powerpoint}>{productLinkLabels.powerpoint}</a></div></div>
        </article>
      </section>
      <section className={`${styles.section} ${styles.bento}`}><div className={styles.bentoIntro}><p className={styles.kicker}>{c.bentoKicker}</p><h2>{c.bentoTitle}</h2><p>{c.bentoBody}</p></div><article className={styles.bentoMain}><span>01</span><h3>{c.contextTitle}</h3><p>{c.contextBody}</p></article><article><span>02</span><h3>{c.editTitle}</h3><p>{c.editBody}</p></article><article><span>03</span><h3>{c.modelTitle}</h3><p>{c.modelBody}</p></article></section>
      <section className={styles.section} id="pricing"><div className={styles.sectionHead}><p>{c.planKicker}</p><h2>{c.planTitle}</h2></div><div className={launchStyles.planGrid}><article className={launchStyles.planCard}><span className={launchStyles.planBadge}>FREE</span><h3>{c.freeName}</h3><p>{c.freeDesc}</p><p style={{fontSize:28,fontWeight:900,color:"#087569",margin:"0 0 8px"}}>{locale === "zh" ? "免费" : "Free"}</p><ul>{c.freeFeatures.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article><article className={`${launchStyles.planCard} ${launchStyles.planCardPro}`}><span className={launchStyles.planBadge}>PRO</span><h3>{c.proName}</h3><p>{c.proDesc}</p><p style={{fontSize:28,fontWeight:900,color:"#72e3d4",margin:"0 0 8px"}}>{pricing[locale].pro}</p><ul>{c.proFeatures.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article></div><p className={launchStyles.planNote}>{c.planNote}</p><div className={styles.ctas} style={{justifyContent:"center"}}><DownloadCTA className={styles.primary} href={downloadUrl} placement="hero">{c.primary} ↗</DownloadCTA></div></section>
      <section className={`${styles.section} ${styles.faqSection}`} id="faq"><div className={styles.sectionHead}><h2>{c.faqTitle}</h2></div><div className={styles.faq}>{c.faq.map(([q, a]) => <details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      {"academicIntegrity" in c && (
        <section className={styles.section} style={{maxWidth:860, margin:"0 auto", padding:"48px 28px", textAlign:"center"}}>
          <div className={styles.sectionHead}>
            <h2>{c.academicIntegrity.title}</h2>
            <p style={{maxWidth:720, margin:"16px auto 0", fontSize:15, lineHeight:1.75, color:"#5e6f7c"}}>{c.academicIntegrity.body}</p>
          </div>
        </section>
      )}
      <section className={styles.final}><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><DownloadCTA className={styles.lightButton} href={downloadUrl} placement="final">{c.finalCta} ↗</DownloadCTA></section>
    </main>
    <footer><div><strong>SciNest · {locale === "zh" ? "科研小棉袄" : "Academic work, finished"}</strong><span>{locale === "zh" ? "由 Jiaempower Pathways Limited 运营" : "Operated by Jiaempower Pathways Limited"}</span></div><nav><a href="/privacy">{locale === "zh" ? "隐私政策" : "Privacy"}</a><a href="/terms">{locale === "zh" ? "服务条款" : "Terms"}</a><a href="/refund-policy">{locale === "zh" ? "退款政策" : "Refund policy"}</a><a href="https://github.com/margaret1123/scinest-ai/issues/new/choose" target="_blank" rel="noopener noreferrer">{locale === "zh" ? "反馈" : "Feedback"}</a></nav><small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small></footer>
  </div>;
}

import styles from "./scinest-home.module.css";
import launchStyles from "./prelaunch.module.css";
import { pricing, type Locale } from "./home-content";

const content = {
  en: {
    lang: "en",
    subBrand: "Academic work, finished",
    nav: ["Your situation", "How it works", "Editable outputs", "Free vs Pro", "FAQ"],
    login: "Sign in",
    start: "Get SciNest Free",
    strip: "SciNest Free for Windows",
    stripOffer: "Pro unlocked for new accounts",
    eyebrow: "WINDOWS DESKTOP · BRING YOUR OWN AI KEY",
    title: <>One deadline. <em>A thesis to revise. Figures to finish. Slides to build.</em></>,
    intro: "Bring papers, notes, drafts, data and supervisor feedback into one project. SciNest helps turn the work you already have into academic writing, scientific figures and a defense-ready presentation.",
    primary: "Get SciNest Free",
    secondary: "See Free vs Pro",
    note: "Free download · Pro unlocked · Bring your own AI key",
    stats: [
      ["Unlimited generation", "Free and Pro both use your own AI key, so SciNest does not meter generations"],
      ["Scientific figures", "Generate research visuals; Pro unlocks layer editing and watermark-free export"],
      ["Defense slides", "Build the presentation in both plans; Pro exports an editable PowerPoint"],
      ["One connected project", "Keep writing, figures, slides and source context together"],
    ],
    painKicker: "THE LAST PART IS NEVER JUST ONE TASK",
    painTitle: "The research may be there. The deliverables are still piling up.",
    painBody: "Supervisor revisions, literature review, research figures and defense slides keep rebuilding the same research in different tools.",
    oldTitle: "The usual deadline scramble",
    old: ["Search through papers again", "Re-explain the research to another AI", "Recreate figures in another tool", "Copy everything into PowerPoint", "Repair inconsistencies before submission"],
    newTitle: "One SciNest project",
    newer: ["Bring in papers, drafts and feedback", "Keep source context connected", "Revise the writing", "Turn methods and findings into figures", "Build the defense deck"],
    flowKicker: "START WITH WHAT YOU ALREADY HAVE",
    flowTitle: "From scattered materials to connected academic outputs",
    flowBody: "Each output continues from the materials and decisions already inside the project.",
    flow: [
      ["01", "Bring in the existing work", "Add papers, references, notes, drafts, feedback, figures and submission requirements."],
      ["02", "State what is unfinished", "Revise a chapter, build a review, create a figure or prepare the defense."],
      ["03", "Build and revise the writing", "Develop the structure, then rewrite or reorganise the parts that still need work."],
      ["04", "Explain the research visually", "Create mechanism diagrams, research roadmaps and graphical abstracts."],
      ["05", "Build the defense deck", "Reuse the writing and figures to prepare slide content and speaker notes."],
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
    ],
    finalTitle: "Your thesis won't write itself",
    finalBody: "Download SciNest Free for Windows. Pro is already unlocked.",
    finalCta: "Get SciNest Free",
  },
  zh: {
    lang: "zh-CN",
    subBrand: "科研小棉袄",
    nav: ["你的处境", "如何完成", "可编辑成果", "Free 与 Pro", "常见问题"],
    login: "登录",
    start: "获取 SciNest Free",
    strip: "SciNest Free · Windows 版",
    stripOffer: "新账户即享 Pro",
    eyebrow: "WINDOWS 桌面端 · 自选 AI 模型",
    title: <>材料多，任务重，时间紧，<br /><em>真正可编辑的</em><br />万字长文、图片、PPT，SciNest 全线解决方案</>,
    intro: "把论文、文献、草稿、数据和导师意见放进同一个项目，继续完成文稿、科研图与答辩 PPT，不必每换一个工具就重新解释和返工。",
    primary: "获取 SciNest Free",
    secondary: "查看 Free 与 Pro",
    note: "免费下载 · Pro 已解锁 · 自带 AI Key",
    stats: [
      ["生成不限次数", "Free 与 Pro 均使用你自己的 AI Key，SciNest 不限制生成次数"],
      ["科研图", "两种方案都能生成；Pro 解锁图层编辑和无水印导出"],
      ["答辩 PPT", "两种方案都能生成；Pro 可导出可编辑 PowerPoint"],
      ["一个连续项目", "文稿、科研图、PPT 与材料上下文保持连接"],
    ],
    painKicker: "最后阶段从来不只剩一件事",
    painTitle: "研究内容可能已经有了，交付物却还在不断堆积",
    painBody: "导师修改、综述、科研图和答辩 PPT，往往需要在不同工具里反复重建同一份研究。",
    oldTitle: "常见的截止日期冲刺",
    old: ["重新翻找论文和笔记", "向另一个 AI 重讲研究背景", "在单独工具里重做科研图", "复制到 PowerPoint 重新排版", "提交前修复前后不一致"],
    newTitle: "一个 SciNest 项目",
    newer: ["导入论文、草稿和导师意见", "让材料与判断保持连接", "继续修改文稿", "把方法和结果转成科研图", "生成答辩 PPT"],
    flowKicker: "从你已经完成的工作开始",
    flowTitle: "把散乱材料变成互相连接的学术成果",
    flowBody: "每一步都继承项目中已有的材料、判断和成果。",
    flow: [
      ["01", "放入已有材料", "导入论文、文献、笔记、草稿、导师意见、图片和提交要求。"],
      ["02", "说明还没完成什么", "修改章节、写综述、做科研图，或准备答辩。"],
      ["03", "生成并修改文稿", "建立结构和章节目标，再改写或重排仍需处理的部分。"],
      ["04", "把研究讲清楚", "生成机制图、技术路线、研究框架或图形摘要。"],
      ["05", "完成答辩 PPT", "复用已有文稿和科研图，形成页面内容和讲稿。"],
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
    ],
    finalTitle: "论文不会自己写完",
    finalBody: "下载 SciNest Free Windows 版，Pro 已就绪。",
    finalCta: "获取 SciNest Free",
  },
} as const;

const productPages = {
  writing: "/ai-thesis-writing-assistant",
  figures: "/scientific-figure-generator",
  powerpoint: "/ai-powerpoint-generator",
} as const;

export function SciNestHome({ locale }: { locale: Locale }) {
  const c = content[locale];
  const other = locale === "zh" ? "/" : "/zh";
  const image = (name: string) => `/scinest/${name}-en.webp`;
  const registerUrl = "/login?redirect=/dashboard&intent=early-bird";
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
      <div className={styles.actions}><a href={other}>{locale === "zh" ? "EN" : "中文"}</a><a href="/login">{c.login}</a><a className={styles.smallPrimary} href={registerUrl}>{c.start}</a></div>
    </div></header>
    <main>
      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{c.eyebrow}</p><h1>{c.title}</h1><p className={styles.lead}>{c.intro}</p><div className={styles.ctas}><a className={styles.primary} href={registerUrl}>{c.primary} ↗</a><a className={styles.secondary} href="#pricing">{c.secondary}</a></div><p className={styles.note}>✓ {c.note}</p></div>
        <div className={styles.heroVisual}><img src={image("hero")} alt={heroAlt} width="1280" height="800" /><span className={styles.floatTop}>01 · {c.flow[0][1]}</span><span className={styles.floatBottom}>05 · {c.flow[4][1]}</span></div>
      </section>
      <section className={styles.stats}>{c.stats.map(([v, l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</section>
      <section className={styles.videoSection}><p className={styles.videoKicker}>{locale === "zh" ? "30 秒了解 SciNest" : "See SciNest in 30 seconds"}</p><video src="/scinest-promo.mp4" poster={image("hero")} width={1280} height={800} autoPlay muted loop playsInline preload="metadata" controls aria-label="SciNest product demo video" /></section>
      <section className={`${styles.section} ${styles.darkCompare}`} id="why"><div className={styles.sectionHead}><p>{c.painKicker}</p><h2>{c.painTitle}</h2><span>{c.painBody}</span></div><div className={styles.compare}><article className={styles.old}><h3>{c.oldTitle}</h3><ol>{c.old.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article><div className={styles.bridge}>→</div><article className={styles.new}><h3>{c.newTitle}</h3><ol>{c.newer.map((x, i) => <li key={x}><b>{String(i + 1).padStart(2, "0")}</b>{x}</li>)}</ol></article></div></section>
      <section className={`${styles.section} ${styles.workflow}`} id="workflow"><div className={styles.sectionHead}><p>{c.flowKicker}</p><h2>{c.flowTitle}</h2><span>{c.flowBody}</span></div><div className={styles.flow}>{c.flow.map(([n, t, b]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>
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
      <section className={styles.section} id="pricing"><div className={styles.sectionHead}><p>{c.planKicker}</p><h2>{c.planTitle}</h2></div><div className={launchStyles.planGrid}><article className={launchStyles.planCard}><span className={launchStyles.planBadge}>FREE</span><h3>{c.freeName}</h3><p>{c.freeDesc}</p><p style={{fontSize:28,fontWeight:900,color:"#087569",margin:"0 0 8px"}}>{locale === "zh" ? "免费" : "Free"}</p><ul>{c.freeFeatures.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article><article className={`${launchStyles.planCard} ${launchStyles.planCardPro}`}><span className={launchStyles.planBadge}>PRO</span><h3>{c.proName}</h3><p>{c.proDesc}</p><p style={{fontSize:28,fontWeight:900,color:"#72e3d4",margin:"0 0 8px"}}>{pricing[locale].pro}</p><ul>{c.proFeatures.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article></div><p className={launchStyles.planNote}>{c.planNote}</p><div className={styles.ctas} style={{justifyContent:"center"}}><a className={styles.primary} href={registerUrl}>{c.primary} ↗</a></div></section>
      <section className={`${styles.section} ${styles.faqSection}`} id="faq"><div className={styles.sectionHead}><h2>{c.faqTitle}</h2></div><div className={styles.faq}>{c.faq.map(([q, a]) => <details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.final}><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><a className={styles.lightButton} href={registerUrl}>{c.finalCta} ↗</a></section>
    </main>
    <footer><div><strong>SciNest · {locale === "zh" ? "科研小棉袄" : "Academic work, finished"}</strong><span>{locale === "zh" ? "由 Jiaempower Pathways Limited 运营" : "Operated by Jiaempower Pathways Limited"}</span></div><nav><a href="/privacy">{locale === "zh" ? "隐私政策" : "Privacy"}</a><a href="/terms">{locale === "zh" ? "服务条款" : "Terms"}</a><a href="/refund-policy">{locale === "zh" ? "退款政策" : "Refund policy"}</a></nav><small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small></footer>
  </div>;
}

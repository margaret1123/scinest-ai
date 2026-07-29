import styles from "./scinest-home.module.css";
import launchStyles from "./prelaunch.module.css";
import { LaunchCountdown } from "./launch-countdown";
import type { Locale } from "./home-content";

const content = {
  en: {
    lang: "en",
    subBrand: "Academic work, finished",
    nav: ["Your situation", "How it works", "Editable outputs", "Free vs Pro", "FAQ"],
    login: "Sign in",
    start: "Claim 30 days of Pro",
    strip: "SciNest Free opens August 1, 2026",
    stripOffer: "Register before launch and get 30 days of Pro free.",
    eyebrow: "PRE-LAUNCH · WINDOWS DESKTOP · BRING YOUR OWN AI KEY",
    title: <>One deadline. <em>A thesis to revise. Figures to finish. Slides to build.</em></>,
    intro: "Bring papers, notes, drafts, data and supervisor feedback into one project. SciNest helps turn the work you already have into academic writing, scientific figures and a defense-ready presentation.",
    offerTitle: "Register before August 1. Unlock 30 days of SciNest Pro free.",
    offerBody: "No credit card. No automatic charge. Pro access starts when downloads open, then returns to the Free plan unless you choose to upgrade.",
    primary: "Claim 30 days of Pro",
    secondary: "See Free vs Pro",
    note: "Downloads not open yet · Registration is open · You pay AI providers directly — no markup",
    stats: [
      ["Unlimited generation", "BYOK means no AI markup and no usage limits — you pay your chosen provider directly at cost"],
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
    proFeatures: ["Unlimited SciNest generations", "Multiple projects", "Watermark-free figure export", "Figure layer, label and element editing", "Editable PowerPoint export", "30 days free for pre-launch registrations"],
    planNote: "AI provider usage charges are paid through your own API key. Downloads and public payment are not open during pre-launch.",
    faqTitle: "Clear answers before launch",
    faq: [
      ["When can I download SciNest?", "SciNest Free is scheduled to open for Windows downloads on August 1, 2026."],
      ["What does the early-bird offer include?", "Accounts registered before launch receive 30 days of Pro access when downloads open. No credit card is required and there is no automatic charge."],
      ["Are generations limited?", "No. Free and Pro both allow unlimited SciNest generations. Your selected AI provider charges separately for actual API usage."],
      ["What happens after the 30 days?", "The account returns to SciNest Free unless the user chooses to upgrade."],
      ["Does SciNest guarantee a grade, graduation or publication?", "No. Users remain responsible for checking facts, citations, originality and institutional AI-use rules."],
    ],
    finalTitle: "Register now. Start with Free on August 1.",
    finalBody: "Register before launch to unlock 30 days of Pro—without a card or automatic charge.",
    finalCta: "Claim early-bird Pro",
  },
  zh: {
    lang: "zh-CN",
    subBrand: "科研小棉袄",
    nav: ["你的处境", "如何完成", "可编辑成果", "Free 与 Pro", "常见问题"],
    login: "登录",
    start: "领取30天 Pro",
    strip: "SciNest Free 将于 2026 年 8 月 1 日开放下载",
    stripOffer: "上线前注册，免费获得30天 Pro。",
    eyebrow: "预开放 · WINDOWS 桌面端 · 使用自己的 AI KEY",
    title: <>材料多，任务重，时间紧，<br /><em>真正可编辑的</em><br />万字长文、图片、PPT，SciNest 全线解决方案</>,
    intro: "把论文、文献、草稿、数据和导师意见放进同一个项目，继续完成文稿、科研图与答辩 PPT，不必每换一个工具就重新解释和返工。",
    offerTitle: "8月1日前注册，免费获得30天 SciNest Pro。",
    offerBody: "无需银行卡，不会自动扣费。下载开放后开始计算 Pro 权益，30天后自动回到 Free，是否升级由你决定。",
    primary: "领取30天 Pro",
    secondary: "查看 Free 与 Pro",
    note: "暂未开放下载 · 已开放注册 · 模型服务商 API 调用费另付",
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
    proFeatures: ["SciNest 生成不限次数", "多项目", "科研图无水印导出", "图层、标签和元素编辑", "导出可编辑 PowerPoint", "上线前注册送30天 Pro"],
    planNote: "模型调用费通过用户自己的 API 支付。预开放期间暂不提供下载，也不开放公开付款。",
    faqTitle: "上线前，把关键问题说清楚",
    faq: [
      ["什么时候可以下载 SciNest？", "SciNest Free 计划于 2026 年 8 月 1 日开放 Windows 下载。"],
      ["早鸟权益是什么？", "上线前完成注册的账户，在下载开放后获得30天 Pro。无需银行卡，不会自动扣费。"],
      ["生成次数有限制吗？", "没有。Free 与 Pro 均不限 SciNest 生成次数，模型服务商按用户自己的 API 实际用量收费。"],
      ["30天结束后会怎样？", "账户自动回到 SciNest Free，是否升级由用户决定。"],
      ["SciNest 保证成绩、毕业或发表吗？", "不保证。用户仍需核查事实、引用、原创性，并遵守所在机构的 AI 使用规则。"],
    ],
    finalTitle: "现在注册，8月1日从 Free 开始。",
    finalBody: "上线前完成注册，免费解锁30天 Pro，无需银行卡，不会自动扣费。",
    finalCta: "领取早鸟 Pro",
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
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{c.eyebrow}</p><h1>{c.title}</h1><p className={styles.lead}>{c.intro}</p><div className={launchStyles.heroOffer}><h2>{c.offerTitle}</h2><p>{c.offerBody}</p><LaunchCountdown locale={locale} /></div><div className={styles.ctas}><a className={styles.primary} href={registerUrl}>{c.primary} ↗</a><a className={styles.secondary} href="#pricing">{c.secondary}</a></div><p className={styles.note}>✓ {c.note}</p></div>
        <div className={styles.heroVisual}><img src={image("hero")} alt={heroAlt} width="1280" height="800" /><span className={styles.floatTop}>01 · {c.flow[0][1]}</span><span className={styles.floatBottom}>05 · {c.flow[4][1]}</span></div>
      </section>
      <section className={styles.stats}>{c.stats.map(([v, l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</section>
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
      <section className={styles.section} id="pricing"><div className={styles.sectionHead}><p>{c.planKicker}</p><h2>{c.planTitle}</h2></div><div className={launchStyles.planGrid}><article className={launchStyles.planCard}><span className={launchStyles.planBadge}>FREE</span><h3>{c.freeName}</h3><p>{c.freeDesc}</p><ul>{c.freeFeatures.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article><article className={`${launchStyles.planCard} ${launchStyles.planCardPro}`}><span className={launchStyles.planBadge}>PRO</span><h3>{c.proName}</h3><p>{c.proDesc}</p><ul>{c.proFeatures.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article></div><p className={launchStyles.planNote}>{c.planNote}</p><div className={styles.ctas} style={{justifyContent:"center"}}><a className={styles.primary} href={registerUrl}>{c.primary} ↗</a></div></section>
      <section className={`${styles.section} ${styles.faqSection}`} id="faq"><div className={styles.sectionHead}><h2>{c.faqTitle}</h2></div><div className={styles.faq}>{c.faq.map(([q, a]) => <details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.final}><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><a className={styles.lightButton} href={registerUrl}>{c.finalCta} ↗</a></section>
    </main>
    <footer><div><strong>SciNest · {locale === "zh" ? "科研小棉袄" : "Academic work, finished"}</strong><span>{locale === "zh" ? "由 Jiaempower Pathways Limited 运营" : "Operated by Jiaempower Pathways Limited"}</span></div><nav><a href="/privacy">{locale === "zh" ? "隐私政策" : "Privacy"}</a><a href="/terms">{locale === "zh" ? "服务条款" : "Terms"}</a><a href="/refund-policy">{locale === "zh" ? "退款政策" : "Refund policy"}</a></nav><small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small></footer>
  </div>;
}

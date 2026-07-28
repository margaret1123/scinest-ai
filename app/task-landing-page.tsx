import styles from "./task-landing-page.module.css";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

type TaskLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryLabel: string;
  secondaryLabel: string;
  heroImage: string;
  heroAlt: string;
  facts: Array<[string, string]>;
  features: Feature[];
  workflowTitle: string;
  workflow: Array<[string, string]>;
  boundaryTitle: string;
  boundaries: string[];
  finalTitle: string;
  finalBody: string;
};

export function TaskLandingPage(props: TaskLandingPageProps) {
  const registerUrl = "/login?redirect=/dashboard&intent=early-bird";

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span>S</span><strong>SciNest<small>Academic work, finished</small></strong></a>
        <nav><a href="/">Home</a><a href="#workflow">How it works</a><a href="#examples">Product screens</a><a className={styles.headerCta} href={registerUrl}>Claim 30 days of Pro</a></nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{props.eyebrow}</p>
            <h1>{props.title}</h1>
            <p className={styles.lead}>{props.intro}</p>
            <div className={styles.actions}>
              <a className={styles.primary} href={registerUrl}>{props.primaryLabel} ↗</a>
              <a className={styles.secondary} href="#examples">{props.secondaryLabel}</a>
            </div>
            <p className={styles.note}>Windows desktop · Bring your own AI key · Project files stay local by default</p>
          </div>
          <figure className={styles.heroVisual}><img src={props.heroImage} alt={props.heroAlt} width="1280" height="800" /></figure>
        </section>

        <section className={styles.facts}>{props.facts.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</section>

        <section className={styles.features} id="examples">
          {props.features.map((feature, index) => (
            <article className={`${styles.feature} ${index % 2 ? styles.reverse : ""}`} key={feature.title}>
              <div><p className={styles.eyebrow}>{feature.eyebrow}</p><h2>{feature.title}</h2><p>{feature.body}</p></div>
              <figure><img src={feature.image} alt={feature.alt} width="1280" height="800" loading="lazy" /></figure>
            </article>
          ))}
        </section>

        <section className={styles.workflow} id="workflow">
          <div className={styles.sectionHead}><p className={styles.eyebrow}>A CONNECTED WORKFLOW</p><h2>{props.workflowTitle}</h2></div>
          <div className={styles.steps}>{props.workflow.map(([title, body], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className={styles.boundaries}>
          <div><p className={styles.eyebrow}>CLEAR PRODUCT BOUNDARIES</p><h2>{props.boundaryTitle}</h2></div>
          <ul>{props.boundaries.map(item => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className={styles.final}><h2>{props.finalTitle}</h2><p>{props.finalBody}</p><a className={styles.lightButton} href={registerUrl}>Claim 30 days of Pro ↗</a></section>
      </main>

      <footer><a href="/">SciNest</a><span>Operated by Jiaempower Pathways Limited</span><nav><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/refund-policy">Refund policy</a></nav></footer>
    </div>
  );
}

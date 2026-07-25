import styles from "./legal.module.css";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
  notice,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  notice: string;
}) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/">SciNest</a>
        <nav aria-label="Legal navigation">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/refund-policy">Refunds</a>
          <a href="/">Back to home</a>
        </nav>
      </header>
      <main className={styles.main}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{intro}</p>
        <p className={styles.updated}>Last updated: {updated}</p>
        {sections.map((section) => (
          <section className={styles.section} key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </section>
        ))}
        <div className={styles.notice}>{notice}</div>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Jiaempower Pathways Limited</span>
        <span>SciNest · Academic work, finished</span>
      </footer>
    </div>
  );
}

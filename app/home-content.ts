export type Locale = "zh" | "en";

export type HomeContent = {
  locale: Locale;
  lang: string;
  brandSecondary: string;
  nav: { workflow: string; outputs: string; proof: string; pricing: string; faq: string };
  login: string;
  trial: string;
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    body: string;
    primary: string;
    secondary: string;
    note: string;
  };
  proof: Array<{ value: string; label: string }>;
  friction: {
    kicker: string;
    title: string
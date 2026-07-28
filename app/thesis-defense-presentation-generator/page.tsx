import type { Metadata } from "next";
import { TaskLandingPage } from "../task-landing-page";

export const metadata: Metadata = {
  title: "Thesis Defense Presentation Generator",
  description: "Turn a thesis, paper and existing scientific figures into a structured defense presentation with editable PowerPoint export in SciNest Pro.",
  alternates: { canonical: "/thesis-defense-presentation-generator" },
};

export default function ThesisDefensePresentationGeneratorPage() {
  return <TaskLandingPage
    eyebrow="THESIS DEFENSE PRESENTATION GENERATOR"
    title="Turn the thesis into a defense narrative—not a copied table of contents."
    intro="Reuse the writing, evidence and scientific figures already inside the project. SciNest helps organise the presentation around contribution, audience, time limit and the questions a defense committee is likely to ask."
    primaryLabel="Register for early access"
    secondaryLabel="See the presentation workflow"
    heroImage="/scinest/ppt-ui-en.webp"
    heroAlt="SciNest thesis defense presentation generator"
    facts={[
      ["Built around the defense", "Structure the deck around the problem, contribution, evidence, limitations and conclusion rather than repeating every thesis chapter."],
      ["Reuse existing project work", "Bring forward writing and scientific figures already created or stored inside the same project."],
      ["Editable final delivery", "Free exports presentation PDF; Pro unlocks editable PowerPoint export for final review and delivery."],
    ]}
    features={[
      { eyebrow: "01 · PLAN THE STORY", title: "Match the deck to the audience, duration and research contribution", body: "Define the defense goal, page count and time limit first. The deck can then prioritise what the committee needs to understand instead of compressing the thesis mechanically.", image: "/scinest/hero-en.webp", alt: "SciNest connected thesis, figure and presentation workspace" },
      { eyebrow: "02 · KEEP IT EDITABLE", title: "Review the outline, slide content and final PowerPoint", body: "A defense deck normally changes after rehearsal. SciNest Pro is designed to export an editable PowerPoint so wording, layout and evidence can be adjusted before presentation day.", image: "/scinest/outputs-en.webp", alt: "SciNest editable presentation output examples" },
    ]}
    workflowTitle="From completed research to a defense-ready presentation"
    workflow={[
      ["Add the thesis and requirements", "Bring in the current thesis, supervisor guidance, presentation duration and any institutional requirements."],
      ["Define the defense goal", "State the audience, page range, contribution to emphasise and sections that require more explanation."],
      ["Build the deck structure", "Create a presentation narrative, reuse relevant figures and prepare slide-level content and notes."],
      ["Rehearse and edit", "Review timing, simplify crowded slides and export the final version in the format available to the selected plan."],
    ]}
    boundaryTitle="What still requires academic and presentation judgment"
    boundaries={[
      "SciNest does not decide whether the research is correct, sufficient or ready to defend.",
      "Users must check every claim, figure, citation, number and speaker note against the final thesis.",
      "Presentation quality still depends on rehearsal, timing and the user's ability to answer questions.",
    ]}
    finalTitle="Make the defense deck part of the same research project."
    finalBody="Register before launch to receive 30 days of SciNest Pro when Windows downloads open."
  />;
}

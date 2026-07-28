import type { Metadata } from "next";
import { TaskLandingPage } from "../task-landing-page";

export const metadata: Metadata = {
  title: "Scientific Figure Generator with Editable Layers",
  description: "Create scientific figures, mechanism diagrams, research roadmaps and graphical abstracts, then continue editing labels, layers and elements in SciNest.",
  alternates: { canonical: "/scientific-figure-generator" },
};

export default function ScientificFigureGeneratorPage() {
  return <TaskLandingPage
    eyebrow="SCIENTIFIC FIGURE GENERATOR"
    title="Create the research figure—then keep editing it."
    intro="Turn methods, mechanisms, stages and relationships into scientific visuals without ending with a locked image. SciNest keeps the figure connected to the same project materials used for writing and presentations."
    primaryLabel="Register for early access"
    secondaryLabel="See the figure workflow"
    heroImage="/scinest/figures-ui-en.webp"
    heroAlt="SciNest scientific figure generator and editor"
    facts={[
      ["More than a static image", "Pro supports continued work on figure layers, labels and elements instead of forcing every change through regeneration."],
      ["Built from project context", "Use the same papers, notes, methods and findings already stored in the SciNest project."],
      ["Reusable in the next deliverable", "Carry the figure into a report or defense presentation without rebuilding the research context."],
    ]}
    features={[
      { eyebrow: "01 · PLAN THE VISUAL", title: "Move from research content to a clear visual structure", body: "Describe the relationship that must be explained, select the relevant project sources and shape the figure around the actual research logic—not a generic decorative template.", image: "/scinest/real-ui-en.webp", alt: "SciNest connected research workspace for figure planning" },
      { eyebrow: "02 · EDIT THE OUTPUT", title: "Refine labels, layers and elements after generation", body: "Scientific figures often need small but important corrections. Pro editing is designed for changing wording, hierarchy and visual elements without restarting the entire task.", image: "/scinest/outputs-en.webp", alt: "SciNest editable scientific figure output examples" },
    ]}
    workflowTitle="From source material to a reusable scientific figure"
    workflow={[
      ["Bring in the evidence", "Add the papers, notes, draft text, data summaries or existing visuals that define the research context."],
      ["Choose the figure job", "Specify whether the result is a mechanism diagram, research roadmap, workflow, framework or graphical abstract."],
      ["Generate and inspect", "Check whether the structure, labels and relationships accurately reflect the research."],
      ["Edit and reuse", "Refine the figure and carry it into writing or a presentation in the same project."],
    ]}
    boundaryTitle="What SciNest does—and what remains your responsibility"
    boundaries={[
      "SciNest assists with visual explanation; it does not validate scientific claims or replace subject-matter review.",
      "Users must check labels, relationships, numerical information and citation requirements before submission.",
      "Project files stay local by default, while AI task content is sent to the model provider configured by the user.",
    ]}
    finalTitle="Build the figure without losing the project behind it."
    finalBody="Register before launch to receive 30 days of SciNest Pro when Windows downloads open."
  />;
}

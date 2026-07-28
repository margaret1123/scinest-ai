import type { Metadata } from "next";
import { TaskLandingPage } from "../task-landing-page";

export const metadata: Metadata = {
  title: "Thesis Revision Assistant for Supervisor Feedback",
  description: "Organise supervisor feedback, revise thesis chapters and keep sources, drafts and decisions connected in one SciNest project.",
  alternates: { canonical: "/thesis-revision-assistant" },
};

export default function ThesisRevisionAssistantPage() {
  return <TaskLandingPage
    eyebrow="THESIS REVISION ASSISTANT"
    title="Revise the thesis without losing the evidence behind the draft."
    intro="Keep the current draft, source papers, notes and supervisor feedback in one project. SciNest helps turn scattered comments into a structured revision workflow while keeping the writing editable for your review."
    primaryLabel="Register for early access"
    secondaryLabel="See the revision workflow"
    heroImage="/scinest/writing-ui-en.webp"
    heroAlt="SciNest thesis revision and academic writing workspace"
    facts={[
      ["Feedback stays attached to the work", "Keep supervisor comments, source materials and the current draft inside the same project instead of rebuilding context in each chat."],
      ["Revise by section and purpose", "Work on structure, argument, clarity, methods, discussion or citation gaps without replacing the whole thesis blindly."],
      ["Writing remains reviewable", "Generated and revised text stays editable so the user can compare, correct and approve changes before submission."],
    ]}
    features={[
      { eyebrow: "01 · ORGANISE THE REVISION", title: "Turn comments into a clear chapter-level plan", body: "Separate structural requests, evidence gaps, wording changes and questions that require academic judgment. This keeps the revision focused and makes it easier to confirm which feedback has been addressed.", image: "/scinest/real-ui-en.webp", alt: "SciNest connected source and writing workspace" },
      { eyebrow: "02 · CONTINUE THE WRITING", title: "Revise inside the same project context", body: "The writing workflow can reuse the papers, notes, prior decisions and figures already stored in the project, reducing repeated uploads and inconsistent explanations.", image: "/scinest/outputs-en.webp", alt: "SciNest academic writing and connected output examples" },
    ]}
    workflowTitle="From supervisor feedback to a reviewable revised draft"
    workflow={[
      ["Bring in the current material", "Add the latest draft, source papers, supervisor comments and submission requirements."],
      ["Classify the feedback", "Identify structural changes, missing evidence, unclear reasoning, local wording issues and unresolved questions."],
      ["Revise one target at a time", "Work section by section while preserving the original purpose, evidence and project terminology."],
      ["Review before accepting", "Compare the revised text with the source material and confirm that each supervisor request has actually been addressed."],
    ]}
    boundaryTitle="Revision support is not automatic academic approval"
    boundaries={[
      "SciNest does not guarantee that a supervisor, examiner or institution will accept a revision.",
      "Users remain responsible for factual accuracy, citations, originality and compliance with institutional AI-use rules.",
      "Methodological, ethical and disciplinary decisions must be reviewed by the user and appropriate academic advisers.",
    ]}
    finalTitle="Keep the feedback, evidence and revised writing together."
    finalBody="Register before launch to receive 30 days of SciNest Pro when Windows downloads open."
  />;
}

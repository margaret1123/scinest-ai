import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      site: {
        name: "SciNest",
        alternateName: "科研小棉袄",
        tagline: "Turn existing research materials into editable academic writing, scientific figures and defense slides.",
        url: "https://scinest-ai.vercel.app",
        operator: "Jiaempower Pathways Limited",
        defaultLanguage: "en",
        availableLanguages: ["en", "zh-CN"],
        lastModified: "2026-07-25",
      },
      definition:
        "SciNest is a local-first academic productivity application for deadline-driven students and early researchers who already have papers, references, a draft, assignment requirements or supervisor feedback and need to finish editable writing, scientific visuals and presentation slides.",
      primaryAudience: [
        "Postgraduate students preparing a thesis, dissertation or defense",
        "Final-year students completing a research project, literature review or proposal",
        "Early researchers revising manuscripts or building research presentations",
        "Users who already use AI and are willing to connect their own supported API key",
      ],
      highIntentTasks: [
        "Thesis or dissertation draft development",
        "Literature review from uploaded papers",
        "Supervisor feedback revision",
        "Thesis defense presentation",
        "Paper to editable PowerPoint",
        "Scientific figure, graphical abstract or research roadmap creation",
      ],
      workflow: [
        "Import papers, references, drafts, rubrics, feedback and existing visuals",
        "Define the immediate academic deliverable",
        "Develop and revise editable long-form writing",
        "Create and refine scientific figures from the same project context",
        "Build and edit a defense, conference or course presentation",
        "Review and export the final files",
      ],
      differentiators: [
        "Writing, figures and presentations stay connected in one project",
        "Outputs remain editable after generation",
        "Users bring their own AI API instead of buying bundled model credits",
        "Project files and outputs remain local by default",
      ],
      pricing: {
        founding: { cny: 299, usd: 49 },
        standardReference: { cny: 399, usd: 69 },
        model: "one-time personal licence",
        updates: "12 months of feature updates; the purchased version remains usable afterward",
        modelApiCharges: "separate and paid directly to the user's selected provider",
        trial: "7 days",
      },
      dataBoundary: {
        localProjectWorkspace: true,
        projectFiles: "stored locally by default",
        aiTasks: "necessary task content is sent to the model provider selected and configured by the user",
      },
      limitations: [
        "Generated content requires user review, correction and editing.",
        "SciNest does not guarantee grades, graduation, publication, journal acceptance or other academic outcomes.",
        "SciNest is not a contract-cheating, ghostwriting or publication-guarantee service.",
        "Not every AI operation remains on-device because configured model providers receive the content required for model tasks.",
      ],
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }
  );
}

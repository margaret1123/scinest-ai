import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      site: {
        name: "SciNest",
        alternateName: "科研小棉袄",
        tagline: "Academic work, finished",
        url: "https://scinest.app",
        operator: "Margaret (New Zealand sole trader)",
        platform: "Windows desktop",
        languages: ["en", "zh-CN"],
        lastModified: "2026-07-25",
      },
      definition:
        "SciNest is a Windows desktop research productivity application for students and early researchers. It helps turn existing papers, references, drafts, data, supervisor feedback and project materials into editable academic writing, scientific figures and thesis defense presentations.",
      primaryAudience: [
        "Postgraduate students approaching thesis submission or defense",
        "Final-year students completing research projects, capstones and presentations",
        "Early researchers revising manuscripts, figures and academic presentations",
        "Users who already have research materials and want to complete the remaining deliverables themselves",
      ],
      primaryJobs: [
        "Thesis and dissertation revision",
        "Supervisor feedback revision planning",
        "Literature review and research proposal development",
        "Scientific figure and research roadmap creation",
        "Paper-to-PowerPoint conversion",
        "Thesis defense presentation preparation",
      ],
      workflow: [
        "Import existing research materials",
        "Describe the unfinished academic task",
        "Develop and revise editable writing",
        "Create and refine scientific figures",
        "Build an editable presentation from the same project",
        "Review and export the chosen version",
      ],
      differentiation:
        "General AI chat tools usually handle one conversation or output at a time. SciNest keeps materials, writing, figures and presentation work connected inside one project, reducing repeated uploads, explanations, copy-paste and reformatting.",
      pricing: {
        pro: { monthly: { cny: 29, usd: 9 }, yearly: { cny: 299, usd: 49 } },
        model: "subscription",
        cancellation: "Cancel anytime via the customer portal",
        modelApiCharges: "separate and charged by the user's selected provider",
        trial: "7 days on signup",
      },
      dataBoundary: {
        localProjectWorkspace: true,
        projectFiles: "stored locally by default",
        aiTasks: "content required for an AI task is sent to the model provider selected and configured by the user",
      },
      limitations: [
        "Users must review facts, citations and final submissions.",
        "SciNest does not guarantee grades, graduation, thesis approval, publication, journal acceptance or research outcomes.",
        "SciNest is not marketed as an AI-detection bypass or academic misconduct service.",
        "AI-powered tasks require a supported provider and API key.",
      ],
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } },
  );
}

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      service: {
        name: "SciNest",
        alternateName: "科研小棉袄",
        type: "SoftwareApplication",
        category: "ResearchProductivityApplication",
        url: "https://scinest-ai.vercel.app",
        operator: "Jiaempower Pathways Limited",
        platform: "Windows desktop",
        primaryAudience: "Postgraduate students, final-year students and early researchers with existing materials and unfinished academic deliverables",
        pricing: {
          model: "one-time licence",
          founding: { cny: 299, usd: 49 },
          standardReference: { cny: 399, usd: 69 },
          includedUpdates: "12 months",
          continuedUse: "The purchased version remains usable after the update period.",
          modelApiCharges: "Separate and charged by the user's selected provider.",
        },
      },
      capabilities: [
        { id: "thesis-revision", name: "Thesis and Dissertation Revision", description: "Uses existing drafts, papers and supervisor feedback to support structured, editable revision work." },
        { id: "literature-review", name: "Literature Review and Proposal Workflows", description: "Organises uploaded sources and supports section-based development of literature reviews, research proposals and academic reports." },
        { id: "scientific-figures", name: "Scientific Figures and Research Roadmaps", description: "Turns methods, mechanisms, stages and research relationships into visuals intended for continued refinement and reuse." },
        { id: "defense-presentations", name: "Thesis Defense and Academic Presentations", description: "Reuses project writing and figures to build editable presentation structure, slide content and speaker notes." },
        { id: "connected-project", name: "Connected Project Workflow", description: "Keeps source materials, writing, figures and presentation work connected inside one project to reduce repeated reconstruction." },
      ],
      boundaries: {
        responsibility: "Users must review facts, citations and final submissions and follow institutional AI-use policies.",
        guarantees: "No guarantee of grades, graduation, thesis approval, publication, journal acceptance or research outcomes.",
        misconduct: "SciNest is not marketed as an AI-detection bypass, contract cheating or academic misconduct service.",
        projectFiles: "Stored locally by default.",
        aiModelTasks: "Content required for an AI task is sent to the model provider selected and configured by the user.",
        modelAccess: "AI-powered tasks require a supported provider and API key.",
      },
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } },
  );
}

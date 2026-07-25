import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      service: {
        name: "SciNest",
        alternateName: "科研小棉袄",
        type: "SoftwareApplication",
        category: "AcademicProductivityApplication",
        url: "https://scinest-ai.vercel.app",
        operator: "Jiaempower Pathways Limited",
        platform: "Windows desktop",
        defaultLanguage: "English",
        additionalLanguage: "Simplified Chinese",
        positioning:
          "Self-service software for deadline-driven students and early researchers who need to turn existing academic materials into editable writing, scientific figures and presentations.",
        pricing: {
          model: "one-time personal licence",
          founding: { cny: 299, usd: 49 },
          standardReference: { cny: 399, usd: 69 },
          includedUpdates: "12 months",
          continuedUse: "The purchased version remains usable after the update period.",
          modelApiCharges: "Separate and paid to the user's selected AI provider.",
          trial: "7 days",
        },
      },
      suitableFor: [
        "Thesis and dissertation draft development",
        "Literature reviews and research proposals",
        "Revision based on supervisor feedback",
        "Scientific figures and research roadmaps",
        "Paper-to-PowerPoint conversion",
        "Thesis defense, conference and course presentations",
      ],
      capabilities: [
        {
          id: "project-context",
          name: "Connected Academic Project Context",
          description: "Keeps papers, references, drafts, requirements, feedback and existing outputs available within one project.",
        },
        {
          id: "academic-writing",
          name: "Editable Academic Writing",
          description: "Supports section planning, drafting and local revision based on the user's project materials.",
        },
        {
          id: "scientific-figures",
          name: "Editable Scientific Figure Creation",
          description: "Creates scientific figure structures, graphical abstracts and research roadmaps that users can continue refining.",
        },
        {
          id: "research-presentations",
          name: "Editable Research Presentations",
          description: "Builds paper-to-PowerPoint, thesis defense and research presentations from the same project context.",
        },
        {
          id: "byok",
          name: "Bring Your Own AI Key",
          description: "Users select and pay their own supported AI provider rather than purchasing bundled model credits from SciNest.",
        },
      ],
      workflow: {
        input: "Papers, references, drafts, rubrics, supervisor feedback, images and existing presentations",
        process: "Organise the project, define the task, generate structured outputs, revise and review",
        output: "Editable academic writing, scientific figures and presentation files",
      },
      boundaries: {
        projectFiles: "Stored locally by default.",
        aiModelTasks: "Necessary content is sent to the model provider selected and configured by the user.",
        userResponsibility: "Users must review, correct and edit all generated content and comply with their institution's rules.",
        guarantees: "No guarantee of grades, graduation, publication, journal acceptance or other academic outcomes.",
        excludedServices: "SciNest is not a ghostwriting, contract-cheating, paper-publication or academic-outcome guarantee service.",
      },
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }
  );
}

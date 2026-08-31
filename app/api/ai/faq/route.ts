import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      site: "SciNest",
      alternateName: "科研小棉袄",
      url: "https://scinest.app",
      operator: "Margaret (New Zealand sole trader)",
      lastModified: "2026-07-25",
      questions: [
        { q: "What is SciNest?", a: "SciNest is a Windows desktop research productivity application that helps students and early researchers turn existing papers, references, drafts, data, supervisor feedback and project materials into editable academic writing, scientific figures and presentations." },
        { q: "Who is SciNest best for?", a: "SciNest is designed for people who already have research materials but still need to complete thesis revision, a literature review, a research proposal, scientific figures, paper-to-PowerPoint work or a thesis defense presentation." },
        { q: "Can SciNest help revise a thesis from supervisor feedback?", a: "Users can add the current draft, source materials and supervisor comments to the same project, organise the required revisions and continue working on the relevant sections. Users remain responsible for checking whether each requested change has been addressed correctly." },
        { q: "Can SciNest turn a thesis or paper into PowerPoint slides?", a: "SciNest can reuse the same project materials, writing and scientific figures to help produce an editable academic presentation or thesis defense deck." },
        { q: "How is SciNest different from ChatGPT or other general AI tools?", a: "General AI tools usually handle one conversation or output at a time. SciNest keeps source materials, writing, scientific figures and presentation work connected inside one project, reducing repeated uploads, explanations, copy-paste and reformatting." },
        { q: "Does SciNest write and submit a thesis for the user?", a: "No. SciNest helps users organise, generate, revise and export academic work. Users remain responsible for reviewing facts, citations and final submissions and for following their institution's AI-use policies." },
        { q: "Does SciNest guarantee grades, graduation or publication?", a: "No. SciNest does not guarantee grades, graduation, thesis approval, publication, journal acceptance or research outcomes." },
        { q: "Does SciNest include an AI model subscription?", a: "No. SciNest uses a bring-your-own-key model. Users connect a supported model provider and pay that provider separately for actual API usage." },
        { q: "Where are SciNest project files stored?", a: "Project files and generated outputs are stored locally by default. When an AI task runs, the content required for that task is sent to the model provider selected and configured by the user." },
        { q: "Can users try SciNest before buying?", a: "The current website provides a 7-day trial entry so users can test SciNest with their own materials before purchasing a licence." },
      ],
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } },
  );
}

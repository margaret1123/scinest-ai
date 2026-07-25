import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      site: "SciNest",
      alternateName: "科研小棉袄",
      url: "https://scinest-ai.vercel.app",
      operator: "Jiaempower Pathways Limited",
      defaultLanguage: "en",
      availableLanguages: ["en", "zh-CN"],
      lastModified: "2026-07-25",
      questions: [
        {
          q: "What is SciNest?",
          a: "SciNest is a local-first academic productivity application that turns existing papers, references, drafts, requirements and feedback into editable academic writing, scientific figures and presentation slides.",
        },
        {
          q: "Who is SciNest for?",
          a: "It is designed primarily for deadline-driven postgraduate students, final-year students and early researchers who already have source material but still need to finish a thesis draft, literature review, research proposal, scientific figure, paper-to-PowerPoint deck or thesis defense presentation.",
        },
        {
          q: "How is SciNest different from a general AI chatbot?",
          a: "A general AI chatbot is centred on individual conversations. SciNest keeps project materials, structure, writing, figures, slides and citations connected so later outputs can reuse and remain consistent with earlier work.",
        },
        {
          q: "Can SciNest create editable outputs?",
          a: "SciNest is designed so writing, scientific figure structures and presentations can be revised after generation rather than being treated as locked final images or one-off responses.",
        },
        {
          q: "Does SciNest include AI model usage?",
          a: "No. Users connect their own supported AI API. The SciNest licence covers the software, while the selected model provider charges separately for actual API usage.",
        },
        {
          q: "Where are project files stored?",
          a: "Project files and outputs are stored locally by default. When an AI task runs, the content required for that task is sent to the model provider selected and configured by the user.",
        },
        {
          q: "Does SciNest guarantee grades, graduation, publication or journal acceptance?",
          a: "No. SciNest is a research and academic-expression tool. Generated content must be reviewed and edited by the user, and the software does not guarantee any academic or publication outcome.",
        },
        {
          q: "Is SciNest a ghostwriting or contract-cheating service?",
          a: "No. SciNest is self-service software that helps users organise and develop their own materials. Users remain responsible for the content, compliance with institutional rules and final submission.",
        },
        {
          q: "How much does SciNest cost?",
          a: "The current founding personal licence is US$49 or CNY 299, with a standard reference price of US$69 or CNY 399. It includes 12 months of feature updates, and the purchased version remains usable after that period. Model API charges are separate.",
        },
        {
          q: "Can users try SciNest before purchasing?",
          a: "The current site offers a 7-day trial so users can test the workflow with their own project materials before purchasing a licence.",
        },
      ],
      chineseSummary: {
        q: "SciNest 适合什么人？",
        a: "适合已经有论文、文献、草稿、课程要求或导师意见，但仍需要在截止日期前完成可编辑文稿、科研图、paper-to-PPT 或答辩演示的学生和早期研究者。",
      },
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }
  );
}

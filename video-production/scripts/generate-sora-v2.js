/**
 * SciNest Promo v2 — Sora 2 Generation Script
 *
 * Strategy:
 *   - Pain montage (0-5s): pure text-to-video, abstract chaos
 *   - Feature scenes (5-28s): image-to-video with screenshots as first-frame anchor
 *   - Closing (28-30s): logo + tagline
 *
 * All scene prompts use camera techniques to DILUTE specific content:
 *   shallow DOF, focus on UI chrome not content, motion blur, tight framing
 */

const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const OUTPUT_DIR = path.join(__dirname, '..', 'sora-output-v2');
const SCREENSHOTS = path.join(__dirname, '..', 'screenshots-1080p');
const JOBS_FILE = path.join(OUTPUT_DIR, 'sora-jobs-v2.json');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ═══════════════════════════════════════════════════════════════════
// SCENES
// ═══════════════════════════════════════════════════════════════════

const SCENES = [
  // ─── PAIN: 散 (0-5s) ──────────────────────────────────────────
  {
    id: '01-pain-chaos',
    type: 'text-to-video',
    label: 'Pain montage: fragmented workflow across platforms',
    seconds: '8',
    prompt: [
      'SCENE: A computer screen recording montage showing digital workspace chaos.',
      'ACTION SEQUENCE — rapid cuts between:',
      '1. Desktop folder overflowing with scattered PDF icons, research papers with cryptic filenames',
      '2. A browser tab with a notes app, fragmented bullet points, half-finished',
      '3. A messaging app notification popping up with voice message from advisor',
      '4. Another AI chat window where user is retyping research context from scratch',
      '5. An empty presentation slide with nothing on it',
      'CAMERA: Screen recording perspective, static frame, rapid jump cuts accelerating in pace',
      'MOOD: Overwhelming, fragmented, stressful — the tools are fighting you',
      'LIGHTING: Flat screen light, slightly desaturated, clinical',
      'STYLE: Photorealistic screen recording, shallow depth of field on content areas so specific text is unreadable, focus on UI chrome and window management chaos',
      'EXCLUSIONS: No people, no faces, no visible readable text, no logos, no brand names',
    ].join('\n'),
  },

  // ─── Scene 2: Chat Q&A (5-10s) ─────────────────────────────────
  {
    id: '02-chat-qa',
    type: 'image-to-video',
    label: 'Chat Q&A with source citations',
    referenceImage: path.join(SCREENSHOTS, 'chat完全根据上传资料回答2026-07-28T17_12_10.jpg'),
    seconds: '4',
    prompt: [
      'SCENE: A screen recording of a research AI chat interface, clean minimal design with teal accents on white.',
      'ACTION: Cursor moves to the chat input box at the bottom, types a research question. The input text appears character by character. Presses enter. AI response streams in line by line above, with small numbered citation badges [1] [2] [3] appearing inline. One citation badge glows briefly with an orange pulse highlight.',
      'CAMERA: Static screen recording, locked tripod. Tight framing on the chat panel — the question and answer area fills the frame. Source panel on the left is partially visible but soft-focused, suggesting materials are loaded but content is unreadable.',
      'LIGHTING: Clean screen illumination, soft even light, no glare',
      'STYLE: Photorealistic UI screen capture. Shallow depth of field — the chat text area is the focal plane, everything else (source panel, sidebar) falls into soft blur. The text in the AI response is deliberately at an angle where individual words blur into lines — the viewer sees "structured answer with citations" not specific medical terms.',
      'EXCLUSIONS: No people, no faces, no legible medical terminology, no Fascioliasis visible, no camera shake',
      'MICRO-BEATS: type question 00:00-00:02 → AI responds 00:02-00:03.5 → citation glow 00:03.5-00:04',
    ].join('\n'),
  },

  // ─── Scene 3: Long-form Writing (10-14s) ────────────────────────
  {
    id: '03-longform-writing',
    type: 'image-to-video',
    label: 'Smart Outline + inline AI edit',
    referenceImage: path.join(SCREENSHOTS, '万字长文可编辑2026-07-28T18_45_54.jpg'),
    seconds: '4',
    prompt: [
      'SCENE: Screen recording of a long-form document editor with a Smart Outline panel on the left.',
      'ACTION: The Smart Outline panel shows a structured document outline. Cursor hovers over the third outline item, clicks — the corresponding text section on the right side highlights softly. A small floating inline AI edit panel appears next to the highlighted section. Cursor moves into the edit panel. Other paragraphs remain motionless.',
      'CAMERA: Static screen recording. Mid shot — both outline and editor visible. As the cursor interacts, the camera stays locked but the focal plane shifts slightly toward the highlighted section, leaving surrounding areas softly blurred.',
      'LIGHTING: Clean white document background, soft ambient screen light',
      'STYLE: Photorealistic screen capture. The document text is deliberately blurred/small enough that individual words are illegible — the viewer sees "structured document with sections" not specific content. Focus is on the interaction pattern: click outline → section highlights → edit panel appears.',
      'EXCLUSIONS: No readable text, no medical content visible, no people, no camera movement',
      'MICRO-BEATS: hover outline 00:00-00:01 → click highlight 00:01-00:02 → edit panel appears 00:02-00:02.5 → cursor enters edit 00:02.5-00:04',
    ].join('\n'),
  },

  // ─── Scene 4: Scientific Figures (14-18s) ────────────────────────
  {
    id: '04-figure-editing',
    type: 'image-to-video',
    label: 'Figure region edit + layer panel',
    referenceImage: path.join(SCREENSHOTS, '图片可分图层编辑2026-07-28T23_45_31.jpg'),
    seconds: '4',
    prompt: [
      'SCENE: Screen recording of a scientific figure editor showing a clean diagram on a white canvas.',
      'ACTION: A dashed selection rectangle appears on a region of the diagram — drag to select a specific area. The selected region shows a subtle glow outline. The layers panel on the right slides open, revealing individual editable layers (background, labels, arrows, data). Cursor clicks on one layer name — it highlights. Right-clicks — a small context menu appears with "Edit" option.',
      'CAMERA: Static screen recording. Tight shot on the diagram canvas — the figure fills most of the frame. Layers panel slides into view from the right edge. Shallow focus on the selection rectangle interaction.',
      'LIGHTING: Clean white canvas, soft screen backlight, teal accent UI elements visible',
      'STYLE: Photorealistic screen capture. The diagram content is deliberately at a scale where fine details blur — the viewer sees "a structured diagram with labeled regions and editable layers" not a specific scientific pathway. Focus on the interaction: select → layers appear → click layer → edit.',
      'EXCLUSIONS: No readable labels, no recognizable medical diagram type, no people, no camera shake',
      'MICRO-BEATS: draw selection 00:00-00:01.5 → layers panel open 00:01.5-00:02.5 → layer click 00:02.5-00:03.5 → context menu 00:03.5-00:04',
    ].join('\n'),
  },

  // ─── Scene 5: PPT Outline (18-22s) ──────────────────────────────
  {
    id: '05-ppt-outline',
    type: 'image-to-video',
    label: 'PPT task: outline generation from same sources',
    referenceImage: path.join(SCREENSHOTS, 'PPT大纲可编辑 2026-07-28T18_58_05.jpg'),
    seconds: '4',
    prompt: [
      'SCENE: Screen recording of a presentation builder interface. A badge at the top shows "Shared project sources: 12" prominently.',
      'ACTION: The task description and goal fields are already filled. Cursor moves to the "Generate Outline" button and clicks. The outline panel populates — item by item, each outline entry fades in with a subtle slide animation. Cursor scrolls down slightly. Clicks on the second outline item to expand it — sub-items reveal beneath it.',
      'CAMERA: Static screen recording. Medium shot showing the task panel and outline area. The "Shared project sources" badge is clearly visible and in focus — this is the key visual anchor. Content text in the outline is at reading distance but deliberately slightly soft/blurred — the viewer sees "structured outline with hierarchical items" not specific slide titles.',
      'LIGHTING: Clean white interface, teal accent color on buttons and highlights',
      'STYLE: Photorealistic screen capture. Focus on the UI pattern: same sources → generate outline → expand to edit. The visual hook is the "shared sources" badge connecting this to previous scenes.',
      'EXCLUSIONS: No readable outline text, no specific research topic visible, no people, no camera movement',
      'MICRO-BEATS: cursor to generate button 00:00-00:01 → click + outline populates 00:01-00:02.5 → expand item 2 00:02.5-00:04',
    ].join('\n'),
  },

  // ─── Scene 6: PPT Editor (22-26s) ───────────────────────────────
  {
    id: '06-ppt-editor',
    type: 'image-to-video',
    label: 'PPT editor: drag, resize, real editable PPTX',
    referenceImage: path.join(SCREENSHOTS, 'PPT所有元素皆可拖拽编辑放大缩小2026-07-28T19_33_15.jpg'),
    seconds: '4',
    prompt: [
      'SCENE: Screen recording of a slide editor with thumbnail strip on the left and main canvas.',
      'ACTION: The slide thumbnail strip scrolls smoothly. One thumbnail is selected with a teal border. On the main canvas, cursor grabs a chart element and drags it to the right. Then cursor moves to the corner of the element where resize handles appear. The element is dragged to enlarge. The background of the canvas stays stable. A small tooltip appears near the cursor reading "Real editable PPTX".',
      'CAMERA: Static screen recording. Wide shot of the full editor layout. As the cursor interacts with the slide element, the focus pulls slightly toward the canvas area. The thumbnail strip remains visible on the left, showing this is slide 3 of several.',
      'LIGHTING: Clean slide canvas, professional presentation lighting, teal UI accents',
      'STYLE: Photorealistic screen capture. The slide content is deliberately soft — the viewer sees "a slide with visual elements being moved and resized" not specific chart data or text. Focus on the interaction: grab → drag → resize → real editable format.',
      'EXCLUSIONS: No readable slide content, no specific data visible, no people, no camera movement',
      'MICRO-BEATS: scroll thumbnails 00:00-00:01 → grab element 00:01-00:02 → drag right 00:02-00:02.5 → resize handles appear 00:02.5-00:03 → enlarge 00:03-00:04',
    ].join('\n'),
  },

  // ─── Scene 7: Closing (26-30s) ──────────────────────────────────
  {
    id: '07-closing',
    type: 'image-to-video',
    label: 'Three interfaces converge + Logo',
    referenceImage: path.join(SCREENSHOTS, 'logo.jpg'),
    seconds: '4',
    prompt: [
      'SCENE: A clean white background. Three application windows — a writing editor, a figure canvas, and a slide editor — float and smoothly shrink toward the center.',
      'ACTION: The three windows gently animate, scaling down and converging into a single unified workspace view centered on screen. As they merge, the SciNest logo fades in at the center with subtle motion. The tagline "From sources to submission." appears below the logo in clean teal text.',
      'CAMERA: Gentle slow pull-back, starting from mid-distance and easing out to a wide establishing shot. Smooth deceleration.',
      'LIGHTING: Clean white gradient background, soft illumination from behind, teal accent glow',
      'MOOD: Satisfying resolution — everything comes together, calm, professional, trustworthy',
      'STYLE: Polished product commercial end card. The three windows are recognizable as the interfaces from previous scenes but shown as soft-edged thumbnails. Logo is crisp and in focus.',
      'EXCLUSIONS: No readable text in the window thumbnails, no people, no complex background',
      'MICRO-BEATS: windows appear 00:00 → converge 00:00-00:02.5 → logo fades in 00:02.5-00:03.5 → hold 00:03.5-00:04',
    ].join('\n'),
  },
];

// ═══════════════════════════════════════════════════════════════════
// GENERATION FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function submitTextToVideo(scene) {
  console.log(`\n[${scene.id}] TEXT-TO-VIDEO: ${scene.label}`);
  const video = await openai.videos.create({
    model: 'sora-2-pro',
    prompt: scene.prompt,
    size: '1920x1080',
    seconds: scene.seconds,
  });
  console.log(`  Job: ${video.id} | Status: ${video.status}`);
  return video;
}

async function submitImageToVideo(scene) {
  console.log(`\n[${scene.id}] IMAGE-TO-VIDEO: ${scene.label}`);
  console.log(`  Reference: ${path.basename(scene.referenceImage)}`);

  // Read image as base64 (compressed JPEGs, ~50-460KB → safe for data URL)
  const imageBuffer = fs.readFileSync(scene.referenceImage);
  const base64Image = imageBuffer.toString('base64');
  const dataUrl = `data:image/jpeg;base64,${base64Image}`;
  console.log(`  Image size: ${(imageBuffer.length / 1024).toFixed(0)} KB`);

  const video = await openai.videos.create({
    model: 'sora-2-pro',
    prompt: scene.prompt,
    size: '1920x1080',
    seconds: scene.seconds,
    input_reference: {
      image_url: dataUrl,
    },
  });

  console.log(`  Job: ${video.id} | Status: ${video.status}`);
  return video;
}

async function pollAll(jobs) {
  const results = [];
  for (const job of jobs) {
    console.log(`\n  Polling [${job.id}]...`);
    for (let i = 1; i <= 60; i++) {
      await sleep(5000);
      const video = await openai.videos.retrieve(job.jobId);
      process.stdout.write(`\r  [${job.id}] Poll #${i}: ${video.status}`);
      if (video.status === 'completed') {
        console.log(' ✅');
        results.push({ ...job, completed: true, video });
        break;
      }
      if (video.status === 'failed') {
        console.log(' ❌');
        results.push({ ...job, completed: false });
        break;
      }
    }
  }
  return results;
}

async function downloadVideo(videoId, filename) {
  const outPath = path.join(OUTPUT_DIR, filename);
  const response = await openai.videos.downloadContent(videoId);
  let buffer;
  if (Buffer.isBuffer(response)) {
    buffer = response;
  } else if (response.body && typeof response.body.arrayBuffer === 'function') {
    buffer = Buffer.from(await response.body.arrayBuffer());
  } else if (response.arrayBuffer && typeof response.arrayBuffer === 'function') {
    buffer = Buffer.from(await response.arrayBuffer());
  } else {
    const chunks = [];
    for await (const chunk of response.body) chunks.push(chunk);
    buffer = Buffer.concat(chunks);
  }
  fs.writeFileSync(outPath, buffer);
  const mb = (fs.statSync(outPath).size / 1048576).toFixed(2);
  console.log(`  ✅ ${filename} (${mb} MB)`);
  return outPath;
}

// ═══════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════

async function main() {
  console.log('🎬 SciNest Promo v2 — Sora Generation');
  console.log('═'.repeat(60));
  console.log(`   ${SCENES.length} scenes | sora-2-pro | 1920×1080`);
  console.log(`   Strategy: shallow DOF + tight framing → dilute content`);
  console.log(`   Output: ${OUTPUT_DIR}\n`);

  // Step 1: Submit all
  console.log('STEP 1: Submitting...\n');
  const submissions = [];
  for (const scene of SCENES) {
    const video = scene.type === 'text-to-video'
      ? await submitTextToVideo(scene)
      : await submitImageToVideo(scene);
    submissions.push({
      ...scene,
      jobId: video.id,
      status: video.status,
      submittedAt: new Date().toISOString(),
    });
  }

  fs.writeFileSync(JOBS_FILE, JSON.stringify(submissions, null, 2));
  console.log(`\n  Jobs saved to ${JOBS_FILE}`);

  // Step 2: Poll
  console.log('\nSTEP 2: Polling until completion...');
  const completed = await pollAll(submissions);

  // Step 3: Download
  console.log('\n\nSTEP 3: Downloading...\n');
  for (const result of completed) {
    if (result.completed) {
      await downloadVideo(result.jobId, `${result.id}.mp4`);
    }
  }

  const successCount = completed.filter(r => r.completed).length;
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`✅ ${successCount}/${SCENES.length} scenes generated`);
  console.log(`   Output: ${OUTPUT_DIR}`);
}

main().catch(err => {
  console.error('\n❌', err.message);
  process.exit(1);
});

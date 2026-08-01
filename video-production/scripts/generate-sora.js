/**
 * Generate 3 Sora 2 transition videos for SciNest promo.
 *
 * Usage: node scripts/generate-sora.js
 *
 * Sora API is async: submit → poll → download.
 * Videos expire after ~1 hour on OpenAI servers, so we download immediately.
 */

const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const OUTPUT_DIR = path.join(__dirname, '..', 'sora-output');
const JOBS_FILE = path.join(OUTPUT_DIR, 'sora-jobs.json');

// Ensure output directory exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ─── Sora Prompts from production brief ───────────────────────────
const TRANSITIONS = [
  {
    id: '01-sources-gathering',
    label: 'Opening: Sources gathering into project',
    prompt: 'Premium academic SaaS motion graphic on a clean white background. Research papers, PDF documents, notes, data tables, and supervisor feedback cards move smoothly from different directions into one unified project workspace. Mint teal accent color, minimal and precise, elegant product-commercial animation, no visible words, no logos, no people, 16:9.',
    seconds: '4',
  },
  {
    id: '02-text-to-figure',
    label: 'Text transforming into scientific diagram',
    prompt: 'Academic paragraphs and structured research notes transform into clean scientific diagram components, including arrows, nodes, pathways, laboratory symbols, and data blocks. White background, mint teal and subtle purple accents, precise scientific motion design, premium SaaS transition, no readable text, 16:9.',
    seconds: '4',
  },
  {
    id: '03-figure-to-slides',
    label: 'Diagram reorganizing into presentation slides',
    prompt: 'A polished scientific diagram smoothly reorganizes into a sequence of professional presentation slide cards. The cards align into a clean slide deck with subtle depth and controlled motion. White background, teal academic technology aesthetic, no readable text, no invented user interface, 16:9.',
    seconds: '4',
  },
];

// ─── Helpers ──────────────────────────────────────────────────────

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function submitJob(transition) {
  console.log(`\n[${transition.id}] Submitting: ${transition.label}`);
  console.log(`  Prompt length: ${transition.prompt.length} chars`);

  const video = await openai.videos.create({
    model: 'sora-2-pro',
    prompt: transition.prompt,
    size: '1920x1080',
    seconds: transition.seconds,
  });

  console.log(`  Job ID: ${video.id}`);
  console.log(`  Status: ${video.status}`);
  return video;
}

async function pollUntilComplete(videoId, label) {
  let attempts = 0;
  const maxAttempts = 60; // 5 minutes max (polling every 5s)

  while (attempts < maxAttempts) {
    await sleep(5000);
    attempts++;

    const video = await openai.videos.retrieve(videoId);
    console.log(`  [${label}] Poll #${attempts}: status=${video.status}`);

    if (video.status === 'completed') {
      console.log(`  ✅ Completed!`);
      return video;
    }
    if (video.status === 'failed') {
      console.log(`  ❌ Failed: ${JSON.stringify(video)}`);
      return null;
    }
  }
  console.log(`  ⏰ Timeout after ${maxAttempts} polls`);
  return null;
}

async function downloadVideo(videoId, filename) {
  const outPath = path.join(OUTPUT_DIR, filename);
  console.log(`  Downloading to ${outPath}...`);

  const response = await openai.videos.downloadContent(videoId);

  // The SDK may return different formats; handle both
  if (response && response.body) {
    const buffer = Buffer.from(await response.body.arrayBuffer());
    fs.writeFileSync(outPath, buffer);
  } else if (Buffer.isBuffer(response)) {
    fs.writeFileSync(outPath, response);
  } else if (response instanceof ReadableStream || response.arrayBuffer) {
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(outPath, buffer);
  } else {
    // Fallback: try writing response directly
    console.log(`  ⚠️ Unexpected response type: ${typeof response}, trying direct write...`);
    fs.writeFileSync(outPath, Buffer.from(JSON.stringify(response)));
  }

  const sizeMB = (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2);
  console.log(`  ✅ Downloaded: ${sizeMB} MB`);
  return outPath;
}

// ─── Main ─────────────────────────────────────────────────────────

async function main() {
  console.log('🎬 SciNest Sora 2 Transition Generator');
  console.log(`   Model: sora-2-pro | Size: 1920x1080 | Output: ${OUTPUT_DIR}\n`);

  // Step 1: Submit all 3 jobs in parallel
  console.log('─'.repeat(60));
  console.log('STEP 1: Submitting jobs...\n');

  const submissions = await Promise.all(
    TRANSITIONS.map(t => submitJob(t))
  );

  // Save job IDs for recovery
  const jobs = submissions.map((s, i) => ({
    ...TRANSITIONS[i],
    jobId: s.id,
    status: s.status,
    submittedAt: new Date().toISOString(),
  }));
  fs.writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2));
  console.log(`\n  Jobs saved to ${JOBS_FILE}`);

  // Step 2: Poll each until complete
  console.log('\n' + '─'.repeat(60));
  console.log('STEP 2: Polling until completion...\n');

  const results = [];
  for (const job of jobs) {
    console.log(`\n  Waiting for [${job.id}]...`);
    const completed = await pollUntilComplete(job.jobId, job.id);
    if (completed) {
      results.push({ ...job, completed });
    }
  }

  // Step 3: Download all
  console.log('\n' + '─'.repeat(60));
  console.log('STEP 3: Downloading videos...\n');

  for (const result of results) {
    const filename = `${result.id}.mp4`;
    await downloadVideo(result.jobId, filename);
  }

  console.log('\n' + '─'.repeat(60));
  console.log(`✅ Done! ${results.length}/${TRANSITIONS.length} videos generated.`);
  console.log(`   Output: ${OUTPUT_DIR}`);
}

main().catch(err => {
  console.error('❌ Fatal error:', err.message);
  if (err.status) console.error(`   HTTP ${err.status}:`, err.message);
  process.exit(1);
});

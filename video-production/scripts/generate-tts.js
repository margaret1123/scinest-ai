/**
 * Generate English TTS voiceover for SciNest promo using OpenAI TTS.
 *
 * Usage: node scripts/generate-tts.js
 *
 * Output: video-production/assets/voiceover-en.mp3
 */

const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const OUTPUT_DIR = path.join(__dirname, '..', 'assets');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'voiceover-en.mp3');

// ─── English narration (from production brief) ────────────────────
const NARRATION = [
  "Upload your papers, notes, data, and feedback into one SciNest project.",
  "Ask questions across every source, with answers grounded in your materials.",
  "Turn the evidence into a full-length draft you can edit in place.",
  "Create scientific figures, then refine individual regions, text, or layers.",
  "Build a presentation from the same sources, with an editable outline.",
  "Then adjust every slide, visual, and text element before export.",
  "SciNest brings your entire academic workflow into one connected workspace.",
];

// ─── Main ─────────────────────────────────────────────────────────

async function main() {
  console.log('🎙️  SciNest TTS Voiceover Generator');
  console.log(`   Voice: nova | Format: mp3 | Output: ${OUTPUT_FILE}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Generate each sentence as a separate TTS call for better pacing control
  // TTS API has a 4096 char limit, so per-sentence is safest
  const buffers = [];

  for (let i = 0; i < NARRATION.length; i++) {
    const sentence = NARRATION[i];
    console.log(`[${i + 1}/${NARRATION.length}] Generating: "${sentence.substring(0, 60)}..."`);

    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'nova',
      input: sentence,
      response_format: 'mp3',
      speed: 1.0,
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    buffers.push(buffer);
    console.log(`  ✅ ${(buffer.length / 1024).toFixed(1)} KB`);
  }

  // Concatenate all buffers
  const combined = Buffer.concat(buffers);
  fs.writeFileSync(OUTPUT_FILE, combined);

  const totalSec = (combined.length * 8) / (128000); // approximate for 128kbps mp3
  console.log(`\n✅ Voiceover saved: ${OUTPUT_FILE}`);
  console.log(`   Total size: ${(combined.length / 1024).toFixed(1)} KB`);
  console.log(`   Approx duration: ${totalSec.toFixed(1)}s`);

  // Also save individual sentences for precise timing in FFmpeg
  const timingFile = path.join(OUTPUT_DIR, 'voiceover-timing.json');
  let offset = 0;
  const timings = buffers.map((buf, i) => {
    const dur = (buf.length * 8) / 128000;
    const entry = {
      index: i,
      text: NARRATION[i],
      start: Math.round(offset * 1000) / 1000,
      duration: Math.round(dur * 1000) / 1000,
      sizeBytes: buf.length,
    };
    offset += dur;
    return entry;
  });

  fs.writeFileSync(timingFile, JSON.stringify(timings, null, 2));
  console.log(`   Timing data: ${timingFile}`);
}

main().catch(err => {
  console.error('❌ TTS error:', err.message);
  process.exit(1);
});

/**
 * SciNest Promo v2 — TTS Voiceover Generator
 *
 * New narrative structure: pain → solution, shorter and punchier
 * Voice: nova (same as v1 for consistency)
 */

const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const OUTPUT_DIR = path.join(__dirname, '..', 'assets');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'voiceover-en-v2.mp3');

// New narration — tighter, benefit-driven
// Pain section (0-5s): NO voiceover, only visuals + BGM + text overlay
// Solution section starts at ~5s

const NARRATION = [
  // 5-9s: Chat Q&A
  "Upload once. Ask any question. Every answer, cited back to your materials.",

  // 9-13s: Long-form writing
  "Same materials. Turn them into a full-length draft. Edit any paragraph in place.",

  // 13-17s: Figures
  "Same materials. Generate scientific figures. Every region, every layer, editable.",

  // 17-21s: PPT outline
  "Same materials. Build a presentation. Editable outline. Real slides.",

  // 21-25s: PPT editor
  "Drag, resize, refine every element. Export a real editable PPTX.",

  // 25-28s: Closing
  "SciNest. One project. From sources to submission.",
];

async function main() {
  console.log('🎙️  SciNest TTS v2');
  console.log(`   Voice: nova | Output: ${OUTPUT_FILE}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const buffers = [];
  for (let i = 0; i < NARRATION.length; i++) {
    const text = NARRATION[i];
    console.log(`[${i + 1}/${NARRATION.length}] "${text.substring(0, 70)}..."`);

    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'nova',
      input: text,
      response_format: 'mp3',
      speed: 1.05,  // slightly faster for punchier delivery
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    buffers.push(buffer);
    console.log(`  ✅ ${(buffer.length / 1024).toFixed(1)} KB`);
  }

  const combined = Buffer.concat(buffers);
  fs.writeFileSync(OUTPUT_FILE, combined);

  const totalSec = (combined.length * 8) / 128000;
  console.log(`\n✅ ${OUTPUT_FILE}`);
  console.log(`   Size: ${(combined.length / 1024).toFixed(1)} KB | ~${totalSec.toFixed(1)}s`);

  // Timing data
  const timingFile = path.join(OUTPUT_DIR, 'voiceover-timing-v2.json');
  let offset = 0;
  const timings = buffers.map((buf, i) => {
    const dur = (buf.length * 8) / 128000;
    const entry = {
      index: i,
      text: NARRATION[i],
      start: Math.round(offset * 1000) / 1000,
      duration: Math.round(dur * 1000) / 1000,
    };
    offset += dur;
    return entry;
  });
  fs.writeFileSync(timingFile, JSON.stringify(timings, null, 2));
  console.log(`   Timing: ${timingFile}`);
}

main().catch(err => {
  console.error('❌', err.message);
  process.exit(1);
});

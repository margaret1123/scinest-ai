const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const OUTPUT_DIR = path.join(__dirname, '..', 'sora-output-v2');

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const prompt = [
    'A screen recording montage in three rapid shots, each showing a different AI tool window opening over the same desktop folder of research files.',
    'SHOT 1 (0-3s): A desktop folder with PDFs, Word docs, spreadsheets. An AI writing tool window opens beside it. Files are dragged from the folder into the tool. A prompt input field appears — the user types an explanation of their research. Text generation begins line by line.',
    'SHOT 2 (3-5.5s): Cut to a DIFFERENT AI tool window — different interface style, different layout — overlaying the SAME folder. Same files dragged in again. A prompt field appears again. The user types the SAME research explanation again. An image generates.',
    'SHOT 3 (5.5-7.5s): Cut to a THIRD AI tool — yet another different interface — over the SAME folder. Files dragged a third time. Prompt field a third time. User types the explanation a third time. A presentation outline appears.',
    'ENDING (7.5-8s): All three tool windows pile up on screen, chaotic, overlapping, the original folder still there underneath. Fade.',
    'CAMERA: Static screen recording perspective throughout. Jump cuts between shots. Pace accelerates — shot 1 is slow, shot 3 is frantic.',
    'MOOD: Repetitive frustration — the tools change but the work does not get easier.',
    'LIGHTING: Flat screen light, slightly desaturated.',
    'STYLE: Photorealistic screen capture. UI text is deliberately unreadable — shallow depth of field blurs specific words. The viewer recognizes AI tool interfaces and a folder with files without reading any content.',
    'EXCLUSIONS: No people, no faces, no legible text, no brand logos, no recognizable real products.',
  ].join('\n');

  console.log('🎬 Scene 1: Pain montage');
  console.log(`   Prompt: ${prompt.length} chars\n`);

  const video = await openai.videos.create({
    model: 'sora-2-pro',
    prompt,
    size: '1920x1080',
    seconds: '8',
  });
  console.log(`   Job: ${video.id} | ${video.status}\n`);

  console.log('Polling...');
  for (let i = 1; i <= 60; i++) {
    await sleep(5000);
    const v = await openai.videos.retrieve(video.id);
    process.stdout.write(`\r  #${i}: ${v.status}  `);
    if (v.status === 'completed') {
      console.log('✅\nDownloading...');
      const resp = await openai.videos.downloadContent(video.id);
      const chunks = [];
      for await (const c of resp.body) chunks.push(c);
      const out = path.join(OUTPUT_DIR, '01-pain-chaos.mp4');
      fs.writeFileSync(out, Buffer.concat(chunks));
      console.log(`✅ ${out} (${(fs.statSync(out).size/1048576).toFixed(1)} MB)`);
      return;
    }
    if (v.status === 'failed') { console.log('❌'); return; }
  }
  console.log('⏰ Timeout');
}

main().catch(e => console.error('\n❌', e.message));

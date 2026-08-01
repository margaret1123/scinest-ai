/**
 * SciNest Promo v2 — FFmpeg Composition
 *
 * Structure:
 *   0-5s:    Pain montage (Sora 01, trimmed to 5s)
 *   5-9.3s:  Chat Q&A (Sora 02)
 *   9.3-13.8s:  Writing (Sora 03)
 *   13.8-18.3s: Figures (Sora 04)
 *   18.3-22.1s: PPT outline (Sora 05)
 *   22.1-25.7s: PPT editor (Sora 06)
 *   25.7-28.9s: Closing (Sora 07)
 *
 * Strategy: All scenes are Sora-generated UI animations.
 * No more static screenshot slides — everything is moving UI.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const SORA_DIR = path.join(ROOT, 'sora-output-v2');
const ASSETS = path.join(ROOT, 'assets');
const OUTPUT = path.join(ROOT, 'output');
const TEMP = path.join(ROOT, 'temp-v2');

fs.mkdirSync(OUTPUT, { recursive: true });
fs.mkdirSync(TEMP, { recursive: true });

const VOICEOVER = path.join(ASSETS, 'voiceover-en-v2.mp3');
const BGM = path.join(ASSETS, 'bgm.mp3');

const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;

// ─── Scene timing (aligned to TTS v2) ────────────────────────────
// Pain montage: 0-5s (no narration)
// Narration starts at 5s
const NARRATION_OFFSET = 5.0;

const SCENES = [
  {
    id: '01-pain-chaos',
    file: path.join(SORA_DIR, '01-pain-chaos.mp4'),
    start: 0,
    duration: 5.0,        // 8s Sora video trimmed to first 5s
    textOverlay: "What if it's all in ONE project?",
  },
  {
    id: '02-chat-qa',
    file: path.join(SORA_DIR, '02-chat-qa.mp4'),
    start: 5.0,
    duration: 4.34,       // matches TTS line 0
  },
  {
    id: '03-longform-writing',
    file: path.join(SORA_DIR, '03-longform-writing.mp4'),
    start: 9.34,
    duration: 4.70,       // matches TTS line 1
  },
  {
    id: '04-figure-editing',
    file: path.join(SORA_DIR, '04-figure-editing.mp4'),
    start: 14.04,
    duration: 4.54,       // matches TTS line 2
  },
  {
    id: '05-ppt-outline',
    file: path.join(SORA_DIR, '05-ppt-outline.mp4'),
    start: 18.58,
    duration: 3.79,       // matches TTS line 3
  },
  {
    id: '06-ppt-editor',
    file: path.join(SORA_DIR, '06-ppt-editor.mp4'),
    start: 22.37,
    duration: 3.65,       // matches TTS line 4
  },
  {
    id: '07-closing',
    file: path.join(SORA_DIR, '07-closing.mp4'),
    start: 26.02,
    duration: 3.88,       // extended to fill ~30s total
  },
];

const TOTAL_DURATION = SCENES[SCENES.length - 1].start + SCENES[SCENES.length - 1].duration;
console.log(`Total duration: ${TOTAL_DURATION.toFixed(1)}s`);

// ─── Helpers ─────────────────────────────────────────────────────

function runFFmpeg(args, desc) {
  console.log(`\n🎬 ${desc}`);
  return new Promise((resolve, reject) => {
    const p = spawn('ffmpeg', args, { stdio: 'inherit' });
    p.on('close', code => code === 0 ? resolve() : reject(new Error(`exit ${code}`)));
    p.on('error', reject);
  });
}

// ─── Generate SRT ────────────────────────────────────────────────

function generateSRT() {
  const srtFile = path.join(OUTPUT, 'scinest-promo-v2-en.srt');
  const lines = [
    { start: 1.75, end: 5.0, text: "What if it's all in ONE project?" },
    { start: 5.0, end: 9.34, text: "Upload once. Ask any question. Every answer, cited back to your materials." },
    { start: 9.34, end: 14.04, text: "Same materials. Turn them into a full-length draft. Edit any paragraph in place." },
    { start: 14.04, end: 18.58, text: "Same materials. Generate scientific figures. Every region, every layer, editable." },
    { start: 18.58, end: 22.37, text: "Same materials. Build a presentation. Editable outline. Real slides." },
    { start: 22.37, end: 26.02, text: "Drag, resize, refine every element. Export a real editable PPTX." },
    { start: 26.02, end: TOTAL_DURATION, text: "SciNest. One project. From sources to submission." },
  ];

  let srt = '';
  lines.forEach((l, i) => {
    const start = fmtSrt(l.start);
    const end = fmtSrt(l.end);
    srt += `${i + 1}\n${start} --> ${end}\n${l.text}\n\n`;
  });

  fs.writeFileSync(srtFile, srt);
  console.log(`📝 SRT: ${srtFile}`);
  return srtFile;
}

function fmtSrt(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  const ms = Math.floor((s % 1) * 1000);
  return `${pad(h)}:${pad(m)}:${pad(sec)},${pad(ms, 3)}`;
}

function pad(n, len = 2) { return String(n).padStart(len, '0'); }

// ─── Main ────────────────────────────────────────────────────────

async function main() {
  console.log('🎥 SciNest Promo v2 — Composition');
  console.log('═'.repeat(60));

  // Check all Sora files exist
  for (const s of SCENES) {
    if (!fs.existsSync(s.file)) {
      console.error(`❌ Missing: ${s.file}`);
      console.error('   Run generate-sora-v2.js first.');
      process.exit(1);
    }
  }

  // Step 1: Generate SRT
  const srtFile = generateSRT();

  // Step 2: Trim and prepare each scene segment
  console.log('\n📐 Preparing segments...');
  const segFiles = [];

  for (let i = 0; i < SCENES.length; i++) {
    const s = SCENES[i];
    const outFile = path.join(TEMP, `seg-${String(i).padStart(2, '0')}.mp4`);

    let filterComplex;
    let inputs;

    if (s.textOverlay) {
      // Pain montage: just trim + fade. Text overlay handled via SRT subtitle.
      filterComplex = `[0:v]trim=duration=${s.duration},setpts=PTS-STARTPTS,fade=t=out:st=${s.duration - 0.3}:d=0.3[outv]`;
      inputs = ['-i', s.file];
    } else {
      // Feature scene: just trim with crossfade in
      filterComplex = `[0:v]trim=duration=${s.duration},setpts=PTS-STARTPTS,fade=t=in:d=0.15,fade=t=out:st=${s.duration - 0.15}:d=0.15[outv]`;
      inputs = ['-i', s.file];
    }

    console.log(`  Segment ${i + 1}/7: ${s.id} (${s.duration.toFixed(1)}s)` + (s.textOverlay ? ' [text overlay]' : ''));
    await runFFmpeg([
      '-y', ...inputs,
      '-filter_complex', filterComplex,
      '-map', '[outv]',
      '-c:v', 'libx264', '-preset', 'fast', '-crf', '18',
      '-pix_fmt', 'yuv420p', '-an',
      outFile,
    ], `Prepare ${s.id}`);

    segFiles.push(outFile);
  }

  // Step 3: Concat
  console.log('\n📐 Concatenating...');
  const listFile = path.join(TEMP, 'concat-list.txt');
  fs.writeFileSync(listFile, segFiles.map(f => `file '${path.resolve(f).replace(/\\/g, '/')}'`).join('\n'));

  const concatVideo = path.join(TEMP, 'concat-v2.mp4');
  await runFFmpeg([
    '-y', '-f', 'concat', '-safe', '0', '-i', listFile,
    '-c', 'copy', concatVideo,
  ], 'Concat all segments');

  // Step 4: Mix audio + burn subtitles
  console.log('\n📐 Mixing audio + subtitles...');
  const srtSafe = srtFile.replace(/\\/g, '/').replace(/:/g, '\\:');
  const subStyle = 'FontName=Arial,FontSize=28,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,Alignment=2,MarginV=80,BorderStyle=1';

  const finalMp4 = path.join(OUTPUT, 'scinest-promo-v2-30s.mp4');
  await runFFmpeg([
    '-y',
    '-i', concatVideo,
    '-i', VOICEOVER,
    '-i', BGM,
    '-filter_complex',
    // Voiceover starts at 5s, BGM plays full duration
    `[1:a]volume=1.2,adelay=${Math.round(NARRATION_OFFSET * 1000)}|${Math.round(NARRATION_OFFSET * 1000)}[voice];` +
    `[2:a]volume=0.10,afade=t=in:d=2,afade=t=out:st=${TOTAL_DURATION - 2}:d=2[bgm];` +
    `[voice][bgm]amix=inputs=2:duration=first[audio];` +
    `[0:v]subtitles='${srtSafe}':force_style='${subStyle}'[outv]`,
    '-map', '[outv]', '-map', '[audio]',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
    '-c:a', 'aac', '-b:a', '192k',
    '-t', String(TOTAL_DURATION),
    finalMp4,
  ], 'Final video with voiceover + subtitles');

  // Step 5: No-voice version
  console.log('\n📐 No-voice version...');
  const noVoiceMp4 = path.join(OUTPUT, 'scinest-promo-v2-30s-no-voice.mp4');
  await runFFmpeg([
    '-y',
    '-i', concatVideo,
    '-i', BGM,
    '-filter_complex',
    `[1:a]volume=0.15,afade=t=in:d=2,afade=t=out:st=${TOTAL_DURATION - 2}:d=2[bgm];` +
    `[0:v]subtitles='${srtSafe}':force_style='${subStyle}'[outv]`,
    '-map', '[outv]', '-map', '[bgm]',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
    '-c:a', 'aac', '-b:a', '192k',
    '-t', String(TOTAL_DURATION),
    noVoiceMp4,
  ], 'No-voice version');

  // Done
  console.log('\n' + '═'.repeat(60));
  console.log('✅ ALL DONE!');
  console.log(`   ${finalMp4}`);
  console.log(`   ${noVoiceMp4}`);
  console.log(`   ${srtFile}`);
}

main().catch(err => {
  console.error('\n❌', err.message);
  process.exit(1);
});

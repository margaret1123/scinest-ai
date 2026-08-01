/**
 * SciNest Promo v3 — GPU-accelerated assembly
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const SRC = path.join(__dirname, '..', 'sora-output-v2');
const ASSETS = path.join(__dirname, '..', 'assets');
const TMP = path.join(__dirname, '..', 'temp-v3');
const OUT = path.join(__dirname, '..', 'output');
fs.mkdirSync(TMP, { recursive: true });

const OVERLAY_REC = path.join(ASSETS, 'overlay-rec.png');
const OVERLAY_LOGO = path.join(ASSETS, 'overlay-logo.png');
const VOICEOVER = path.join(ASSETS, 'voiceover-en-v3.mp3');
const BGM = path.join(ASSETS, 'bgm.mp3');

// TTS timing v3
const tts = JSON.parse(fs.readFileSync(path.join(ASSETS, 'voiceover-timing-v3.json'), 'utf-8'));
const ttsTotal = tts[tts.length - 1].start + tts[tts.length - 1].dur;
console.log('TTS total:', ttsTotal.toFixed(1) + 's');

const PAIN_OFFSET = 5.0; // narration starts after pain montage
const TOTAL_DUR = 30.4;

// Scene definitions
const scenes = [
  { file: path.join(SRC, '01.mp4'), dur: 5.0, overlay: 'rec', text: null, upscale: true },
  { file: path.join(SRC, '02-chat-qa.mp4'), dur: 4.34, overlay: 'logo', upscale: false },
  { file: path.join(SRC, '03.mp4'), dur: 4.30, overlay: 'rec', upscale: true },
  { file: path.join(SRC, '04.mp4'), dur: 4.70, overlay: 'logo', upscale: false },
  { file: path.join(SRC, '05.mp4'), dur: 4.54, overlay: 'rec', upscale: false },
  { file: path.join(SRC, '06-ppt-editor.mp4'), dur: 3.65, overlay: 'logo', upscale: false },
  { file: path.join(SRC, '07-closing.mp4'), dur: 4.28, overlay: 'logo', upscale: false },
];

function ff(args, desc) {
  console.log('\n[' + desc + ']');
  return new Promise((resolve, reject) => {
    const p = spawn('ffmpeg', args, { stdio: 'inherit' });
    p.on('close', code => code === 0 ? resolve() : reject(new Error('exit ' + code)));
    p.on('error', reject);
  });
}

async function main() {
  console.log('SciNest Promo v3 — GPU Assembly (NVENC)');
  console.log('='.repeat(50));

  // Step 1: Build each segment
  console.log('\n--- Building segments ---');
  const segFiles = [];

  for (let i = 0; i < scenes.length; i++) {
    const s = scenes[i];
    const segFile = path.join(TMP, 'seg-' + String(i).padStart(2, '0') + '.mp4');
    const scaleFilter = s.upscale ? 'scale=1920:1080:flags=lanczos,' : '';
    const overlayFile = s.overlay === 'rec' ? OVERLAY_REC : OVERLAY_LOGO;
    const overlaySrc = s.overlay === 'rec' ? OVERLAY_REC : OVERLAY_LOGO;

    // Overlay position bottom-right. Escape colons in Windows paths.
    const ovPath = overlaySrc.replace(/\\/g, '/').replace(/:/g, '\\:');
    const ovX = 'W-w-20';
    const ovY = 'H-h-20';

    // Text reveal for scene 1 — handled via SRT instead of drawtext

    // End card handled via SRT — no drawtext complexity needed

    const filter =
      `[0:v]${scaleFilter}trim=duration=${s.dur},setpts=PTS-STARTPTS,` +
      `fade=t=out:st=${s.dur - 0.2}:d=0.2[v];` +
      `movie='${ovPath}'[ov];` +
      `[v][ov]overlay=${ovX}:${ovY}[outv]`;

    console.log('  Seg ' + (i + 1) + ': ' + path.basename(s.file) + ' -> ' + s.dur.toFixed(1) + 's [' + s.overlay + ']');

    await ff([
      '-y', '-i', s.file,
      '-filter_complex', filter,
      '-map', '[outv]',
      '-map', '0:a?',
      '-c:v', 'h264_nvenc', '-preset', 'p1', '-cq', '18',
      '-c:a', 'aac', '-b:a', '128k',
      '-t', String(s.dur),
      segFile,
    ], 'Seg ' + (i + 1) + '/' + scenes.length);

    segFiles.push(segFile);
  }

  // Step 2: Concat
  console.log('\n--- Concatenating ---');
  const listFile = path.join(TMP, 'concat.txt');
  fs.writeFileSync(listFile, segFiles.map(f => "file '" + path.resolve(f).replace(/\\/g, '/') + "'").join('\n'));
  const concatFile = path.join(TMP, 'concat-v3.mp4');

  await ff(['-y', '-f', 'concat', '-safe', '0', '-i', listFile, '-c', 'copy', concatFile], 'Concat');

  // Step 3: Generate SRT
  console.log('\n--- SRT ---');
  const srtFile = path.join(OUT, 'scinest-v3-en.srt');
  let srt = '';
  // "What if" text on screen during pain montage (1.5–5.0s), larger centered style
  srt += `1\n${fmt(1.75)} --> ${fmt(5.0)}\nWhat if it's all in ONE project?\n\n`;
  for (let i = 0; i < tts.length; i++) {
    const start = PAIN_OFFSET + tts[i].start;
    const end = start + tts[i].dur;
    srt += `${i + 2}\n${fmt(start)} --> ${fmt(end)}\n${tts[i].text}\n\n`;
  }
  // End card: SciNest logo + tagline during scene 7 (26.0-30.4s)
  const endStart = PAIN_OFFSET + tts[tts.length - 1].start;
  srt += `${tts.length + 2}\n${fmt(endStart + 0.5)} --> ${fmt(TOTAL_DUR)}\nSciNest\n\n`;
  srt += `${tts.length + 3}\n${fmt(endStart + 1.5)} --> ${fmt(TOTAL_DUR)}\nFrom sources to submission.\n\n`;
  srt += `${tts.length + 4}\n${fmt(endStart + 2.5)} --> ${fmt(TOTAL_DUR)}\nscinest-ai.vercel.app\n\n`;
  fs.writeFileSync(srtFile, srt);
  console.log('  ' + srtFile);

  // Step 4: Mix audio + burn subtitles
  console.log('\n--- Final render ---');
  const srtSafe = srtFile.replace(/\\/g, '/').replace(/:/g, '\\:');
  const subStyle = 'FontName=Arial,FontSize=26,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,Alignment=2,MarginV=70,BorderStyle=1';
  const adelay = Math.round(PAIN_OFFSET * 1000);

  const finalFile = path.join(OUT, 'scinest-promo-v3.mp4');
  await ff([
    '-y',
    '-i', concatFile,
    '-i', VOICEOVER,
    '-i', BGM,
    '-filter_complex',
    `[0:a]volume=0.4[sora];` +
    `[1:a]volume=1.6,adelay=${adelay}|${adelay}[voice];` +
    `[2:a]volume=0.06,afade=t=in:d=2,afade=t=out:st=${TOTAL_DUR - 2}:d=2[bgm];` +
    `[sora][voice][bgm]amix=inputs=3:duration=first:weights=1 1.5 0.3[audio];` +
    `[0:v]subtitles='${srtSafe}':force_style='${subStyle}'[outv]`,
    '-map', '[outv]', '-map', '[audio]',
    '-c:v', 'h264_nvenc', '-preset', 'p1', '-cq', '18',
    '-c:a', 'aac', '-b:a', '192k',
    '-t', String(TOTAL_DUR),
    finalFile,
  ], 'Final render');

  console.log('\n' + '='.repeat(50));
  console.log('DONE: ' + finalFile);
  const sizeMB = (fs.statSync(finalFile).size / 1048576).toFixed(1);
  console.log('Size: ' + sizeMB + ' MB');
}

function fmt(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  const ms = Math.floor((s % 1) * 1000);
  return `${pad(h)}:${pad(m)}:${pad(sec)},${pad(ms, 3)}`;
}
function pad(n, l = 2) { return String(n).padStart(l, '0'); }

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

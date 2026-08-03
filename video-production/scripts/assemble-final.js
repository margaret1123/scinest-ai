/**
 * SciNest Promo — Final Assembly
 * Watermark covered at exact coordinates.
 * 720p watermark center: (1160, 600). 1080p: (1740, 900).
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const SRC = path.join(__dirname, '..', 'sora-output-v2');
const ASSETS = path.join(__dirname, '..', 'assets');
const TMP = path.join(__dirname, '..', 'temp-final');
const OUT = path.join(__dirname, '..', 'output');
fs.mkdirSync(TMP, { recursive: true });

const REC_OV = path.join(ASSETS, 'overlay-rec-v4.png');   // 100x35
const LOGO_OV = path.join(ASSETS, 'overlay-logo-v4.png');  // 100x50
const VO = path.join(ASSETS, 'voiceover-en-v3.mp3');
const BGM = path.join(ASSETS, 'bgm.mp3');

// TTS timing
const tts = JSON.parse(fs.readFileSync(path.join(ASSETS, 'voiceover-timing-v3.json'), 'utf-8'));
const NARRATION_START = 5.0;

// Scene definitions with exact watermark overlay positions
const scenes = [
  { // 1. Pain — 720p, REC overlay covering watermark at (1160,600)
    file: path.join(SRC, '01.mp4'), dur: 5.0, upscale: true,
    overlay: REC_OV, ovW: 100, ovH: 35, ovX: 1110, ovY: 583,
  },
  { // 2. Chat — 1080p, Logo overlay covering watermark at (1740,900)
    file: path.join(SRC, '02-chat-qa.mp4'), dur: 4.34, upscale: false,
    overlay: LOGO_OV, ovW: 100, ovH: 50, ovX: 1690, ovY: 875,
  },
  { // 3. PPT Outline — 720p, REC overlay
    file: path.join(SRC, '03.mp4'), dur: 3.79, upscale: true,
    overlay: REC_OV, ovW: 100, ovH: 35, ovX: 1110, ovY: 583,
  },
  { // 4. Writing — 1080p, Logo overlay
    file: path.join(SRC, '04.mp4'), dur: 4.70, upscale: false,
    overlay: LOGO_OV, ovW: 100, ovH: 50, ovX: 1690, ovY: 875,
  },
  { // 5. Figures — 1080p, REC overlay
    file: path.join(SRC, '05.mp4'), dur: 4.54, upscale: false,
    overlay: REC_OV, ovW: 100, ovH: 35, ovX: 1690, ovY: 883,
  },
  { // 6. PPT Editor — 1080p, Logo overlay
    file: path.join(SRC, '06-ppt-editor.mp4'), dur: 3.65, upscale: false,
    overlay: LOGO_OV, ovW: 100, ovH: 50, ovX: 1690, ovY: 875,
  },
  { // 7. Closing — 1080p, no overlay (logo is the content)
    file: path.join(SRC, '07-closing.mp4'), dur: 4.28, upscale: false,
    overlay: null,
  },
];

const TOTAL_DUR = scenes.reduce((s, sc) => s + sc.dur, 0);
console.log('Total:', TOTAL_DUR.toFixed(1) + 's');

function ff(args, desc) {
  console.log('\n[' + desc + ']');
  return new Promise((resolve, reject) => {
    const p = spawn('ffmpeg', args, { stdio: 'inherit' });
    p.on('close', code => code === 0 ? resolve() : reject(new Error('exit ' + code)));
    p.on('error', reject);
  });
}

async function main() {
  console.log('SciNest Promo — Final Assembly');
  console.log('='.repeat(50));

  // Build segments
  console.log('\n--- Building segments ---');
  const segFiles = [];

  for (let i = 0; i < scenes.length; i++) {
    const s = scenes[i];
    const segFile = path.join(TMP, 'seg-' + String(i).padStart(2, '0') + '.mp4');
    const scaleF = s.upscale ? 'scale=1920:1080:flags=lanczos,' : '';

    let filter, maps;
    if (s.overlay) {
      const ovPath = s.overlay.replace(/\\/g, '/').replace(/:/g, '\\:');
      filter =
        `[0:v]${scaleF}trim=duration=${s.dur},setpts=PTS-STARTPTS,` +
        `fade=t=out:st=${s.dur - 0.2}:d=0.2[v];` +
        `movie='${ovPath}'[ov];` +
        `[v][ov]overlay=${s.ovX}:${s.ovY}[outv]`;
      maps = ['-map', '[outv]', '-map', '0:a?'];
    } else {
      filter =
        `[0:v]${scaleF}trim=duration=${s.dur},setpts=PTS-STARTPTS,` +
        `fade=t=out:st=${s.dur - 0.2}:d=0.2[outv]`;
      maps = ['-map', '[outv]', '-map', '0:a?'];
    }

    const label = s.overlay ? 'REC' : 'none';
    console.log('  Seg ' + (i + 1) + ': ' + path.basename(s.file) + ' ' + s.dur.toFixed(1) + 's' +
      (s.upscale ? ' [720→1080]' : '') + ' [overlay:' + (s.overlay ? (s.overlay.includes('rec') ? 'REC' : 'Logo') : 'none') + ']');

    await ff([
      '-y', '-i', s.file, '-filter_complex', filter,
      ...maps,
      '-c:v', 'h264_nvenc', '-preset', 'p1', '-cq', '18',
      '-c:a', 'aac', '-b:a', '128k', '-t', String(s.dur),
      segFile,
    ], 'Seg ' + (i + 1) + '/' + scenes.length);

    segFiles.push(segFile);
  }

  // Concat
  console.log('\n--- Concat ---');
  const listFile = path.join(TMP, 'concat.txt');
  fs.writeFileSync(listFile, segFiles.map(f => "file '" + path.resolve(f).replace(/\\/g, '/') + "'").join('\n'));
  const concatFile = path.join(TMP, 'concat-final.mp4');
  await ff(['-y', '-f', 'concat', '-safe', '0', '-i', listFile, '-c', 'copy', concatFile], 'Concat');

  // SRT
  console.log('\n--- SRT ---');
  const srtFile = path.join(OUT, 'scinest-final-en.srt');
  let srt = '';
  // "What if" text during pain (1.75–5.0s)
  srt += `1\n${fmt(1.75)} --> ${fmt(5.0)}\nWhat if it's all in ONE project?\n\n`;
  for (let i = 0; i < tts.length; i++) {
    const start = NARRATION_START + tts[i].start;
    const end = start + tts[i].dur;
    srt += `${i + 2}\n${fmt(start)} --> ${fmt(end)}\n${tts[i].text}\n\n`;
  }
  // End card
  const endS = NARRATION_START + tts[tts.length - 1].start;
  srt += `${tts.length + 2}\n${fmt(endS + 0.5)} --> ${fmt(TOTAL_DUR)}\nSciNest\n\n`;
  srt += `${tts.length + 3}\n${fmt(endS + 1.5)} --> ${fmt(TOTAL_DUR)}\nFrom sources to submission.\n\n`;
  srt += `${tts.length + 4}\n${fmt(endS + 2.5)} --> ${fmt(TOTAL_DUR)}\nscinest-ai.vercel.app\n\n`;
  fs.writeFileSync(srtFile, srt);

  // Final render
  console.log('\n--- Final render ---');
  const srtSafe = srtFile.replace(/\\/g, '/').replace(/:/g, '\\:');
  const subStyle = 'FontName=Arial,FontSize=26,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,Alignment=2,MarginV=70,BorderStyle=1';
  const adelay = Math.round(NARRATION_START * 1000);

  const finalFile = path.join(OUT, 'scinest-promo-final.mp4');
  await ff([
    '-y', '-i', concatFile, '-i', VO, '-i', BGM,
    '-filter_complex',
    `[0:a]volume=0.4[sora];` +
    `[1:a]volume=1.6,adelay=${adelay}|${adelay}[voice];` +
    `[2:a]volume=0.06,afade=t=in:d=2,afade=t=out:st=${TOTAL_DUR - 2}:d=2[bgm];` +
    `[sora][voice][bgm]amix=inputs=3:duration=first[audio];` +
    `[0:v]subtitles='${srtSafe}':force_style='${subStyle}'[outv]`,
    '-map', '[outv]', '-map', '[audio]',
    '-c:v', 'h264_nvenc', '-preset', 'p1', '-cq', '18',
    '-c:a', 'aac', '-b:a', '192k', '-t', String(TOTAL_DUR),
    finalFile,
  ], 'Final render');

  console.log('\n' + '='.repeat(50));
  console.log('DONE: ' + finalFile);
  console.log('Size: ' + (fs.statSync(finalFile).size / 1048576).toFixed(1) + ' MB');
}

function fmt(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60), ms = Math.floor((s % 1) * 1000);
  return `${pad(h)}:${pad(m)}:${pad(sec)},${pad(ms, 3)}`;
}
function pad(n, l = 2) { return String(n).padStart(l, '0'); }

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

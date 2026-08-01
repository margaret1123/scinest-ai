/**
 * FFmpeg Composition Script for SciNest 30s Promo Video
 *
 * Pipeline:
 *   1. Prepare each segment (Sora transition or screenshot with Ken Burns)
 *   2. Concat all segments
 *   3. Mix voiceover + BGM
 *   4. Burn English subtitles (drawtext)
 *   5. Output final mp4 + no-voice mp4 + SRT + voice-only track
 *
 * Usage: node scripts/compose-video.js
 */

const { execSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// ─── Paths ────────────────────────────────────────────────────────
const ROOT = path.join(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const SORA = path.join(ROOT, 'sora-output');
const OUTPUT = path.join(ROOT, 'output');
const TEMP = path.join(ROOT, 'temp');
const SCREENSHOTS = 'C:\\Users\\GGPC\\Desktop\\app功能截图';

// Ensure dirs
[OUTPUT, TEMP].forEach(d => fs.mkdirSync(d, { recursive: true }));

// ─── Timing (from TTS voiceover-timing.json) ─────────────────────
const SEGMENTS = [
  {
    // 0 - 4.152s: "Upload your papers, notes, data, and feedback into one SciNest project."
    start: 0,
    duration: 4.152,
    type: 'sora+image',
    sora: path.join(SORA, '01-sources-gathering.mp4'),      // abstract sources gathering
    image: path.join(SCREENSHOTS, '有价值聊天可加入source2026-07-28T17_21_36.png'),
    subtitle: 'Bring every source into one project.',
    // Sora plays first, then quick cut to screenshot
    soraDuration: 3.0,
    imageStart: 3.0,
  },
  {
    // 4.152 - 8.064s: "Ask questions across every source..."
    start: 4.152,
    duration: 3.912,
    type: 'image',
    image: path.join(SCREENSHOTS, 'chat完全根据上传资料回答2026-07-28T17_12_10.png'),
    subtitle: 'Ask across all your sources.',
  },
  {
    // 8.064 - 11.712s: "Turn the evidence into a full-length draft..."
    start: 8.064,
    duration: 3.648,
    type: 'image',
    image: path.join(SCREENSHOTS, '万字长文可编辑2026-07-28T18_45_54.png'),
    subtitle: 'Write long-form. Edit in place.',
  },
  {
    // 11.712 - 16.008s: "Create scientific figures, then refine individual regions..."
    start: 11.712,
    duration: 4.296,
    type: 'sora+image',
    sora: path.join(SORA, '02-text-to-figure.mp4'),         // abstract text-to-figure
    image: path.join(SCREENSHOTS, '图片可分图层编辑2026-07-28T23_45_31.png'),
    subtitle: 'Generate figures. Refine every region.',
    soraDuration: 2.5,
    imageStart: 2.5,
  },
  {
    // 16.008 - 20.088s: "Build a presentation from the same sources..."
    start: 16.008,
    duration: 4.080,
    type: 'image',
    image: path.join(SCREENSHOTS, 'PPT大纲可编辑 2026-07-28T18_58_05.png'),
    subtitle: 'Build slides from the same project.',
  },
  {
    // 20.088 - 23.712s: "Then adjust every slide, visual, and text element..."
    start: 20.088,
    duration: 3.624,
    type: 'sora+image',
    sora: path.join(SORA, '03-figure-to-slides.mp4'),       // abstract figure-to-slides
    image: path.join(SCREENSHOTS, 'PPT所有元素皆可拖拽编辑放大缩小2026-07-28T19_33_15.png'),
    subtitle: 'Edit every slide and every element.',
    soraDuration: 2.0,
    imageStart: 2.0,
  },
  {
    // 23.712 - 28.176s: "SciNest brings your entire academic workflow..."
    start: 23.712,
    duration: 4.464,
    type: 'logo',
    logo: path.join(SCREENSHOTS, 'logo.png'),
    subtitle: 'SciNest — From sources to submission.',
  },
];

// ─── Audio files ──────────────────────────────────────────────────
const VOICEOVER = path.join(ASSETS, 'voiceover-en.mp3');
const BGM = path.join(ASSETS, 'bgm.mp3');

// ─── Output files ─────────────────────────────────────────────────
const FINAL_MP4 = path.join(OUTPUT, 'scinest-promo-30s.mp4');
const NO_VOICE_MP4 = path.join(OUTPUT, 'scinest-promo-30s-no-voice.mp4');
const SRT_FILE = path.join(OUTPUT, 'scinest-promo-en.srt');
const VOICE_TRACK = path.join(OUTPUT, 'scinest-promo-voice.mp3');

// ─── Config ───────────────────────────────────────────────────────
const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;

// ─── Step 1: Generate SRT subtitle file ──────────────────────────

function generateSRT() {
  console.log('📝 Generating SRT subtitles...');

  let srt = '';
  for (let i = 0; i < SEGMENTS.length; i++) {
    const seg = SEGMENTS[i];
    const startTime = formatSRTTime(seg.start);
    const endTime = formatSRTTime(seg.start + seg.duration);
    srt += `${i + 1}\n`;
    srt += `${startTime} --> ${endTime}\n`;
    srt += `${seg.subtitle}\n\n`;
  }

  fs.writeFileSync(SRT_FILE, srt, 'utf-8');
  console.log(`  ✅ ${SRT_FILE}`);
}

function formatSRTTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  return `${pad(h)}:${pad(m)}:${pad(s)},${pad(ms, 3)}`;
}

function pad(n, len = 2) {
  return String(n).padStart(len, '0');
}

// ─── Step 2: Prepare individual segments ─────────────────────────

function buildImageFilterChain(duration, zoomSpeed = 1.002) {
  // Ken Burns: slow zoom in with slight pan
  // zoompan: z=zoom speed, x/y for pan, d=frames
  const frames = Math.round(duration * FPS);
  // Very subtle zoom: from 1.0 to ~1.05 over the segment
  const zoomEnd = 1.0 + (duration * 0.012); // ~5% zoom over 4s
  const panX = Math.round(duration * 2); // slight horizontal pan

  // zoompan filter for smooth Ken Burns
  return `scale=${WIDTH}:${HEIGHT}:force_original_aspect_ratio=decrease,pad=${WIDTH}:${HEIGHT}:(ow-iw)/2:(oh-ih)/2:color=white,zoompan=z='min(zoom+0.0004,${zoomEnd})':d=${frames}:s=${WIDTH}x${HEIGHT}:fps=${FPS},format=yuv420p`;
}

function buildSegmentFilter(seg, index) {
  const dur = seg.duration;
  const outFile = path.join(TEMP, `seg-${String(index).padStart(2, '0')}.mp4`);

  if (seg.type === 'sora+image') {
    // Sora video (trim to soraDuration) + screenshot (with Ken Burns) → concat
    const soraDur = seg.soraDuration;
    const imgDur = dur - soraDur;

    // Scale & trim Sora to exact duration
    const soraFilter = `[0:v]scale=${WIDTH}:${HEIGHT},trim=duration=${soraDur},setpts=PTS-STARTPTS,format=yuv420p,fade=t=out:st=${soraDur - 0.3}:d=0.3[sora]`;
    // Image with Ken Burns
    const imgFilter = `[1:v]${buildImageFilterChain(imgDur)},trim=duration=${imgDur},setpts=PTS-STARTPTS,fade=t=in:d=0.3[img]`;

    return {
      inputs: [seg.sora, seg.image],
      filter: `${soraFilter};${imgFilter};[sora][img]concat=n=2:v=1:a=0[outv]`,
      map: '[outv]',
      duration: dur,
      outFile,
    };
  } else if (seg.type === 'image') {
    const filter = `[0:v]${buildImageFilterChain(dur)},trim=duration=${dur},setpts=PTS-STARTPTS[outv]`;
    return {
      inputs: [seg.image],
      filter,
      map: '[outv]',
      duration: dur,
      outFile,
    };
  } else if (seg.type === 'logo') {
    // Logo on white background, centered, fade in
    const filter = `color=c=white:s=${WIDTH}x${HEIGHT}:d=${dur}:r=${FPS}[bg];[0:v]scale=300:-1,format=rgba[logo];[bg][logo]overlay=(W-w)/2:(H-h)/2:format=auto,fade=t=in:d=0.5[outv]`;
    return {
      inputs: [seg.logo],
      filter,
      map: '[outv]',
      duration: dur,
      outFile,
    };
  }
}

// ─── Step 3: Concat all segments ─────────────────────────────────

function buildConcatList(segFiles) {
  const listFile = path.join(TEMP, 'concat-list.txt');
  const content = segFiles.map(f => {
    const abs = path.resolve(f);
    return `file '${abs.replace(/\\/g, '\\\\')}'`;
  }).join('\n');
  fs.writeFileSync(listFile, content, 'utf-8');
  return listFile;
}

// ─── Step 4: Add audio (voiceover + BGM) and subtitles ───────────

function buildFinalCommand(videoFile, voiceFile, bgmFile, srtFile, outputFile) {
  // Mix voiceover + BGM with appropriate levels
  // Voiceover: full volume, BGM: -18dB (quiet background)
  const audioMix = `[1:a]volume=1.0[voice];[2:a]volume=0.15,afade=t=in:d=2,afade=t=out:st=27:d=2[bgm];[voice][bgm]amix=inputs=2:duration=first:weights=1 0.3[audio]`;

  // Burn subtitles — use forward slashes (FFmpeg treats \ as escape)
  const srtPathSafe = srtFile.replace(/\\/g, '/').replace(/:/g, '\\:').replace(/'/g, "'\\''");
  const subFilter = `subtitles='${srtPathSafe}':force_style='FontName=Arial,FontSize=28,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,Alignment=2,MarginV=80'`;

  return {
    inputs: [videoFile, voiceFile, bgmFile],
    filterComplex: `${audioMix};[0:v]${subFilter}[outv]`,
    map: ['[outv]', '[audio]'],
    output: outputFile,
  };
}

// ─── Main execution ───────────────────────────────────────────────

async function runFFmpeg(args, description) {
  console.log(`\n🎬 ${description}`);
  console.log(`   ffmpeg ${args.slice(0, 6).join(' ')} ...`);

  return new Promise((resolve, reject) => {
    const proc = spawn('ffmpeg', args, { stdio: 'inherit' });
    proc.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited with code ${code}`));
    });
    proc.on('error', reject);
  });
}

async function main() {
  console.log('🎥 SciNest Promo Video Composer');
  console.log('═'.repeat(60));

  // Step 1: Generate SRT
  generateSRT();

  // Step 2: Build each segment
  console.log('\n📐 Step 2: Rendering individual segments...');

  const segFiles = [];
  for (let i = 0; i < SEGMENTS.length; i++) {
    const seg = SEGMENTS[i];
    const plan = buildSegmentFilter(seg, i);

    let args;
    if (plan.inputs.length === 1) {
      args = [
        '-y', '-loop', '1', '-i', plan.inputs[0],
        '-filter_complex', plan.filter,
        '-map', plan.map,
        '-t', String(plan.duration),
        '-c:v', 'libx264', '-preset', 'fast', '-crf', '18',
        '-pix_fmt', 'yuv420p',
        '-an',
        plan.outFile
      ];
    } else if (plan.inputs.length === 2) {
      args = [
        '-y',
        '-i', plan.inputs[0],  // sora video
        '-loop', '1', '-i', plan.inputs[1],  // image
        '-filter_complex', plan.filter,
        '-map', plan.map,
        '-t', String(plan.duration),
        '-c:v', 'libx264', '-preset', 'fast', '-crf', '18',
        '-pix_fmt', 'yuv420p',
        '-an',
        plan.outFile
      ];
    }

    console.log(`\n  Segment ${i + 1}/7: ${seg.type} (${seg.duration.toFixed(1)}s)`);
    console.log(`    Subtitle: "${seg.subtitle}"`);

    await runFFmpeg(args, `Rendering segment ${i + 1}`);
    segFiles.push(plan.outFile);
  }

  // Step 3: Concat
  console.log('\n📐 Step 3: Concatenating segments...');
  const concatVideo = path.join(TEMP, 'concat-video.mp4');
  const listFile = buildConcatList(segFiles);

  await runFFmpeg([
    '-y', '-f', 'concat', '-safe', '0', '-i', listFile,
    '-c', 'copy', concatVideo
  ], 'Concatenating all segments');

  // Step 4: Add audio + subtitles → Final video
  console.log('\n📐 Step 4: Mixing audio + burning subtitles...');

  // Build the full filter — use forward slashes (FFmpeg treats \ as escape)
  const srtEscaped = SRT_FILE.replace(/\\/g, '/').replace(/:/g, '\\:');
  const subtitleStyle = 'FontName=Arial,FontSize=28,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,Alignment=2,MarginV=80,BorderStyle=1';

  await runFFmpeg([
    '-y',
    '-i', concatVideo,
    '-i', VOICEOVER,
    '-i', BGM,
    '-filter_complex',
    `[1:a]volume=1.2[voice];[2:a]volume=0.12,afade=t=in:d=2,afade=t=out:st=26:d=2[bgm];[voice][bgm]amix=inputs=2:duration=first[audio];[0:v]subtitles='${srtEscaped}':force_style='${subtitleStyle}'[outv]`,
    '-map', '[outv]', '-map', '[audio]',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
    '-c:a', 'aac', '-b:a', '192k',
    '-t', '28.2',
    FINAL_MP4
  ], 'Rendering final video with voiceover + subtitles');

  // Step 5: No-voice version
  console.log('\n📐 Step 5: Creating no-voice version...');

  await runFFmpeg([
    '-y',
    '-i', concatVideo,
    '-i', BGM,
    '-filter_complex',
    `[1:a]volume=0.18,afade=t=in:d=2,afade=t=out:st=26:d=2[bgm];[0:v]subtitles='${srtEscaped}':force_style='${subtitleStyle}'[outv]`,
    '-map', '[outv]', '-map', '[bgm]',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
    '-c:a', 'aac', '-b:a', '192k',
    '-t', '28.2',
    NO_VOICE_MP4
  ], 'Rendering no-voice version');

  // Step 6: Extract voice-only track
  console.log('\n📐 Step 6: Extracting voice-only track...');
  await runFFmpeg([
    '-y', '-i', FINAL_MP4, '-vn', '-acodec', 'copy', VOICE_TRACK
  ], 'Extracting voice track');

  // Done
  console.log('\n' + '═'.repeat(60));
  console.log('✅ ALL DONE!');
  console.log(`   ${FINAL_MP4}`);
  console.log(`   ${NO_VOICE_MP4}`);
  console.log(`   ${SRT_FILE}`);
  console.log(`   ${VOICE_TRACK}`);
}

main().catch(err => {
  console.error('\n❌ Composition failed:', err.message);
  process.exit(1);
});

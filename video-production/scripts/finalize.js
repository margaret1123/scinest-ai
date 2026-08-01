/**
 * Quick re-run of steps 4-6: audio mixing + subtitle burning.
 * Uses already-rendered concat-video.mp4 and SRT.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const TEMP = path.join(ROOT, 'temp');
const ASSETS = path.join(ROOT, 'assets');
const OUTPUT = path.join(ROOT, 'output');

const CONCAT_VIDEO = path.join(TEMP, 'concat-video.mp4');
const VOICEOVER = path.join(ASSETS, 'voiceover-en.mp3');
const BGM = path.join(ASSETS, 'bgm.mp3');
const SRT_FILE = path.join(OUTPUT, 'scinest-promo-en.srt');

const FINAL_MP4 = path.join(OUTPUT, 'scinest-promo-30s.mp4');
const NO_VOICE_MP4 = path.join(OUTPUT, 'scinest-promo-30s-no-voice.mp4');
const VOICE_TRACK = path.join(OUTPUT, 'scinest-promo-voice.mp3');

if (!fs.existsSync(CONCAT_VIDEO)) {
  console.error('concat-video.mp4 not found. Run compose-video.js first.');
  process.exit(1);
}

function runFFmpeg(args, desc) {
  console.log(`\n🎬 ${desc}`);
  return new Promise((resolve, reject) => {
    const proc = spawn('ffmpeg', args, { stdio: 'inherit' });
    proc.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exit ${code}`));
    });
    proc.on('error', reject);
  });
}

async function main() {
  const srtSafe = SRT_FILE.replace(/\\/g, '/').replace(/:/g, '\\:');
  const subtitleStyle = 'FontName=Arial,FontSize=28,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,Alignment=2,MarginV=80,BorderStyle=1';

  // Step 4: Final video with voiceover + subtitles
  await runFFmpeg([
    '-y',
    '-i', CONCAT_VIDEO,
    '-i', VOICEOVER,
    '-i', BGM,
    '-filter_complex',
    `[1:a]volume=1.2[voice];[2:a]volume=0.12,afade=t=in:d=2,afade=t=out:st=26:d=2[bgm];[voice][bgm]amix=inputs=2:duration=first[audio];[0:v]subtitles='${srtSafe}':force_style='${subtitleStyle}'[outv]`,
    '-map', '[outv]', '-map', '[audio]',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
    '-c:a', 'aac', '-b:a', '192k',
    '-t', '28.2',
    FINAL_MP4
  ], 'Final video with voiceover + subtitles');

  // Step 5: No-voice version
  await runFFmpeg([
    '-y',
    '-i', CONCAT_VIDEO,
    '-i', BGM,
    '-filter_complex',
    `[1:a]volume=0.18,afade=t=in:d=2,afade=t=out:st=26:d=2[bgm];[0:v]subtitles='${srtSafe}':force_style='${subtitleStyle}'[outv]`,
    '-map', '[outv]', '-map', '[bgm]',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
    '-c:a', 'aac', '-b:a', '192k',
    '-t', '28.2',
    NO_VOICE_MP4
  ], 'No-voice version');

  // Step 6: Voice-only track
  await runFFmpeg([
    '-y', '-i', FINAL_MP4, '-vn', '-acodec', 'copy', VOICE_TRACK
  ], 'Voice-only track');

  // Check sizes
  console.log('\n' + '═'.repeat(60));
  console.log('✅ ALL DONE!');
  for (const f of [FINAL_MP4, NO_VOICE_MP4, VOICE_TRACK, SRT_FILE]) {
    if (fs.existsSync(f)) {
      const size = (fs.statSync(f).size / 1024).toFixed(0);
      console.log(`   ${path.basename(f)} (${size} KB)`);
    }
  }
}

main().catch(err => {
  console.error('\n❌', err.message);
  process.exit(1);
});

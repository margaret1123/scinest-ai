/**
 * Download completed Sora videos using their job IDs.
 * Quick fix for SDK v7 response handling.
 */

const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const OUTPUT_DIR = path.join(__dirname, '..', 'sora-output');
const JOBS_FILE = path.join(OUTPUT_DIR, 'sora-jobs.json');

const jobs = JSON.parse(fs.readFileSync(JOBS_FILE, 'utf-8'));

async function downloadVideo(videoId, filename) {
  const outPath = path.join(OUTPUT_DIR, filename);
  console.log(`  Downloading ${filename}...`);

  try {
    const response = await openai.videos.downloadContent(videoId);

    let buffer;

    // SDK v7 might return different types
    if (Buffer.isBuffer(response)) {
      buffer = response;
    } else if (response instanceof ArrayBuffer) {
      buffer = Buffer.from(response);
    } else if (response.body && typeof response.body.arrayBuffer === 'function') {
      buffer = Buffer.from(await response.body.arrayBuffer());
    } else if (response.arrayBuffer && typeof response.arrayBuffer === 'function') {
      buffer = Buffer.from(await response.arrayBuffer());
    } else if (typeof response === 'string') {
      buffer = Buffer.from(response, 'binary');
    } else if (response.body) {
      // Node ReadableStream
      const chunks = [];
      for await (const chunk of response.body) {
        chunks.push(chunk);
      }
      buffer = Buffer.concat(chunks);
    } else {
      // Last resort: try to write as JSON and see what we got
      console.log(`  ⚠️ Unknown response type: ${typeof response}`);
      console.log(`  Keys: ${Object.keys(response).join(', ')}`);
      // Try to read the response as a stream
      if (response.url) {
        // It might have a URL we can fetch
        console.log(`  Has URL: ${response.url}`);
      }
      throw new Error(`Cannot handle response type: ${typeof response}`);
    }

    fs.writeFileSync(outPath, buffer);
    const sizeMB = (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2);
    console.log(`  ✅ ${sizeMB} MB -> ${outPath}`);
    return outPath;
  } catch (err) {
    console.error(`  ❌ Download failed: ${err.message}`);
    throw err;
  }
}

async function main() {
  console.log('📥 Downloading completed Sora videos...\n');

  for (const job of jobs) {
    const filename = `${job.id}.mp4`;
    await downloadVideo(job.jobId, filename);
  }

  console.log(`\n✅ All ${jobs.length} videos downloaded to ${OUTPUT_DIR}`);
}

main().catch(err => {
  console.error('❌ Fatal:', err.message);
  process.exit(1);
});

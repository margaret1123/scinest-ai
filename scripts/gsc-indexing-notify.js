// Indexing API — notify Google about new/updated pages (best-effort accelerator)
// Usage: node scripts/gsc-indexing-notify.js
// NOTE: Google officially documents the Indexing API only for JobPosting/BroadcastEvent
// pages; pings for other content may be ignored. Treat this as a best-effort complement
// to manual "请求编入索引" in GSC URL inspection. Quota: 200 URLs/day — split runs if needed.
// Prereq: same service-account setup as gsc-search-analytics.js.
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

const key = JSON.parse(fs.readFileSync('C:/Users/GGPC/Desktop/scinest-auth-93254b701484.json', 'utf8'));

// 8 new pages from the Aug-30 SEO deploy + 4 pages touched by the keyword-weaving pass
const URLS = [
  'https://scinest.app/ai-paper-writer',
  'https://scinest.app/zh/ai-paper-writer',
  'https://scinest.app/thesis-defense-presentation',
  'https://scinest.app/zh/thesis-defense-presentation',
  'https://scinest.app/best-ai-tools-for-thesis-writing',
  'https://scinest.app/zh/literature-review-assistant',
  'https://scinest.app/about',
  'https://scinest.app/zh/about',
  'https://scinest.app/zh/ai-editable-images',
  'https://scinest.app/zh/ai-long-form-writer',
  'https://scinest.app/',
  'https://scinest.app/zh',
];

function b64(b) { return b.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''); }
function jwt() {
  const h = b64(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
  const n = Math.floor(Date.now() / 1000);
  const p = b64(Buffer.from(JSON.stringify({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/indexing', aud: key.token_uri, exp: n + 3600, iat: n })));
  const s = crypto.createSign('RSA-SHA256'); s.update(h + '.' + p);
  return h + '.' + p + '.' + b64(s.sign(key.private_key));
}
function req(host, path, method, headers, body) {
  return new Promise((resolve, reject) => {
    const r = https.request({ hostname: host, path, method, headers }, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => { try { resolve(JSON.parse(d)); } catch { resolve(d); } });
    });
    r.on('error', reject); if (body) r.write(body); r.end();
  });
}

async function main() {
  const tb = 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=' + jwt();
  const tr = await req('oauth2.googleapis.com', '/token', 'POST',
    { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(tb) }, tb);
  if (!tr.access_token) { console.log('TOKEN FAIL:', JSON.stringify(tr).slice(0, 300)); return; }

  for (const url of URLS) {
    const body = JSON.stringify({ url, type: 'URL_UPDATED' });
    const r = await req('indexing.googleapis.com', '/v3/urlNotifications:publish', 'POST',
      { 'Authorization': 'Bearer ' + tr.access_token, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }, body);
    if (r.error) { console.log(`FAIL ${url}  →  ${r.error.status || ''} ${r.error.message}`); }
    else console.log(`OK   ${url}  →  ${JSON.stringify(r.urlNotificationMetadata || {})}`);
    // small pause to stay well within rate limits
    await new Promise(res => setTimeout(res, 400));
  }
}
main().catch(e => console.error(e.message));

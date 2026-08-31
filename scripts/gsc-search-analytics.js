// GSC Search Analytics — pull query/page data for a GSC property
// Usage: node scripts/gsc-search-analytics.js queries|opportunities|pages [site]
//   site: 'https://scinest.app/' (default) — URL-prefix property, https form
// Prereq: Search Console API enabled + service account (ga-reader@scinest-auth.iam.gserviceaccount.com)
// added to the property in GSC with full permission.
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

const key = JSON.parse(fs.readFileSync('C:/Users/GGPC/Desktop/scinest-auth-93254b701484.json', 'utf8'));
const SITE = process.argv[3] || 'https://scinest.app/';

function b64(b) { return b.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''); }
function jwt(scope) {
  const h = b64(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
  const n = Math.floor(Date.now() / 1000);
  const p = b64(Buffer.from(JSON.stringify({ iss: key.client_email, scope, aud: key.token_uri, exp: n + 3600, iat: n })));
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

function dstr(daysAgo) {
  const d = new Date(Date.now() - daysAgo * 86400000);
  return d.toISOString().slice(0, 10);
}

const mode = process.argv[2] || 'queries';

// NOTE: this API version takes startDate/endDate as flat fields (not dateRanges)
const BASE = { startDate: dstr(28), endDate: dstr(3), rowLimit: 250 };
const BODIES = {
  queries: { ...BASE, dimensions: ['query'] },
  opportunities: { ...BASE, dimensions: ['query', 'page'] },
  pages: { ...BASE, dimensions: ['page'] },
};

function fmtRow(row) {
  const dims = row.keys.join(' | ');
  const m = { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  for (const k in m) { m[k] = Number(row[k]); }
  return `${String(m.position).padStart(5)}  ${String(m.clicks).padStart(3)} clk  ${String(m.impressions).padStart(5)} imp  ${(m.ctr * 100).toFixed(1)}%  ${dims}`;
}

async function main() {
  const tb = 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=' + jwt('https://www.googleapis.com/auth/webmasters.readonly');
  const tr = await req('oauth2.googleapis.com', '/token', 'POST',
    { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(tb) }, tb);
  if (!tr.access_token) { console.log('TOKEN FAIL:', JSON.stringify(tr).slice(0, 300)); return; }

  const body = BODIES[mode];
  if (!body) { console.log('Unknown mode. Use: queries | opportunities | pages'); return; }
  const r = await req('www.googleapis.com',
    `/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
    'POST',
    { 'Authorization': 'Bearer ' + tr.access_token, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(body)) },
    JSON.stringify(body));
  if (r.error) { console.log('API ERROR:', JSON.stringify(r.error)); return; }
  if (!r.rows || !r.rows.length) { console.log('(no data)'); return; }

  if (mode === 'opportunities') {
    // position 10-30, sorted by impressions — the refresh targets (checklist item C)
    const opp = r.rows
      .map(row => ({ row, m: { clicks: Number(row.clicks), impressions: Number(row.impressions), ctr: Number(row.ctr), position: Number(row.position) } }))
      .filter(x => x.m.position >= 10 && x.m.position <= 30)
      .sort((a, b) => b.m.impressions - a.m.impressions);
    if (!opp.length) { console.log('(no queries currently in position 10-30)'); return; }
    for (const x of opp) console.log(fmtRow(x.row));
  } else {
    for (const row of r.rows) console.log(fmtRow(row));
  }
}
main().catch(e => console.error(e.message));

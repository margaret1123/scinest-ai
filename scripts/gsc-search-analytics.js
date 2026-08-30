// GSC Search Analytics — pull query/page data for scinest.app
// Usage: node scripts/gsc-search-analytics.js queries|opportunities|pages
// Prereq: Search Console API enabled in GCP project + service account added to the
// scinest.app property in GSC (see docs/seo-geo-checklist.md phase "GSC 数据打通").
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

const key = JSON.parse(fs.readFileSync('C:/Users/GGPC/Desktop/scinest-auth-93254b701484.json', 'utf8'));
const SITE = 'scinest.app';

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

const BODIES = {
  queries: {
    dateRanges: [{ startDate: dstr(28), endDate: dstr(3) }],
    dimensions: ['query'],
    rowLimit: 200,
  },
  opportunities: {
    // position 10-30 = the refresh targets (checklist item C)
    dateRanges: [{ startDate: dstr(28), endDate: dstr(3) }],
    dimensions: ['query', 'page'],
    dimensionFilterGroups: [{ filters: [{ dimension: 'position', operator: 'BETWEEN', expression: '10' }, { dimension: 'position', operator: 'BETWEEN', expression: '30' }] }],
    rowLimit: 200,
  },
  pages: {
    dateRanges: [{ startDate: dstr(28), endDate: dstr(3) }],
    dimensions: ['page'],
    rowLimit: 100,
  },
};

async function main() {
  const tb = 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=' + jwt('https://www.googleapis.com/auth/webmasters.readonly');
  const tr = await req('oauth2.googleapis.com', '/token', 'POST',
    { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(tb) }, tb);
  if (!tr.access_token) { console.log('TOKEN FAIL:', JSON.stringify(tr).slice(0, 300)); return; }

  const body = BODIES[mode];
  if (!body) { console.log('Unknown mode. Use: queries | opportunities | pages'); return; }
  const r = await req('www.googleapis.com',
    `/webmasters/v3/sites/${encodeURIComponent('scinest://' + SITE)}/searchAnalytics/query`,
    'POST',
    { 'Authorization': 'Bearer ' + tr.access_token, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(body)) },
    JSON.stringify(body));
  if (r.error) { console.log('API ERROR:', r.error.message); return; }
  if (!r.rows || !r.rows.length) { console.log('(no data — GSC 可能还没有收录数据，或服务账号权限未生效)'); return; }
  for (const row of r.rows) {
    const dims = row.keys.join(' | ');
    const m = { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    for (const k in m) { m[k] = Number(row[k]); }
    console.log(`${String(m.position).padStart(5)}  ${String(m.clicks).padStart(3)} clk  ${String(m.impressions).padStart(5)} imp  ${(m.ctr * 100).toFixed(1)}%  ${dims}`);
  }
}
main().catch(e => console.error(e.message));

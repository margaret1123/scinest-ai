// Try Search Console API with the existing service account (webmasters.readonly)
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');
const key = JSON.parse(fs.readFileSync('C:/Users/GGPC/Desktop/scinest-auth-93254b701484.json', 'utf8'));
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
async function main() {
  const tb = 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=' + jwt('https://www.googleapis.com/auth/webmasters.readonly');
  const tr = await req('oauth2.googleapis.com', '/token', 'POST',
    { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(tb) }, tb);
  if (!tr.access_token) { console.log('TOKEN FAIL:', JSON.stringify(tr).slice(0, 300)); return; }
  const at = tr.access_token;
  const sites = await req('www.googleapis.com', '/webmasters/v3/sites', 'GET', { 'Authorization': 'Bearer ' + at });
  if (sites.error) { console.log('GSC access: NO —', sites.error.message); return; }
  console.log('GSC sites:', JSON.stringify(sites, null, 2).slice(0, 800));
}
main().catch(e => console.error(e.message));

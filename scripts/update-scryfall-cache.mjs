#!/usr/bin/env node
// Scans all content files for {% mtg... %} tags and pre-fetches missing card images.
// Usage: npm run cache:update

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_PATH = join(ROOT, '.scryfall-cache.json');
const CONTENT_DIR = join(ROOT, 'src/content/posts');

let cache = {};
try {
  cache = JSON.parse(readFileSync(CACHE_PATH, 'utf-8'));
  console.log(`[cache] loaded — ${Object.keys(cache).length} entries`);
} catch {
  console.log('[cache] starting fresh');
}

let lastFetch = 0;
async function fetchWithDelay(url) {
  const wait = Math.max(0, 200 - (Date.now() - lastFetch));
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastFetch = Date.now();
  return fetch(url);
}

function getImageUrls(card) {
  if (card.image_uris?.large) return [card.image_uris.large];
  const faces = card.card_faces;
  if (faces) return faces.map((f) => f.image_uris?.large).filter(Boolean);
  return [];
}

async function fetchByName(name, edition, language) {
  const key = `name:${name}:${edition}:${language}`;
  if (cache[key]) return;
  let url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`;
  if (edition) url += `&set=${encodeURIComponent(edition)}`;
  console.log(`[fetch] ${name}${edition ? ` [${edition}]` : ''}`);
  const res = await fetchWithDelay(url);
  if (!res.ok) { console.warn(`[skip]  ${name} — HTTP ${res.status}`); return; }
  const data = await res.json();
  const urls = getImageUrls(data);
  if (urls.length) {
    cache[key] = urls.join('|');
    console.log(`[ok]    ${name} — ${urls.length} face(s)`);
  }
}

async function fetchByNumber(edition, number, language) {
  const key = `pick:${edition}:${number}:${language}`;
  if (cache[key]) return;
  let url = `https://api.scryfall.com/cards/${encodeURIComponent(edition)}/${encodeURIComponent(number)}`;
  if (language && language !== 'en') url += `/${encodeURIComponent(language)}`;
  console.log(`[fetch] ${edition}/${number}`);
  const res = await fetchWithDelay(url);
  if (!res.ok) { console.warn(`[skip]  ${edition}/${number} — HTTP ${res.status}`); return; }
  const data = await res.json();
  const urls = getImageUrls(data);
  if (urls.length) {
    cache[key] = urls.join('|');
    console.log(`[ok]    ${edition}/${number} — ${urls.length} face(s)`);
  }
}

const CURLY_DOUBLE = /[""]/g;
const CURLY_SINGLE = /['']/g;

function tokenize(input) {
  const s = input.replace(CURLY_DOUBLE, '"').replace(CURLY_SINGLE, "'");
  const tokens = [];
  const re = /([^=\s]+)="([^"]*)"|([^=\s]+)='([^']*)'|"([^"]*)"|'([^']*)'|(\S+)/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    if (m[1] !== undefined) tokens.push(`${m[1]}=${m[2]}`);
    else if (m[3] !== undefined) tokens.push(`${m[3]}=${m[4]}`);
    else if (m[5] !== undefined) tokens.push(m[5]);
    else if (m[6] !== undefined) tokens.push(m[6]);
    else tokens.push(m[7]);
  }
  return tokens;
}

function parseCardArgs(tokens) {
  const opts = {};
  const nameTokens = [];
  for (const t of tokens) {
    const eqIdx = t.indexOf('=');
    const coIdx = t.indexOf(':');
    const sep = eqIdx > 0 ? eqIdx : coIdx > 0 ? coIdx : -1;
    if (sep > 0) opts[t.slice(0, sep)] = t.slice(sep + 1);
    else nameTokens.push(t);
  }
  const last = nameTokens[nameTokens.length - 1];
  let edition = opts.edition ?? '';
  if (nameTokens.length > 1 && last && /^[a-z0-9]{3}$/i.test(last)) {
    edition = last.toLowerCase();
    nameTokens.pop();
  }
  return { name: nameTokens.join(' '), edition, language: opts.language ?? 'en' };
}

function parsePickArgs(tokens) {
  const opts = {};
  for (const t of tokens.slice(2)) {
    const sep = t.indexOf('=') > 0 ? t.indexOf('=') : t.indexOf(':') > 0 ? t.indexOf(':') : -1;
    if (sep > 0) opts[t.slice(0, sep)] = t.slice(sep + 1);
  }
  return { edition: tokens[0]?.toLowerCase() ?? '', number: tokens[1] ?? '', language: opts.language ?? 'en' };
}

function walkDir(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkDir(full));
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) files.push(full);
  }
  return files;
}

const TAG_RE = /\{%\s*(mtglink|mtgcard|mtgpick)\s+(.*?)\s*%\}/g;
const nameCards = [];
const pickCards = [];

for (const file of walkDir(CONTENT_DIR)) {
  const text = readFileSync(file, 'utf-8');
  TAG_RE.lastIndex = 0;
  let m;
  while ((m = TAG_RE.exec(text)) !== null) {
    const [, tag, argsStr] = m;
    const tokens = tokenize(argsStr);
    if (tag === 'mtgpick') {
      const { edition, number, language } = parsePickArgs(tokens);
      if (edition && number) pickCards.push({ edition, number, language });
    } else {
      const { name, edition, language } = parseCardArgs(tokens);
      if (name) nameCards.push({ name, edition, language });
    }
  }
}

function dedup(cards, keyFn) {
  const seen = new Set();
  return cards.filter((c) => { const k = keyFn(c); if (seen.has(k)) return false; seen.add(k); return true; });
}

const uniqueNames = dedup(nameCards, (c) => `name:${c.name}:${c.edition}:${c.language}`);
const uniquePicks = dedup(pickCards, (c) => `pick:${c.edition}:${c.number}:${c.language}`);
const uncachedNames = uniqueNames.filter((c) => !cache[`name:${c.name}:${c.edition}:${c.language}`]);
const uncachedPicks = uniquePicks.filter((c) => !cache[`pick:${c.edition}:${c.number}:${c.language}`]);

console.log(`\nFound ${uniqueNames.length} named cards (${uncachedNames.length} uncached), ${uniquePicks.length} picks (${uncachedPicks.length} uncached)`);

for (const { name, edition, language } of uncachedNames) {
  await fetchByName(name, edition, language);
}
for (const { edition, number, language } of uncachedPicks) {
  await fetchByNumber(edition, number, language);
}

writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
console.log(`\n[done] ${Object.keys(cache).length} total entries in cache`);

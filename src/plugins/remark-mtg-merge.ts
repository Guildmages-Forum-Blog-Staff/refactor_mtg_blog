import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Parent } from 'mdast';
import { createHash } from 'crypto';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';
import { fetchImageByName } from './scryfall-build-fetch';

export interface MtgMergeOptions {
  base?: string;
}

// Normalize curly quotes → ASCII before JSON.parse
const CURLY_DOUBLE = new RegExp(
  '[' + String.fromCharCode(0x201c) + String.fromCharCode(0x201d) + ']',
  'g',
);
const CURLY_SINGLE = new RegExp(
  '[' + String.fromCharCode(0x2018) + String.fromCharCode(0x2019) + ']',
  'g',
);

const TAG_PATTERN = () => /\{%\s*mtgmerge\s+(.*?)\s*%\}/g;

const OUTPUT_DIR = join(process.cwd(), 'public', 'generated');
const CARD_HEIGHT = 340;

function ensureOutputDir() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });
}

function hashNames(names: string[]): string {
  return createHash('md5')
    .update([...names].sort().join('|').toLowerCase())
    .digest('hex')
    .slice(0, 12);
}

function parseNames(raw: string): string[] | null {
  const normalized = raw.replace(CURLY_DOUBLE, '"').replace(CURLY_SINGLE, "'");
  try {
    const parsed = JSON.parse(normalized);
    if (Array.isArray(parsed) && parsed.every((x) => typeof x === 'string')) {
      return parsed.filter((s) => s.trim().length > 0);
    }
  } catch {
    // not valid JSON array
  }
  return null;
}

async function fetchBuffer(url: string): Promise<Buffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
  } catch {
    return null;
  }
}

async function buildMergeImage(names: string[]): Promise<string | null> {
  ensureOutputDir();

  const hash = hashNames(names);
  const filename = `mtg-merge-${hash}.webp`;
  const outputPath = join(OUTPUT_DIR, filename);

  if (existsSync(outputPath)) {
    console.log(`[mtgmerge] cache hit  — ${names.join(', ')}`);
    return filename;
  }

  console.log(`[mtgmerge] stitching  — ${names.join(', ')}`);

  const urls = await Promise.all(names.map((n) => fetchImageByName(n, '', 'en')));
  const validUrls = urls.filter((u): u is string => u !== null);

  if (validUrls.length === 0) {
    console.warn(`[mtgmerge] no images found for: ${names.join(', ')}`);
    return null;
  }

  const rawBuffers = await Promise.all(validUrls.map(fetchBuffer));
  const validBuffers = rawBuffers.filter((b): b is Buffer => b !== null);

  if (validBuffers.length === 0) return null;

  const resized = await Promise.all(
    validBuffers.map((buf) =>
      sharp(buf)
        .resize({ height: CARD_HEIGHT, withoutEnlargement: false })
        .toBuffer({ resolveWithObject: true }),
    ),
  );

  const totalWidth = resized.reduce((sum, { info }) => sum + info.width, 0);
  const height = resized[0].info.height;

  let x = 0;
  const compositeInputs = resized.map(({ data, info }) => {
    const overlay = { input: data, left: x, top: 0 };
    x += info.width;
    return overlay;
  });

  await sharp({
    create: { width: totalWidth, height, channels: 3, background: { r: 21, g: 21, b: 21 } },
  })
    .composite(compositeInputs)
    .webp({ quality: 88 })
    .toFile(outputPath);

  console.log(`[mtgmerge] saved     — ${filename} (${totalWidth}×${height})`);
  return filename;
}

interface PendingMatch {
  index: number;
  parent: Parent;
  names: string[];
}

export function remarkMtgMerge(options: MtgMergeOptions = {}) {
  const base = (options.base ?? '/').replace(/\/$/, '');

  return async function transformer(tree: Root) {
    const pending: PendingMatch[] = [];

    visit(tree, 'paragraph', (node: Paragraph, index, parent: Parent | null) => {
      if (!parent || index === undefined) return;

      const children = node.children;
      if (children.length !== 1 || children[0].type !== 'text') return;

      const text = (children[0] as Text).value;
      const pattern = TAG_PATTERN();
      const match = pattern.exec(text);
      if (!match || match[0] !== text.trim()) return;

      const names = parseNames(match[1]);
      if (!names || names.length < 2 || names.length > 4) {
        console.warn(`[mtgmerge] invalid syntax — needs array of 2–4 card names: ${match[1]}`);
        return;
      }

      pending.push({ index, parent, names });
    });

    const resolved = await Promise.all(
      pending.map(async ({ index, parent, names }) => {
        const filename = await buildMergeImage(names);
        if (!filename) return null;
        return { index, parent, names, filename };
      }),
    );

    const valid = resolved.filter((r): r is NonNullable<typeof r> => r !== null);
    valid.sort((a, b) => b.index - a.index);

    for (const { index, parent, names, filename } of valid) {
      const src = `${base}/generated/${filename}`;
      const imgNode = {
        type: 'html',
        value: `<img src="${src}" alt="${names.join(' + ')}" class="mtg-merge-card rounded-lg" loading="lazy" />`,
      };
      (parent.children as unknown[]).splice(index, 1, imgNode);
    }
  };
}

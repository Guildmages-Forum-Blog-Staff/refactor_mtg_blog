#!/usr/bin/env node
// One-off backfill: move existing posts' cover/thumbnail and in-article images
// into the images repo, same rules as `npm run post` (see localize-images.ts).
// Usage: npx tsx scripts/migrate-images.ts <images-repo-clone> [post-slug...]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import yaml from 'js-yaml';
import { localizeImages, type CoverFields } from './localize-images';

const POSTS_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src/content/posts',
);

/** Replaces URLs inside the front-matter block only, leaving formatting and the body untouched. */
export function replaceInFrontmatter(src: string, map: Map<string, string>): string {
  const end = src.indexOf('\n---', 3);
  if (!src.startsWith('---') || end === -1) throw new Error('no front-matter block');
  let fm = src.slice(0, end);
  for (const [from, to] of map) fm = fm.split(from).join(to);
  return fm + src.slice(end);
}

async function main(): Promise<void> {
  const [imagesDir, ...only] = process.argv.slice(2);
  if (!imagesDir) throw new Error('usage: migrate-images.ts <images-repo-clone> [post-slug...]');
  const baseUrl = process.env.IMAGES_BASE_URL ?? 'https://images.guildmagesforum.tw';
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .filter((f) => only.length === 0 || only.includes(f.replace(/\.mdx?$/, '')))
    .sort();

  let changed = 0;
  let failed = 0;
  for (const file of files) {
    const slug = file.replace(/\.mdx?$/, '');
    const src = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const end = src.indexOf('\n---', 3);
    const fm = yaml.load(src.slice(3, end)) as CoverFields;
    const before = { cover: fm.cover, thumbnail: fm.thumbnail };

    const { frontmatter, body, warnings } = await localizeImages(before, src.slice(end), {
      imagesDir,
      baseUrl,
      subdir: `posts/${slug}`,
    });
    for (const w of warnings) console.log(`${slug}: ${w}`);
    failed += warnings.length;

    const map = new Map<string, string>();
    for (const k of ['cover', 'thumbnail'] as const) {
      if (before[k] && frontmatter[k] !== before[k]) map.set(before[k]!, frontmatter[k]!);
    }
    const out = replaceInFrontmatter(src.slice(0, end) + body, map);
    if (out === src) continue;
    fs.writeFileSync(path.join(POSTS_DIR, file), out);
    changed++;
    console.log(`${slug}: rewritten`);
  }
  console.log(`[migrate-images] ${changed} posts rewritten, ${failed} images failed`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err: unknown) => {
    console.error('[migrate-images] fatal:', err instanceof Error ? err.stack : err);
    process.exitCode = 1;
  });
}

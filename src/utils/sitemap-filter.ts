import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import yaml from 'js-yaml';
import { langPrefix } from '../i18n';
import { postLang, postSlug } from './posts';

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---/;

function collectPostFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return collectPostFiles(full);
    return /\.mdx?$/.test(entry) ? [full] : [];
  });
}

/**
 * Page paths (relative to the base path, no trailing slash) of posts whose
 * frontmatter sets `preview: true`: the language-free slug, prefixed with
 * `en/` for English posts. Reads raw frontmatter via
 * `fs` rather than `astro:content` because this runs from astro.config.ts,
 * before the content collections module is available.
 */
export function getPreviewSlugs(postsDir: string): string[] {
  return collectPostFiles(postsDir)
    .filter((file) => {
      const match = readFileSync(file, 'utf8').match(FRONTMATTER_RE);
      if (!match) return false;
      const data = yaml.load(match[1]) as { preview?: boolean } | undefined;
      return data?.preview === true;
    })
    .map((file) => relative(postsDir, file).replace(/\\/g, '/'))
    .map((id) => `${langPrefix(postLang(id))}${postSlug(id)}`);
}

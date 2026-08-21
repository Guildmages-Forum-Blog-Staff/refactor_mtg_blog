#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, '..', 'src', 'content', 'posts');
const AUTHORS_DIR = path.join(__dirname, '..', 'src', 'content', 'authors');

interface HackmdFrontmatter {
  title?: unknown;
  categories?: unknown;
  authors?: unknown;
  cover?: unknown;
  thumbnail?: unknown;
  excerpt?: unknown;
  comments?: unknown;
  preview?: unknown;
  updated?: unknown;
  // Recognized-but-dropped: abandoned in this site's schema.
  tags?: unknown;
  // Recognized-but-dropped: always overwritten with the import timestamp.
  date?: unknown;
}

const KNOWN_FRONTMATTER_KEYS = new Set([
  'title',
  'categories',
  'authors',
  'cover',
  'thumbnail',
  'excerpt',
  'comments',
  'preview',
  'updated',
  'tags',
  'date',
]);

interface PostFrontmatter {
  title: string;
  date: string;
  categories: string[];
  authors: string[];
  cover?: string;
  thumbnail?: string;
  excerpt?: string;
  comments?: boolean;
  preview?: boolean;
  updated?: string;
}

/** True if `filename` is a bare slug that cannot escape `src/content/posts/` via `path.join`. */
export function isValidPostFilename(filename: string): boolean {
  return /^[A-Za-z0-9._-]+$/.test(filename);
}

/** Extracts the HackMD note ID from a URL (`/NoteID` or `/@user/NoteID`). */
export function extractNoteId(url: string): string {
  if (/https:\/\/hackmd\.io\/s\//.test(url)) {
    throw new Error(
      `Published-link URLs ("/s/...") are not supported: ${url}. Use the note's edit URL instead.`,
    );
  }
  const match = url.match(/https:\/\/hackmd\.io\/(?:@[^/]+\/)?([A-Za-z0-9_-]+)/);
  if (!match) throw new Error(`Cannot extract note ID from URL: ${url}`);
  return match[1];
}

/** Strips leading junk before front-matter and any HTML comments from the raw note. */
export function cleanMarkdown(content: string): string {
  const fmIndex = content.indexOf('---');
  if (fmIndex === -1) return content;
  return content
    .slice(fmIndex)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+$/, '\n');
}

/** Formats a Date as Asia/Taipei "YYYY-MM-DD HH:mm:ss", matching the rest of the site. */
function formatTaipeiDate(date: Date): string {
  return date.toLocaleString('sv-SE', { timeZone: 'Asia/Taipei' });
}

export function splitFrontMatter(content: string): { fmBody: string; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error('No front-matter block found in note content.');
  return { fmBody: match[1], body: match[2] };
}

function knownAuthorSlugs(): Set<string> {
  return new Set(
    fs
      .readdirSync(AUTHORS_DIR)
      .filter((f) => /\.ya?ml$/i.test(f))
      .map((f) => f.replace(/\.ya?ml$/i, '')),
  );
}

function asStringArray(value: unknown, field: string): string[] {
  if (value === undefined) return [];
  if (!Array.isArray(value) || !value.every((v) => typeof v === 'string')) {
    throw new Error(`Front-matter field "${field}" must be a list of strings.`);
  }
  return value;
}

/**
 * A present-but-wrong-type value is a mistake in the source note (e.g. an
 * unquoted date/number), not something to silently drop. Only `undefined`
 * passes through as "not provided".
 */
function coerceOptionalString(value: unknown, field: string): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'string') return value;
  if (value instanceof Date) {
    throw new Error(
      `Front-matter field "${field}" was parsed as a date — wrap the value in quotes in the HackMD note.`,
    );
  }
  throw new Error(`Front-matter field "${field}" must be a string.`);
}

/** Accepts real YAML booleans plus the YAML 1.1 spellings (yes/no/on/off) js-yaml v4 now parses as strings. */
function coerceOptionalBoolean(value: unknown, field: string): boolean | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['yes', 'true', 'on'].includes(normalized)) return true;
    if (['no', 'false', 'off'].includes(normalized)) return false;
  }
  throw new Error(`Front-matter field "${field}" must be a boolean (true/false, yes/no, on/off).`);
}

/** Accepts an already-formatted date string, or a Date (from an unquoted YAML timestamp) reformatted to Taipei time. */
function coerceOptionalDateString(value: unknown, field: string): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'string') return value;
  if (value instanceof Date) return formatTaipeiDate(value);
  throw new Error(
    `Front-matter field "${field}" must be a date or a "YYYY-MM-DD HH:mm:ss" string.`,
  );
}

/** Validates and reshapes HackMD (Hexo-style) front-matter into this site's schema, dropping `tags`. */
export function toPostFrontmatter(raw: HackmdFrontmatter): PostFrontmatter {
  if (raw.title instanceof Date) {
    throw new Error(
      'Front-matter field "title" was parsed as a date — wrap the value in quotes in the HackMD note.',
    );
  }
  if (typeof raw.title !== 'string' || raw.title.trim() === '') {
    throw new Error('Front-matter field "title" is required.');
  }
  const authors = asStringArray(raw.authors, 'authors');
  if (authors.length === 0) {
    throw new Error('Front-matter field "authors" is required and must be non-empty.');
  }
  const known = knownAuthorSlugs();
  const unknown = authors.filter((a) => !known.has(a));
  if (unknown.length > 0) {
    throw new Error(
      `Unknown author slug(s): ${unknown.join(', ')}. Must match a filename in src/content/authors/.`,
    );
  }

  for (const key of Object.keys(raw)) {
    if (!KNOWN_FRONTMATTER_KEYS.has(key)) {
      console.warn(`[create-post] Warning: ignoring unrecognized front-matter field "${key}".`);
    }
  }

  return {
    title: raw.title,
    date: formatTaipeiDate(new Date()),
    categories: asStringArray(raw.categories, 'categories'),
    authors,
    cover: coerceOptionalString(raw.cover, 'cover'),
    thumbnail: coerceOptionalString(raw.thumbnail, 'thumbnail'),
    excerpt: coerceOptionalString(raw.excerpt, 'excerpt'),
    comments: coerceOptionalBoolean(raw.comments, 'comments'),
    preview: coerceOptionalBoolean(raw.preview, 'preview'),
    updated: coerceOptionalDateString(raw.updated, 'updated'),
  };
}

async function fetchNote(noteId: string, token: string): Promise<string> {
  const res = await fetch(`https://api.hackmd.io/v1/notes/${noteId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`HackMD API error ${res.status}: ${res.statusText}${body ? ` — ${body}` : ''}`);
  }
  const { content } = (await res.json()) as { content?: unknown };
  if (typeof content !== 'string') {
    throw new Error('Unexpected HackMD API response: missing content field.');
  }
  return content;
}

async function main(): Promise<void> {
  const [, , hackmdUrl, filename] = process.argv;
  if (!hackmdUrl || !filename) {
    console.error('Usage: npm run post -- <hackmd-url> <filename-without-extension>');
    process.exitCode = 1;
    return;
  }

  const token = process.env.HACKMD_API_TOKEN;
  if (!token) {
    console.error('[create-post] Error: HACKMD_API_TOKEN is not set.');
    process.exitCode = 1;
    return;
  }

  if (!isValidPostFilename(filename)) {
    console.error(
      `[create-post] Error: invalid filename "${filename}". Use only letters, numbers, ".", "_", "-".`,
    );
    process.exitCode = 1;
    return;
  }
  const outputPath = path.join(POSTS_DIR, `${filename}.md`);

  const noteId = extractNoteId(hackmdUrl);
  const cleaned = cleanMarkdown(await fetchNote(noteId, token));
  const { fmBody, body } = splitFrontMatter(cleaned);
  const parsedFm = yaml.load(fmBody);
  if (typeof parsedFm !== 'object' || parsedFm === null) {
    throw new Error('Front-matter block is empty or not a YAML mapping.');
  }
  const frontmatter = toPostFrontmatter(parsedFm as HackmdFrontmatter);

  const stringifiedFm = yaml.dump(frontmatter, { quotingType: '"', forceQuotes: true });
  const output = `---\n${stringifiedFm}---\n${body}`;

  const existed = fs.existsSync(outputPath);
  fs.writeFileSync(outputPath, output);
  console.log(`[create-post] Post ${existed ? 'overwritten' : 'created'}: ${outputPath}`);
}

const isMain = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main().catch((err: unknown) => {
    console.error('[create-post] fatal:', err instanceof Error ? err.stack : err);
    process.exitCode = 1;
  });
}

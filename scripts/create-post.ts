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

/** Current time in Asia/Taipei as "YYYY-MM-DD HH:mm:ss", matching the rest of the site. */
function formatTaipeiDate(): string {
  return new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Taipei' });
}

export function splitFrontMatter(content: string): { fmBody: string; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error('No front-matter block found in note content.');
  return { fmBody: match[1], body: match[2] };
}

function knownAuthorSlugs(): Set<string> {
  return new Set(fs.readdirSync(AUTHORS_DIR).map((f) => f.replace(/\.ya?ml$/, '')));
}

function asStringArray(value: unknown, field: string): string[] {
  if (value === undefined) return [];
  if (!Array.isArray(value) || !value.every((v) => typeof v === 'string')) {
    throw new Error(`Front-matter field "${field}" must be a list of strings.`);
  }
  return value;
}

/** Validates and reshapes HackMD (Hexo-style) front-matter into this site's schema, dropping `tags`. */
export function toPostFrontmatter(raw: HackmdFrontmatter): PostFrontmatter {
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

  const frontmatter: PostFrontmatter = {
    title: raw.title,
    date: formatTaipeiDate(),
    categories: asStringArray(raw.categories, 'categories'),
    authors,
  };
  if (typeof raw.cover === 'string') frontmatter.cover = raw.cover;
  if (typeof raw.thumbnail === 'string') frontmatter.thumbnail = raw.thumbnail;
  if (typeof raw.excerpt === 'string') frontmatter.excerpt = raw.excerpt;
  if (typeof raw.comments === 'boolean') frontmatter.comments = raw.comments;
  if (typeof raw.preview === 'boolean') frontmatter.preview = raw.preview;
  if (typeof raw.updated === 'string') frontmatter.updated = raw.updated;
  return frontmatter;
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

  if (!/^[A-Za-z0-9._-]+$/.test(filename)) {
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

  try {
    // 'wx' fails atomically if the file already exists, closing the
    // check-then-write race left open by a separate existsSync check.
    fs.writeFileSync(outputPath, output, { flag: 'wx' });
  } catch (err) {
    if (err instanceof Error && 'code' in err && err.code === 'EEXIST') {
      throw new Error(`${outputPath} already exists.`);
    }
    throw err;
  }
  console.log(`[create-post] Post created: ${outputPath}`);
}

const isMain = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main().catch((err: unknown) => {
    console.error('[create-post] fatal:', err instanceof Error ? err.stack : err);
    process.exitCode = 1;
  });
}

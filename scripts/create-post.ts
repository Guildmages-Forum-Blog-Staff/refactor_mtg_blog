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
}

interface PostFrontmatter {
  title: string;
  date: string;
  categories: string[];
  authors: string[];
  cover?: string;
  thumbnail?: string;
  excerpt?: string;
}

/** Extracts the HackMD note ID from a URL (`/NoteID` or `/@user/NoteID`). */
function extractNoteId(url: string): string {
  const match = url.match(/https:\/\/hackmd\.io\/(?:@[^/]+\/)?([A-Za-z0-9_-]+)/);
  if (!match) throw new Error(`Cannot extract note ID from URL: ${url}`);
  return match[1];
}

/** Strips leading junk before front-matter and any HTML comments from the raw note. */
function cleanMarkdown(content: string): string {
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

function splitFrontMatter(content: string): { fmBody: string; body: string } {
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
function toPostFrontmatter(raw: HackmdFrontmatter): PostFrontmatter {
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

  const frontmatter: PostFrontmatter = {
    title: raw.title,
    date: formatTaipeiDate(),
    categories: asStringArray(raw.categories, 'categories'),
    authors,
  };
  if (typeof raw.cover === 'string') frontmatter.cover = raw.cover;
  if (typeof raw.thumbnail === 'string') frontmatter.thumbnail = raw.thumbnail;
  if (typeof raw.excerpt === 'string') frontmatter.excerpt = raw.excerpt;
  return frontmatter;
}

async function fetchNote(noteId: string, token: string): Promise<string> {
  const res = await fetch(`https://api.hackmd.io/v1/notes/${noteId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error(`HackMD API error ${res.status}: ${res.statusText}`);
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

  const outputPath = path.join(POSTS_DIR, `${filename}.md`);
  if (fs.existsSync(outputPath)) {
    console.error(`[create-post] Error: ${outputPath} already exists.`);
    process.exitCode = 1;
    return;
  }

  const noteId = extractNoteId(hackmdUrl);
  const cleaned = cleanMarkdown(await fetchNote(noteId, token));
  const { fmBody, body } = splitFrontMatter(cleaned);
  const frontmatter = toPostFrontmatter(yaml.load(fmBody) as HackmdFrontmatter);

  const stringifiedFm = yaml.dump(frontmatter, { quotingType: '"', forceQuotes: true });
  const output = `---\n${stringifiedFm}---\n${body}`;

  fs.writeFileSync(outputPath, output);
  console.log(`[create-post] Post created: ${outputPath}`);
}

const isMain = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main().catch((err: unknown) => {
    console.error('[create-post] fatal:', err instanceof Error ? err.stack : err);
    process.exitCode = 1;
  });
}

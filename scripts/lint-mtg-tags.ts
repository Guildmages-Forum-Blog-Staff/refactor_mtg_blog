#!/usr/bin/env tsx
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { endsInOpenQuote, findMalformedKvKey } from '../src/plugins/mtg-tag-shared';

export type LintRule = 'unterminated-tag' | 'unbalanced-quote' | 'malformed-kv';

export interface Finding {
  file: string;
  line: number;
  rule: LintRule;
  message: string;
  snippet: string;
}

// All four tag families share the `{% name ... %}` open shape.
const OPEN_RE = /\{%\s*(mtgcard|mtglink|mtgpick|mtgmerge)\b/g;
// Well-formed, closed tag (non-greedy to the first %}). Mirrors the render
// plugin's TAG_RE in src/plugins/remark-mtg-tags.ts. mtgmerge bodies are JSON
// (validated elsewhere) so the quote rule only applies to the name tags.
const TAG_RE = /\{%\s*(mtgcard|mtglink|mtgpick)\s+([\s\S]*?)\s*%\}/g;

function lineOf(text: string, index: number): number {
  return text.slice(0, index).split('\n').length;
}

function snippetAt(text: string, index: number): string {
  const start = text.lastIndexOf('\n', index) + 1;
  let end = text.indexOf('\n', index);
  if (end === -1) end = text.length;
  return text.slice(start, end).trim().slice(0, 120);
}

export function lintText(text: string, file: string): Finding[] {
  const findings: Finding[] = [];

  // Rule 1: every tag open must have its own %} before the next open or EOF.
  const opens: number[] = [];
  OPEN_RE.lastIndex = 0;
  let o: RegExpExecArray | null;
  while ((o = OPEN_RE.exec(text)) !== null) opens.push(o.index);
  for (let i = 0; i < opens.length; i++) {
    const start = opens[i];
    const boundary = i + 1 < opens.length ? opens[i + 1] : text.length;
    if (!text.slice(start, boundary).includes('%}')) {
      findings.push({
        file,
        line: lineOf(text, start),
        rule: 'unterminated-tag',
        message: 'mtg tag is not closed with %} before the next tag/EOF',
        snippet: snippetAt(text, start),
      });
    }
  }

  // Rules 2 & 3 both inspect well-formed (closed) name tags' bodies.
  TAG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = TAG_RE.exec(text)) !== null) {
    // Rule 2: a body that ends with an open quote (missing closing ").
    if (endsInOpenQuote(m[2])) {
      findings.push({
        file,
        line: lineOf(text, m.index),
        rule: 'unbalanced-quote',
        message: 'mtg tag body has an unterminated quote (likely a missing closing ")',
        snippet: snippetAt(text, m.index),
      });
    }
    // Rule 3: a KV key glued to a quote with no `=` (e.g. alt"x"). Quotes stay
    // balanced so Rule 2 can't see it, yet the renderer silently drops the arg.
    const kvKey = findMalformedKvKey(m[2]);
    if (kvKey) {
      findings.push({
        file,
        line: lineOf(text, m.index),
        rule: 'malformed-kv',
        message: `mtg tag arg "${kvKey}" is missing '=' (write ${kvKey}="...")`,
        snippet: snippetAt(text, m.index),
      });
    }
  }

  return findings.sort((a, b) => a.line - b.line);
}

// This project is ESM ("type": "module"); CommonJS `__dirname` / `require.main`
// are unavailable, so derive both from import.meta — same idiom as
// scripts/build-card-cache.ts.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, '..', 'src', 'content', 'posts');

export function lintFiles(files: string[]): Finding[] {
  const out: Finding[] = [];
  for (const f of files) {
    if (!/\.(md|mdx)$/.test(f)) continue;
    // lefthook's {staged_files} can include staged deletions, whose paths are
    // already gone from disk — skip rather than crash the commit with ENOENT.
    if (!existsSync(f)) continue;
    out.push(...lintText(readFileSync(f, 'utf8'), f));
  }
  return out;
}

function walkPosts(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkPosts(full));
    else if (e.isFile() && /\.(md|mdx)$/.test(e.name)) out.push(full);
  }
  return out;
}

// CLI: lint the file args, or every post when none are given. The
// import.meta.url check is true only when run directly via tsx (not imported).
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('-'));
  const files = args.length ? args : walkPosts(POSTS_DIR);
  const findings = lintFiles(files);
  if (findings.length) {
    for (const f of findings) {
      console.error(`${f.file}:${f.line}  [${f.rule}] ${f.message}\n    ${f.snippet}`);
    }
    console.error(`\n[lint-mtg-tags] ${findings.length} problem(s) found.`);
    process.exit(1);
  }
  console.log('[lint-mtg-tags] no problems found.');
}

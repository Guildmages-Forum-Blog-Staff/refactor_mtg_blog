#!/usr/bin/env tsx
import { endsInOpenQuote } from '../src/plugins/mtg-tag-shared';

export type LintRule = 'unterminated-tag' | 'unbalanced-quote';

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

  // Rule 2: a well-formed name tag whose body ends with an open quote.
  TAG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = TAG_RE.exec(text)) !== null) {
    if (endsInOpenQuote(m[2])) {
      findings.push({
        file,
        line: lineOf(text, m.index),
        rule: 'unbalanced-quote',
        message: 'mtg tag body has an unterminated quote (likely a missing closing ")',
        snippet: snippetAt(text, m.index),
      });
    }
  }

  return findings.sort((a, b) => a.line - b.line);
}

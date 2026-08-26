#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { scanTextForRefs, type PostRef } from './build-card-cache';
import { lookupCard } from '../src/plugins/mtg-card-cache';

export interface Finding {
  file: string;
  line: number;
  label: string;
  reason: 'missing' | 'not_found';
}

function labelFor(ref: PostRef): string {
  if (ref.kind === 'pick') {
    return `${ref.args.edition.toUpperCase()} #${ref.args.collectionNumber}`;
  }
  return `"${ref.args.name}"${ref.args.edition ? ` [${ref.args.edition}]` : ''}`;
}

function lineFromSource(source: string): number {
  const n = Number(source.slice(source.lastIndexOf(':') + 1));
  return Number.isFinite(n) ? n : 0;
}

/** Resolve every mtg tag reference in `file` against the on-disk card cache. */
export function checkFile(file: string): Finding[] {
  const text = readFileSync(file, 'utf8');
  const refs = new Map<string, PostRef>();
  scanTextForRefs(text, file, refs);

  const findings: Finding[] = [];
  for (const [key, ref] of refs) {
    const result = lookupCard(key);
    if (result.type === 'Err') {
      for (const source of ref.sources) {
        findings.push({
          file,
          line: lineFromSource(source),
          label: labelFor(ref),
          reason: result.error,
        });
      }
    }
  }
  return findings.sort((a, b) => a.line - b.line);
}

const isMain = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const files = process.argv.slice(2).filter((a) => !a.startsWith('-'));
  if (files.length === 0) {
    console.error('Usage: npm run check:tags -- <file...>');
    process.exit(1);
  }
  const findings = files.filter(existsSync).flatMap(checkFile);
  if (findings.length) {
    for (const f of findings) {
      const hint =
        f.reason === 'missing' ? 'cache miss — run npm run cache:update' : 'not found on Scryfall';
      console.error(`${f.file}:${f.line}  card not resolved: ${f.label} (${hint})`);
    }
    console.error(`\n[check-post-tags] ${findings.length} unresolved reference(s).`);
    process.exit(1);
  }
  console.log('[check-post-tags] all card references resolved.');
}

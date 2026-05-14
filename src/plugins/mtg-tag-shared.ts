// Trim leading/trailing whitespace including ideographic space (U+3000).
export const TRIM_RE = /^[\s　]+|[\s　]+$/g;

// Curly (typographic) double-quote code points — treated as quote delimiters.
// Astro's remark-smartypants converts straight `"` to these before our plugin runs.
export const OPEN_DOUBLE = String.fromCharCode(0x201c);
export const CLOSE_DOUBLE = String.fromCharCode(0x201d);

/**
 * Whitespace-split tokenizer with double-quote support.
 * Both straight `"` and curly U+201C/U+201D are treated as quote delimiters
 * (Astro's smartypants converts straight quotes to curly before this plugin
 * runs). Quote chars are stripped; content inside — including curly
 * apostrophes (U+2019) — passes through verbatim so that lookups can match
 * either form of apostrophe in the cache (see renderSearch fallback in
 * remark-mtg-tags.ts).
 *
 * Backslash-escape: `\X` becomes literal X. Lets authors write `Black\ Lotus`
 * to embed a space without wrapping the whole name in quotes. Also `\"`
 * keeps a literal double-quote inside a bare token without toggling inQuote.
 */
export function tokenize(argString: string): string[] {
  const tokens: string[] = [];
  let current = '';
  let inQuote = false;
  const STRAIGHT_DOUBLE = String.fromCharCode(0x22);
  for (let i = 0; i < argString.length; i++) {
    const ch = argString[i];
    if (ch === '\\' && i + 1 < argString.length) {
      current += argString[i + 1];
      i++;
      continue;
    }
    // Adjacent `""` (straight only, U+0022 pair) restores authors' `\"` intent
    // after Astro's smartypants drops the backslash: emit one literal `"` plus
    // one quote-toggle. Direction depends on inQuote — open+literal when
    // outside, literal+close when inside.
    if (ch === STRAIGHT_DOUBLE && argString[i + 1] === STRAIGHT_DOUBLE) {
      if (inQuote) {
        current += STRAIGHT_DOUBLE;
        inQuote = false;
      } else {
        inQuote = true;
        current += STRAIGHT_DOUBLE;
      }
      i++;
      continue;
    }
    if (ch === STRAIGHT_DOUBLE || ch === OPEN_DOUBLE || ch === CLOSE_DOUBLE) {
      inQuote = !inQuote;
      continue;
    }
    if (!inQuote && /\s/.test(ch)) {
      if (current !== '') {
        tokens.push(current);
        current = '';
      }
      continue;
    }
    current += ch;
  }
  if (current !== '') tokens.push(current);
  return tokens;
}

// Set codes are 2-6 alphanumerics. Supports 4-letter promo sets (pmh1, pmoc).
export const SET_CODE_PATTERN = /^[a-z0-9]{2,6}$/i;

export interface SearchArgs {
  name: string;
  edition: string;
  language: string;
  alt: string | null;
  tooltip: boolean;
}

export interface PickArgs {
  edition: string;
  collectionNumber: string;
  language: string;
  alt: string | null;
  tooltip: boolean;
}

type CacheKind = 'search' | 'pick';

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function htmlEscape(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
}

function normalizeArg(s: string): string {
  return String(s).replace(TRIM_RE, '');
}

// For DFC fallback retry only. Collapses any spacing around `//` to ` // `.
export function normalizeForRetry(name: string): string {
  return name.replace(/\s*\/\/\s*/g, ' // ');
}

function applyKv(args: Record<string, unknown>, entry: string): void {
  const eq = entry.indexOf('=');
  if (eq <= 0) return;
  const key = entry.slice(0, eq);
  const raw = entry.slice(eq + 1);
  const lower = raw.toLowerCase();
  args[key] = lower === 'true' ? true : lower === 'false' ? false : raw;
}

export function parseSearchTagArgs(tokens: string[]): SearchArgs {
  const args: SearchArgs = {
    name: '',
    edition: '',
    language: 'en',
    alt: null,
    tooltip: false,
  };
  tokens.forEach((raw, i) => {
    const entry = normalizeArg(raw);
    if (entry === '') return;
    if (i === 0) {
      args.name = entry;
      return;
    }
    if (i === 1 && SET_CODE_PATTERN.test(entry)) {
      args.edition = entry.toLowerCase();
      return;
    }
    applyKv(args as unknown as Record<string, unknown>, entry);
  });
  return args;
}

export function parsePickArgs(tokens: string[]): PickArgs {
  const args: PickArgs = {
    edition: '',
    collectionNumber: '',
    language: 'en',
    alt: null,
    tooltip: false,
  };
  tokens.forEach((raw, i) => {
    const entry = normalizeArg(raw);
    if (entry === '') return;
    if (i === 0) {
      args.edition = entry.toLowerCase();
      return;
    }
    if (i === 1) {
      args.collectionNumber = entry;
      return;
    }
    applyKv(args as unknown as Record<string, unknown>, entry);
  });
  return args;
}

export function cacheKey(
  kind: CacheKind,
  args: { name?: string; edition?: string; collectionNumber?: string; language?: string },
): string {
  const lang = args.language ?? 'en';
  if (kind === 'search') {
    return ['search', args.name ?? '', args.edition ?? '', lang].join('|');
  }
  if (kind === 'pick') {
    return ['pick', args.edition ?? '', args.collectionNumber ?? '', lang].join('|');
  }
  throw new Error(`Unknown cache kind: ${kind}`);
}

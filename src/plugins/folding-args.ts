/**
 * Argument lexer and interpreter for `{% folding ... %}` tags.
 *
 * Runs on the raw post text (before Markdown parsing), so Markdown escapes
 * and smartypants never reach it. Only ASCII `"` is a quote, and it only
 * opens at the start of a parameter (see QUOTE_OPENERS); everything inside a
 * quote is literal, including `::`, `,`, `=`, whitespace and `%}`. A
 * full-width space (U+3000) is content: it is trimmed only at the two ends of
 * the whole argument string, never at segment ends or between color words.
 */

export const FOLDING_COLORS = [
  'yellow',
  'blue',
  'green',
  'red',
  'orange',
  'pink',
  'cyan',
  'white',
  'black',
  'gray',
  'purple',
] as const;

export type FoldingColor = (typeof FOLDING_COLORS)[number] | 'default';

/** A run of parameter text that came from either inside or outside quotes. */
export interface Fragment {
  text: string;
  quoted: boolean;
}

/** One separator-delimited parameter. */
export type Param = Fragment[];

export type LexResult =
  | { type: 'Ok'; params: Param[]; end: number }
  | { type: 'Err'; error: 'unterminated-quote' | 'unterminated-tag' };

export interface FoldingArgs {
  color: FoldingColor;
  title: string;
  open: boolean;
  warnings: string[];
}

const SEPARATORS = new Set([' ', '\t', '\n', '\r', ' ']);
const EDGE_SPACE = new Set([...SEPARATORS, '　']);
const QUOTE_OPENERS = new Set([...'()[]{}%*-+~/#,:|.<>=!']);
const QUOTED_ESCAPES: Record<string, string> = { n: '\n', t: '\t', r: '\r' };
const NAMED_KEYS = new Set(['title', 'class', 'classes', 'style', 'open']);
const COLOR_KEYS = ['class', 'classes', 'style'];
const TRUTHY_OPEN = new Set(['1', 'true', 'yes', 'on']);

/**
 * Lex the parameters of an opening tag, starting right after the tag name,
 * up to and including the first `%}` outside quotes. `end` is the index just
 * past that `%}`.
 */
export function lexFoldingArgs(src: string, start: number): LexResult {
  const params: Param[] = [];
  let param: Param = [];
  let unquoted = '';

  const flush = () => {
    if (unquoted) param.push({ text: unquoted, quoted: false });
    unquoted = '';
  };
  const endParam = () => {
    flush();
    if (param.length > 0) params.push(param);
    param = [];
  };

  let i = start;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '%' && src[i + 1] === '}') {
      // `-%}`: drop the single `-` glued to the tag end.
      if (unquoted.endsWith('-')) unquoted = unquoted.slice(0, -1);
      endParam();
      return { type: 'Ok', params: trimEdges(params), end: i + 2 };
    }
    if (SEPARATORS.has(ch)) {
      endParam();
      i++;
      continue;
    }
    const atParamStart = param.length === 0 && unquoted === '';
    if (ch === '"' && (atParamStart || QUOTE_OPENERS.has(src[i - 1]))) {
      let text = '';
      let j = i + 1;
      let closed = false;
      while (j < src.length) {
        const c = src[j];
        if (c === '\\' && j + 1 < src.length) {
          const next = src[j + 1];
          text += QUOTED_ESCAPES[next] ?? next;
          j += 2;
          continue;
        }
        if (c === '"') {
          closed = true;
          break;
        }
        text += c;
        j++;
      }
      if (!closed) return { type: 'Err', error: 'unterminated-quote' };
      flush();
      param.push({ text, quoted: true });
      i = j + 1;
      continue;
    }
    unquoted += ch;
    i++;
  }
  return { type: 'Err', error: 'unterminated-tag' };
}

/** Interpret lexed parameters as either named-mode or legacy-mode arguments. */
export function parseFoldingArgs(params: Param[]): FoldingArgs {
  const warnings: string[] = [];
  const named = params.map(asNamed);
  let colorWords: string[];
  let title: string;
  let open = false;
  let emptyTitleReported = false;

  if (named.some((n) => n !== null && NAMED_KEYS.has(n.key))) {
    const values = new Map<string, string>();
    const positional: string[] = [];
    params.forEach((param, i) => {
      const entry = named[i];
      if (!entry) {
        positional.push(joinFragments(param));
        return;
      }
      if (!NAMED_KEYS.has(entry.key)) {
        warnings.push(`unknown key ignored: ${entry.key}`);
        return;
      }
      if (values.has(entry.key)) warnings.push(`duplicate key, last one wins: ${entry.key}`);
      values.set(entry.key, entry.value);
    });
    const titleValue = trimSeparators(values.get('title') ?? '');
    if (titleValue) {
      title = titleValue;
      if (positional.length > 0) {
        warnings.push(
          `positional arguments ignored because title= is set: ${positional.join(' ')}`,
        );
      }
    } else {
      title = trimSeparators(positional.join(' '));
    }
    colorWords = COLOR_KEYS.flatMap((key) => splitWords(values.get(key) ?? ''));
    open = TRUTHY_OPEN.has(trimSeparators(values.get('open') ?? '').toLowerCase());
  } else {
    const legacy = parseLegacy(params, warnings);
    colorWords = legacy.colorWords;
    title = legacy.title;
    emptyTitleReported = legacy.missingSeparator;
  }

  if (title === '' && !emptyTitleReported) warnings.push('empty title');
  return { color: resolveColor(colorWords, warnings), title, open, warnings };
}

function parseLegacy(
  params: Param[],
  warnings: string[],
): { colorWords: string[]; title: string; missingSeparator: boolean } {
  const fragments: Fragment[] = [];
  params.forEach((param, i) => {
    if (i > 0) fragments.push({ text: ' ', quoted: false });
    fragments.push(...param);
  });
  const separator = fragments.some((f) => !f.quoted && f.text.includes('::')) ? '::' : ',';

  const segments = [''];
  for (const fragment of fragments) {
    if (fragment.quoted) {
      segments[segments.length - 1] += fragment.text;
      continue;
    }
    const parts = fragment.text.split(separator);
    segments[segments.length - 1] += parts[0];
    segments.push(...parts.slice(1));
  }

  if (segments.length === 1) {
    warnings.push('missing separator ("::" or ","); title is empty');
    return { colorWords: splitWords(segments[0]), title: '', missingSeparator: true };
  }
  if (segments.length > 2) {
    warnings.push(
      `extra segments discarded: ${segments.slice(2).map(trimSeparators).join(separator)}`,
    );
  }
  return {
    colorWords: splitWords(segments[0]),
    title: trimSeparators(segments[1]),
    missingSeparator: false,
  };
}

function resolveColor(words: string[], warnings: string[]): FoldingColor {
  const palette: readonly string[] = FOLDING_COLORS;
  const known = new Set<string>();
  let best = -1;
  for (const word of words) {
    const index = palette.indexOf(word);
    if (index === -1) {
      warnings.push(`unknown color: ${word}`);
      continue;
    }
    known.add(word);
    best = Math.max(best, index);
  }
  if (best === -1) return 'default';
  const color = FOLDING_COLORS[best];
  if (known.size > 1) warnings.push(`multiple colors (${[...known].join(', ')}); using ${color}`);
  return color;
}

function asNamed(param: Param): { key: string; value: string } | null {
  const first = param[0];
  if (!first || first.quoted) return null;
  const match = /^([A-Za-z_][A-Za-z0-9_]*)=/.exec(first.text);
  if (!match) return null;
  const rest = [{ text: first.text.slice(match[0].length), quoted: false }, ...param.slice(1)];
  return { key: match[1], value: joinFragments(rest) };
}

function joinFragments(fragments: Fragment[]): string {
  return fragments.map((f) => f.text).join('');
}

function splitWords(value: string): string[] {
  return value.split(/[ \t\n\r ]+/).filter(Boolean);
}

function trimSeparators(value: string): string {
  let start = 0;
  let end = value.length;
  while (start < end && SEPARATORS.has(value[start])) start++;
  while (end > start && SEPARATORS.has(value[end - 1])) end--;
  return value.slice(start, end);
}

/** Strip U+3000 (and any other edge space) from the unquoted ends of the whole parameter list. */
function trimEdges(params: Param[]): Param[] {
  while (params.length > 0) {
    const first = params[0][0];
    if (first.quoted) break;
    let k = 0;
    while (k < first.text.length && EDGE_SPACE.has(first.text[k])) k++;
    first.text = first.text.slice(k);
    if (first.text) break;
    params[0].shift();
    if (params[0].length === 0) params.shift();
  }
  while (params.length > 0) {
    const lastParam = params[params.length - 1];
    const last = lastParam[lastParam.length - 1];
    if (last.quoted) break;
    let k = last.text.length;
    while (k > 0 && EDGE_SPACE.has(last.text[k - 1])) k--;
    last.text = last.text.slice(0, k);
    if (last.text) break;
    lastParam.pop();
    if (lastParam.length === 0) params.pop();
  }
  return params;
}

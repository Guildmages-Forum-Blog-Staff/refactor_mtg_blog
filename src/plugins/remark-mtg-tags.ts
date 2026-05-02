import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Parent } from 'mdast';
import { fetchImageByName, fetchImageByNumber } from './scryfall-build-fetch';

interface MtgTagArgs {
  name?: string;
  edition: string;
  language: string;
  tooltip: boolean;
  alt: string | null;
  collectionNumber?: string;
}

const getTagPattern = () => /\{%\s*(mtglink|mtgcard|mtgpick)\s+(.*?)\s*%\}/g;

// U+201C/U+201D = curly double-quotes; U+2018/U+2019 = curly single-quotes
const CURLY_DOUBLE = new RegExp(
  '[' + String.fromCharCode(0x201c) + String.fromCharCode(0x201d) + ']',
  'g',
);
const CURLY_SINGLE = new RegExp(
  '[' + String.fromCharCode(0x2018) + String.fromCharCode(0x2019) + ']',
  'g',
);
// ASCII 34 = double-quote, ASCII 39 = single-quote
const ASCII_DOUBLE = String.fromCharCode(34);
const ASCII_SINGLE = String.fromCharCode(39);

function tokenize(input: string): string[] {
  const normalized = input.replace(CURLY_DOUBLE, ASCII_DOUBLE).replace(CURLY_SINGLE, ASCII_SINGLE);
  const tokens: string[] = [];
  const regex = /"([^"]*)"|'([^']*)'|(\S+)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(normalized)) !== null) {
    tokens.push(match[1] ?? match[2] ?? match[3]);
  }
  return tokens;
}

function parseCardArgs(tokens: string[]): MtgTagArgs {
  const opts: Record<string, string> = {};
  const nameTokens: string[] = [];

  for (const token of tokens) {
    const sep =
      token.indexOf(':') > 0
        ? token.indexOf(':')
        : token.indexOf('=') > 0
          ? token.indexOf('=')
          : -1;
    if (sep > 0) {
      opts[token.slice(0, sep)] = token.slice(sep + 1);
    } else {
      nameTokens.push(token);
    }
  }

  // Last name token is edition if short alphanumeric and not the only name token
  let edition = '';
  const last = nameTokens[nameTokens.length - 1];
  if (nameTokens.length > 1 && last && /^[a-z0-9]{3}$/i.test(last)) {
    edition = last.toLowerCase();
    nameTokens.pop();
  }

  return {
    name: nameTokens.join(' '),
    edition: opts['edition'] ?? edition,
    language: opts['language'] ?? 'en',
    tooltip: opts['tooltip'] === 'true',
    alt: opts['alt'] ?? null,
  };
}

function parsePickArgs(tokens: string[]): MtgTagArgs {
  const opts: Record<string, string> = {};
  for (const token of tokens.slice(2)) {
    const sep =
      token.indexOf(':') > 0
        ? token.indexOf(':')
        : token.indexOf('=') > 0
          ? token.indexOf('=')
          : -1;
    if (sep > 0) opts[token.slice(0, sep)] = token.slice(sep + 1);
  }
  return {
    edition: tokens[0]?.toLowerCase() ?? '',
    collectionNumber: tokens[1] ?? '',
    language: opts['language'] ?? 'en',
    tooltip: opts['tooltip'] === 'true',
    alt: opts['alt'] ?? null,
  };
}

async function renderMtgLink(name: string, args: MtgTagArgs): Promise<string> {
  const display = args.alt ?? name;
  const imgUrl = await fetchImageByName(name, args.edition, args.language);
  const attrs = [
    `class="mtg-link scryfall-card"`,
    imgUrl ? `data-card-image="${imgUrl}"` : '',
    `data-card-name="${name}"`,
    args.edition ? `data-edition="${args.edition}"` : '',
    `data-language="${args.language}"`,
  ]
    .filter(Boolean)
    .join(' ');
  return `<a ${attrs}>${display}</a>`;
}

async function renderMtgCard(name: string, args: MtgTagArgs): Promise<string> {
  if (args.tooltip) return renderMtgLink(name, args);
  const imgUrl = await fetchImageByName(name, args.edition, args.language);
  if (!imgUrl) {
    // fallback: render as link without image
    return `<a class="mtg-link scryfall-card" data-card-name="${name}">${name}</a>`;
  }
  return `<img src="${imgUrl}" class="mtgcard rounded-lg my-4 max-w-xs" loading="lazy" alt="${name}" />`;
}

async function renderMtgPick(edition: string, number: string, args: MtgTagArgs): Promise<string> {
  const imgUrl = await fetchImageByNumber(edition, number, args.language);
  if (args.tooltip) {
    const display = args.alt ?? '';
    return `<a class="scryfall-card" ${imgUrl ? `data-card-image="${imgUrl}"` : ''} data-edition="${edition}" data-number="${number}">${display}</a>`;
  }
  if (!imgUrl)
    return `<span class="mtg-card-pick" data-edition="${edition}" data-number="${number}"></span>`;
  return `<img src="${imgUrl}" class="mtgcard rounded-lg my-4 max-w-xs" loading="lazy" alt="${edition} ${number}" />`;
}

async function replaceTagsInText(text: string): Promise<string> {
  const pattern = getTagPattern();
  const parts: Array<string | Promise<string>> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const [, tag, argsStr] = match;
    const tokens = tokenize(argsStr);
    if (tag === 'mtgpick') {
      const args = parsePickArgs(tokens);
      parts.push(renderMtgPick(args.edition ?? '', args.collectionNumber ?? '', args));
    } else {
      const args = parseCardArgs(tokens);
      if (tag === 'mtglink') parts.push(renderMtgLink(args.name ?? '', args));
      else parts.push(renderMtgCard(args.name ?? '', args));
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return (await Promise.all(parts)).join('');
}

export function remarkMtgTags() {
  return async (tree: Root) => {
    type PendingReplacement = {
      parent: Parent;
      index: number;
      textFn: () => Promise<string>;
    };
    const pending: PendingReplacement[] = [];

    // Collect paragraph-level solo tags
    visit(
      tree,
      'paragraph',
      (node: Paragraph, index: number | undefined, parent: Parent | undefined) => {
        if (index === undefined || !parent) return;
        if (node.children.length !== 1 || node.children[0].type !== 'text') return;
        const text = (node.children[0] as Text).value.trim();
        if (!getTagPattern().test(text)) return;
        pending.push({ parent, index, textFn: () => replaceTagsInText(text) });
      },
    );

    // Collect inline text tags
    visit(tree, 'text', (node: Text, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      if (!getTagPattern().test(node.value)) return;
      const value = node.value;
      pending.push({ parent, index, textFn: () => replaceTagsInText(value) });
    });

    // Resolve all async replacements sequentially
    for (const { parent, index, textFn } of pending) {
      parent.children[index] = { type: 'html', value: await textFn() };
    }
  };
}

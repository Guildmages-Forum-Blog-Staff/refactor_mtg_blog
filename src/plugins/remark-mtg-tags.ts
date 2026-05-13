import { visit } from 'unist-util-visit';
import type { Root, Text, Parent } from 'mdast';
import {
  parseSearchTagArgs,
  parsePickArgs,
  cacheKey,
  htmlEscape,
  tokenize,
  type SearchArgs,
  type PickArgs,
} from './mtg-tag-shared';
import { lookupCard, type Card } from './mtg-card-cache';

const TAG_RE = () => /\{%\s*(mtgcard|mtglink|mtgpick)\s+([\s\S]*?)\s*%\}/g;

// U+2019 appears as a typographic apostrophe in card names when authors type
// with a smart-quotes editor (e.g. Tormod's Crypt). The prebuild script reads
// raw source files and stores the name verbatim, so some cache keys have U+2019
// while others (straight-apostrophe sources) have U+0027.  renderSearch uses
// a fallback lookup to handle both variants.
const CURLY_APOSTROPHE = String.fromCharCode(0x2019);
const CURLY_APOSTROPHE_RE = new RegExp(CURLY_APOSTROPHE, 'g');

const ROTATED_LAYOUTS = new Set(['split', 'planar']);
const isRotated = (card: Card) => ROTATED_LAYOUTS.has(card.layout);
const frontImage = (card: Card): string | null => card.card_faces?.[0]?.image ?? null;

function renderError(label: string, reason: 'missing' | 'not_found'): string {
  const hint =
    reason === 'not_found'
      ? '（請確認拼字或 set code）'
      : '（cache 缺項，執行 npm run cache:update）';
  return `<span class="mtgcard-error">找不到卡片「${htmlEscape(label)}」${htmlEscape(hint)}</span>`;
}

function renderImage(card: Card, alt: string): string {
  const img = frontImage(card);
  if (!img) return `<a href="${htmlEscape(card.scryfall_uri)}">${htmlEscape(card.name)}</a>`;
  if (isRotated(card)) {
    return `<span class="mtgcard-frame mtgcard-frame--rotated"><img class="mtgcard mtgcard--rotated rounded-lg" loading="lazy" src="${htmlEscape(img)}" alt="${htmlEscape(alt)}" /></span>`;
  }
  return `<img class="mtgcard rounded-lg" loading="lazy" src="${htmlEscape(img)}" alt="${htmlEscape(alt)}" />`;
}

function renderTooltip(card: Card, display: string): string {
  const img = frontImage(card);
  const inner = img
    ? isRotated(card)
      ? `<span class="mtgcard-frame mtgcard-frame--rotated"><img class="mtgcard mtgcard--rotated" src="${htmlEscape(img)}" /></span>`
      : `<img class="mtgcard" src="${htmlEscape(img)}" />`
    : '';
  return `<a class="tooltip" href="${htmlEscape(card.scryfall_uri)}">${htmlEscape(display)}<span>${inner}</span></a>`;
}

function renderSearch(tag: 'mtglink' | 'mtgcard', args: SearchArgs): string {
  if (!args.name) return renderError('(empty)', 'missing');
  const key = cacheKey('search', args);
  let result = lookupCard(key);
  // Apostrophe fallback: source files may contain U+2019 (curly apostrophe) in
  // card names, producing U+2019 cache keys via the prebuild. After smartypants
  // the runtime also sees U+2019 — those match directly. But sources with a
  // straight apostrophe U+0027 produce U+0027 prebuild keys; smartypants
  // converts them to U+2019 at runtime, so we retry with U+0027 on miss.
  if (!result.ok && result.reason === 'missing' && args.name.includes(CURLY_APOSTROPHE)) {
    const straightName = args.name.replace(CURLY_APOSTROPHE_RE, "'");
    const altResult = lookupCard(cacheKey('search', { ...args, name: straightName }));
    if (altResult.ok) result = altResult;
  }
  if (!result.ok) return renderError(args.name, result.reason);
  const isTooltip = tag === 'mtglink' || args.tooltip;
  const display = args.alt ?? result.card.name;
  return isTooltip ? renderTooltip(result.card, display) : renderImage(result.card, display);
}

function renderPick(args: PickArgs): string {
  if (!args.edition || !args.collectionNumber) return renderError('(empty)', 'missing');
  const key = cacheKey('pick', args);
  const result = lookupCard(key);
  const label = `${args.edition.toUpperCase()} #${args.collectionNumber}`;
  if (!result.ok) return renderError(label, result.reason);
  const display = args.alt ?? result.card.name;
  return args.tooltip ? renderTooltip(result.card, display) : renderImage(result.card, display);
}

function replaceTagsInText(text: string): string {
  return text.replace(TAG_RE(), (_full, tag: string, raw: string) => {
    const tokens = tokenize(raw);
    if (tag === 'mtgpick') return renderPick(parsePickArgs(tokens));
    return renderSearch(tag as 'mtglink' | 'mtgcard', parseSearchTagArgs(tokens));
  });
}

export function remarkMtgTags() {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      if (!TAG_RE().test(node.value)) return;
      parent.children[index] = { type: 'html', value: replaceTagsInText(node.value) };
    });
  };
}

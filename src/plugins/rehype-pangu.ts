import { visit, SKIP } from 'unist-util-visit';
import pangu from 'pangu';
import type { Root, Element, Text, RootContent } from 'hast';

const SKIP_TAGS = new Set(['pre', 'code', 'script', 'style', 'kbd', 'samp']);
const CJK = /[一-鿿㐀-䶿]/;
const ALNUM = /[A-Za-z0-9]/;
// Pangu reads the leading sign in patterns like -1/-1 (MTG counter notation)
// as a binary operator after CJK and splits it from the number — e.g. it
// turns "加上-1/-1指示物" into "加上 - 1/-1 指示物". This regex re-glues the
// sign back to its numerator, restricted to slash-fractions whose second
// half is also signed so we never touch genuine math like "X - 1/2".
const MTG_SIGNED_FRACTION_FIXUP = /(\s)([+-]) (\d+\/[+-]\d+)/g;

function applyPangu(input: string): string {
  return pangu.spacingText(input).replace(MTG_SIGNED_FRACTION_FIXUP, '$1$2$3');
}

function isSkipElement(node: RootContent): boolean {
  return node.type === 'element' && SKIP_TAGS.has((node as Element).tagName);
}

function isSkipRaw(node: RootContent): boolean {
  const v = rawValue(node);
  if (v === null) return false;
  const m = v.trim().match(/^<([A-Za-z][A-Za-z0-9]*)/);
  return m !== null && SKIP_TAGS.has(m[1].toLowerCase());
}

function isSkipRawClose(node: RootContent): boolean {
  const v = rawValue(node);
  if (v === null) return false;
  const m = v.trim().match(/^<\/([A-Za-z][A-Za-z0-9]*)/);
  return m !== null && SKIP_TAGS.has(m[1].toLowerCase());
}

// Walk element children while tracking skip depth across sibling raw nodes.
// remark-rehype splits inline HTML like <kbd>text</kbd> into three sibling
// raw nodes: the opening tag, a text node, and the closing tag. A flat visit
// cannot see that the text sits inside a skip-tag boundary, so we walk
// manually and carry a depth counter instead.
function spaceChildren(nodes: RootContent[]): void {
  let depth = 0;
  for (const node of nodes) {
    if (node.type === 'element') {
      if (!isSkipElement(node)) spaceChildren((node as Element).children as RootContent[]);
    } else if (node.type === 'raw') {
      if (isSkipRaw(node)) {
        depth++;
      } else if (isSkipRawClose(node)) {
        if (depth > 0) depth--;
      } else if (depth === 0) {
        (node as { value: string }).value = applyPangu((node as { value: string }).value);
      }
    } else if (node.type === 'text' && depth === 0) {
      (node as Text).value = applyPangu((node as Text).value);
    }
  }
}

function rawValue(node: RootContent): string | null {
  return node.type === 'raw' ? (node as { value: string }).value : null;
}

function isTagOnlyRaw(node: RootContent): boolean {
  const v = rawValue(node);
  return v !== null && /^(<[^>]*>)+$/.test(v.trim());
}

function isOpeningTagRaw(node: RootContent): boolean {
  const v = rawValue(node);
  return v !== null && /^<(?!\/)/.test(v.trim());
}

function isClosingTagRaw(node: RootContent): boolean {
  const v = rawValue(node);
  return v !== null && /^<\//.test(v.trim());
}

function firstChar(node: RootContent): string | null {
  if (node.type === 'text') return (node as Text).value.slice(0, 1) || null;
  if (node.type === 'raw') {
    // Greedy tag-strip on both ends. Assumes raw values from remark-rehype
    // are well-formed HTML fragments (no `>` inside attribute values), which
    // is the contract of the markdown→hast bridge and of the synthetic raw
    // strings emitted by this project's remark plugins.
    const stripped = (node as { value: string }).value
      .replace(/^(<[^>]*>)+/, '')
      .replace(/(<[^>]*>)+$/, '');
    return stripped.slice(0, 1) || null;
  }
  if (node.type === 'element') {
    for (const child of (node as Element).children) {
      const c = firstChar(child);
      if (c) return c;
    }
  }
  return null;
}

function lastChar(node: RootContent): string | null {
  if (node.type === 'text') return (node as Text).value.slice(-1) || null;
  if (node.type === 'raw') {
    // Same well-formedness assumption as firstChar: tag-strip is greedy
    // and would mis-cut a raw value that smuggled `>` inside an attribute.
    const stripped = (node as { value: string }).value
      .replace(/^(<[^>]*>)+/, '')
      .replace(/(<[^>]*>)+$/, '');
    return stripped.slice(-1) || null;
  }
  if (node.type === 'element') {
    const children = (node as Element).children;
    for (let i = children.length - 1; i >= 0; i--) {
      const c = lastChar(children[i]);
      if (c) return c;
    }
  }
  return null;
}

function needsSpace(a: string, b: string): boolean {
  return (CJK.test(a) && ALNUM.test(b)) || (ALNUM.test(a) && CJK.test(b));
}

function appendSpace(node: Text): void {
  if (!/\s$/.test(node.value)) node.value += ' ';
}

function prependSpace(node: Text): void {
  if (!/^\s/.test(node.value)) node.value = ' ' + node.value;
}

/**
 * Rehype plugin that inserts a single ASCII space at every CJK<>ASCII
 * alphanumeric boundary inside the Astro markdown / MDX pipeline. Wraps
 * pangu.spacingText with two extras: a SKIP_TAGS guard for code-like
 * subtrees and a second sibling pass that bridges boundaries spanning
 * an inline element edge.
 *
 * Scope — anything rendered outside the markdown / MDX pipeline never
 * reaches this plugin:
 *  - Author intro strings injected via `v-html` (ArticleAuthorFooter.vue)
 *    or `set:html` (about.astro, authors/[username]/[...page].astro) —
 *    raw HTML pulled from YAML straight into the DOM.
 *  - Hard-coded UI strings in Astro templates (e.g. the slogan list in
 *    pages/[...page].astro).
 *  - Attribute values on hast Element nodes — `properties` is never
 *    read or written; only the `value` of Text and Raw nodes is touched.
 * Those surfaces need their own spacing solution (manual spacing in
 * YAML or templates, or a separate runtime / post-process pass).
 *
 * Caveat for raw HTML — this project's remark plugins (remark-mtg-tags,
 * remark-mtg-merge, remark-notel) emit synthesised HTML as `raw` hast
 * nodes whose `value` is one string covering tags + attributes + text.
 * applyPangu runs over that whole string and cannot distinguish an
 * attribute value from prose, so a CJK<>ASCII boundary that happens to
 * sit inside an attribute (e.g. `<img alt="中文Card">`) is spaced just
 * like prose. In practice this only triggers on accessibility text
 * (alt / title / aria-label) since URL-like attributes (src / href) and
 * class lists in this project are ASCII-only; the rehype-pangu test
 * suite pins the resulting behaviour for the shapes those plugins emit.
 */
export function rehypePangu() {
  return (tree: Root) => {
    spaceChildren(tree.children as RootContent[]);

    visit(tree, 'element', (el: Element) => {
      if (isSkipElement(el)) return SKIP;
      const ch = el.children;
      for (let i = 0; i < ch.length; i++) {
        const cur = ch[i];
        const a = lastChar(cur);
        if (!a) continue;

        let openings = 0;
        let closings = 0;
        let nxtIdx = i + 1;
        while (nxtIdx < ch.length && isTagOnlyRaw(ch[nxtIdx])) {
          if (isOpeningTagRaw(ch[nxtIdx])) openings++;
          else if (isClosingTagRaw(ch[nxtIdx])) closings++;
          nxtIdx++;
        }
        if (nxtIdx >= ch.length) continue;

        const nxt = ch[nxtIdx];
        const b = firstChar(nxt);
        if (!b || !needsSpace(a, b)) continue;

        const sideForOpenings = openings > 0 && closings === 0;
        const sideForClosings = closings > 0 && openings === 0;

        if (sideForOpenings) {
          if (cur.type === 'text') appendSpace(cur as Text);
          else if (nxt.type === 'text') prependSpace(nxt as Text);
        } else if (sideForClosings) {
          if (nxt.type === 'text') prependSpace(nxt as Text);
          else if (cur.type === 'text') appendSpace(cur as Text);
        } else {
          if (cur.type === 'text') appendSpace(cur as Text);
          else if (nxt.type === 'text') prependSpace(nxt as Text);
        }
      }
    });
  };
}

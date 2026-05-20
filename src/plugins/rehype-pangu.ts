// Scope: this plugin runs inside the Astro markdown / MDX pipeline only.
// Anything rendered outside that pipeline never reaches us:
//   - Author intro strings injected via `v-html` (ArticleAuthorFooter.vue)
//     or `set:html` (about.astro, authors/[username]/[...page].astro) —
//     raw HTML pulled from YAML straight into the DOM
//   - Hard-coded UI strings in Astro templates (e.g. the slogan list in
//     pages/[...page].astro)
//   - HTML attribute values everywhere — pangu does not touch attrs
// Those surfaces need their own spacing solution (manual spacing in YAML
// or templates, or a separate runtime / post-process pass) — not this
// plugin.
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
const SIGNED_FRACTION_FIXUP = /(\s)([+-]) (\d+\/[+-]\d+)/g;

function applyPangu(input: string): string {
  return pangu.spacingText(input).replace(SIGNED_FRACTION_FIXUP, '$1$2$3');
}

function isSkipElement(node: RootContent): boolean {
  return node.type === 'element' && SKIP_TAGS.has((node as Element).tagName);
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

export function rehypePangu() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (isSkipElement(node as RootContent)) return SKIP;
      if (node.type === 'text') {
        (node as Text).value = applyPangu((node as Text).value);
      } else if (node.type === 'raw') {
        const n = node as { value: string };
        n.value = applyPangu(n.value);
      }
    });

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

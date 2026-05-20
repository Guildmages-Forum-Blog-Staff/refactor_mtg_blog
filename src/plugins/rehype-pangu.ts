import { visit, SKIP } from 'unist-util-visit';
import pangu from 'pangu';
import type { Root, Element, Text, RootContent } from 'hast';

const SKIP_TAGS = new Set(['pre', 'code', 'script', 'style', 'kbd', 'samp']);
const CJK = /[一-鿿㐀-䶿]/;
const ALNUM = /[A-Za-z0-9]/;

function isSkipElement(node: RootContent): boolean {
  return node.type === 'element' && SKIP_TAGS.has((node as Element).tagName);
}

function firstChar(node: RootContent): string | null {
  if (node.type === 'text') return (node as Text).value.slice(0, 1) || null;
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

export function rehypePangu() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (isSkipElement(node as RootContent)) return SKIP;
      if (node.type === 'text') {
        (node as Text).value = pangu.spacingText((node as Text).value);
      }
    });

    visit(tree, 'element', (el: Element) => {
      if (isSkipElement(el)) return SKIP;
      const ch = el.children;
      for (let i = 0; i < ch.length - 1; i++) {
        const cur = ch[i];
        const nxt = ch[i + 1];
        if (cur.type === 'text' && nxt.type === 'element') {
          const a = (cur as Text).value.slice(-1);
          const b = firstChar(nxt);
          if (a && b && needsSpace(a, b) && !/\s/.test(a)) {
            (cur as Text).value += ' ';
          }
        } else if (cur.type === 'element' && nxt.type === 'text') {
          const a = lastChar(cur);
          const b = (nxt as Text).value.slice(0, 1);
          if (a && b && needsSpace(a, b) && !/\s/.test(b)) {
            (nxt as Text).value = ' ' + (nxt as Text).value;
          }
        }
      }
    });
  };
}

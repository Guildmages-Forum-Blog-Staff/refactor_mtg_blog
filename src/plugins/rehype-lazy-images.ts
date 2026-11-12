import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

// Matches an opening <img ...> tag in raw HTML that does not already set loading.
const RAW_IMG_RE = /<img\b(?![^>]*\sloading\s*=)/gi;

// Marks every content <img> as lazy + async-decoded unless the author set
// `loading` explicitly. Covers hast elements (markdown images, scryfall/mtg
// plugin output) and raw HTML nodes (inline <img> that Astro keeps as `raw`).
export function rehypeLazyImages() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (node.type === 'element') {
        const el = node as Element;
        if (el.tagName !== 'img') return;
        const props = el.properties ?? (el.properties = {});
        if (props.loading !== undefined) return;
        props.loading = 'lazy';
        props.decoding = 'async';
      } else if (node.type === 'raw') {
        const raw = node as unknown as { value: string };
        raw.value = raw.value.replace(RAW_IMG_RE, '<img loading="lazy" decoding="async"');
      }
    });
  };
}

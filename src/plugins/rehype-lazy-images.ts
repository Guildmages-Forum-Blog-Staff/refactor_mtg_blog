import { visit } from 'unist-util-visit';
import type { Root } from 'hast';

// Marks every content <img> element (markdown images, scryfall/mtg plugin
// output) as lazy + async-decoded, keeping any value the author set.
// ponytail: raw inline HTML <img> is not handled — no post uses it; add
// rehype-raw-based handling if one ever does.
export function rehypeLazyImages() {
  return (tree: Root) => {
    visit(tree, 'element', (el) => {
      if (el.tagName !== 'img') return;
      const props = (el.properties ??= {});
      props.loading ??= 'lazy';
      props.decoding ??= 'async';
    });
  };
}

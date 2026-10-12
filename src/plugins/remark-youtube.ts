import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Parent, Html } from 'mdast';

// Raw iframe pasted from YouTube's "Share > Embed" dialog (fixed 560x315).
const IFRAME_RE =
  /^<iframe\b[^>]*\bsrc=(["'])https:\/\/(?:www\.)?(youtube(?:-nocookie)?\.com)\/embed\/([A-Za-z0-9_-]+)(?:\?([^"']*))?\1[^>]*>\s*<\/iframe>$/;

// remark-smartypants turns `--` inside video IDs into an em dash before plugins run.
const EM_DASH = String.fromCharCode(0x2014);

// Keep embed options (start, list, ...) but drop YouTube's `si` share-tracking param.
const embedQuery = (rawQuery = ''): string => {
  const params = new URLSearchParams(rawQuery.replaceAll('&amp;', '&'));
  params.delete('si');
  const query = params.toString().replaceAll('&', '&amp;');
  return query ? `?${query}` : '';
};

const embed = (videoId: string, host = 'youtube.com', query = ''): Html => ({
  type: 'html',
  value: `<div class="youtube-embed aspect-video my-6"><iframe class="w-full h-full" src="https://www.${host}/embed/${videoId}${query}" title="YouTube video player" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
});

export function remarkYoutube() {
  return (tree: Root) => {
    visit(tree, 'html', (node: Html, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      const match = node.value.trim().match(IFRAME_RE);
      if (match) parent.children[index] = embed(match[3], match[2], embedQuery(match[4]));
    });

    visit(
      tree,
      'paragraph',
      (node: Paragraph, index: number | undefined, parent: Parent | undefined) => {
        if (index === undefined || !parent) return;
        if (node.children.length !== 1 || node.children[0].type !== 'text') return;

        const firstChild = node.children[0];
        if (firstChild.type !== 'text') return;

        const text = firstChild.value.trim().replaceAll(EM_DASH, '--');
        const match = text.match(/\{%\s*youtube\s+([A-Za-z0-9_-]+)\s*%\}/);
        if (!match) return;

        parent.children[index] = embed(match[1]);
      },
    );
  };
}

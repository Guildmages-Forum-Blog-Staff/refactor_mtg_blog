import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Parent, Html } from 'mdast';

// Raw iframe pasted from YouTube's "Share > Embed" dialog (fixed 560x315).
// Only used with String.replace, which resets lastIndex, so a module-level /g is safe.
const IFRAME_RE =
  /<iframe\b[^>]*\ssrc=(["'])https:\/\/(?:www\.)?(youtube(?:-nocookie)?\.com)\/embed\/([A-Za-z0-9_-]+)(?:\?([^"']*))?\1[^>]*>\s*<\/iframe>/g;

// remark-smartypants turns `--` inside video IDs into an em dash (default) or
// en dash (`dashes: 'oldschool'`) before plugins run.
const SMART_DASHES = `${String.fromCharCode(0x2013)}${String.fromCharCode(0x2014)}`;
const SMART_DASH_RE = new RegExp(`[${SMART_DASHES}]`, 'g');
const TAG_RE = new RegExp(`\\{%\\s*youtube\\s+([A-Za-z0-9_${SMART_DASHES}-]+)\\s*%\\}`);

// Keep embed options (start, list, ...) but drop YouTube's `si` share-tracking param.
const embedQuery = (rawQuery = ''): string => {
  const params = new URLSearchParams(rawQuery.replaceAll('&amp;', '&'));
  params.delete('si');
  const query = params.toString().replaceAll('&', '&amp;');
  return query ? `?${query}` : '';
};

const embed = (videoId: string, host = 'youtube.com', query = ''): Html => ({
  type: 'html',
  value: `<div class="youtube-embed aspect-video my-6"><iframe class="w-full h-full" src="https://www.${host}/embed/${videoId}${query}" title="YouTube video player" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`,
});

export function remarkYoutube() {
  return (tree: Root) => {
    visit(tree, 'html', (node: Html, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      // An HTML block runs to the next blank line and may hold several iframes plus
      // other content, so rewrite each YouTube iframe in place and keep the rest.
      const value = node.value.replace(
        IFRAME_RE,
        (_iframe, _quote, host: string, videoId: string, query?: string) =>
          embed(videoId, host, embedQuery(query)).value,
      );
      if (value !== node.value) parent.children[index] = { type: 'html', value };
    });

    visit(
      tree,
      'paragraph',
      (node: Paragraph, index: number | undefined, parent: Parent | undefined) => {
        if (index === undefined || !parent) return;
        if (node.children.length !== 1 || node.children[0].type !== 'text') return;

        const firstChild = node.children[0];
        if (firstChild.type !== 'text') return;

        const text = firstChild.value;
        const match = text.match(TAG_RE);
        if (!match || match.index === undefined) return;

        // Split the paragraph around the tag so surrounding text survives; the
        // embed is block-level HTML and cannot live inside a <p>.
        const textParagraph = (value: string): Paragraph[] =>
          value.trim()
            ? [{ type: 'paragraph', children: [{ type: 'text', value: value.trim() }] }]
            : [];
        const replacement = [
          ...textParagraph(text.slice(0, match.index)),
          embed(match[1].replace(SMART_DASH_RE, '--')),
          ...textParagraph(text.slice(match.index + match[0].length)),
        ];
        parent.children.splice(index, 1, ...replacement);
        return index + replacement.length;
      },
    );
  };
}

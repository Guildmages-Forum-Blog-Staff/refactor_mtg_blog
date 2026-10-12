import { SKIP, visit } from 'unist-util-visit';
import type { Root, Paragraph, Html, PhrasingContent, Text } from 'mdast';

// Raw iframe pasted from YouTube's "Share > Embed" dialog (fixed 560x315).
// Factory, per repo convention, so a /g regex never carries a stale lastIndex.
const iframeRe = (): RegExp =>
  /<iframe\b[^>]*\ssrc=(["'])https:\/\/(?:www\.)?(youtube(?:-nocookie)?\.com)\/embed\/([A-Za-z0-9_-]+)(?:\?([^"']*))?\1[^>]*>\s*<\/iframe>/g;

// remark-smartypants turns `--` inside video IDs into an em dash (default) or
// en dash (`dashes: 'oldschool'`) before plugins run.
const SMART_DASHES = `${String.fromCharCode(0x2013)}${String.fromCharCode(0x2014)}`;
const SMART_DASH_RE = new RegExp(`[${SMART_DASHES}]`, 'g');
const tagRe = (): RegExp =>
  new RegExp(`\\{%\\s*youtube\\s+([A-Za-z0-9_${SMART_DASHES}-]+)\\s*%\\}`);

// Keep embed options (start, list, ...) but drop YouTube's `si` share-tracking param.
const embedQuery = (rawQuery = ''): string => {
  const params = new URLSearchParams(rawQuery.replaceAll('&amp;', '&'));
  params.delete('si');
  const query = params.toString().replaceAll('&', '&amp;');
  return query ? `?${query}` : '';
};

const embed = (videoId: string, host = 'youtube.com', query = ''): string =>
  `<div class="youtube-embed aspect-video my-6"><iframe class="w-full h-full" src="https://www.${host}/embed/${videoId}${query}" title="YouTube video player" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;

// An HTML block runs to the next blank line and may hold several iframes plus
// other content, so rewrite each YouTube iframe in place and keep the rest.
const rewriteIframes = (node: Html): Html[] | undefined => {
  const value = node.value.replace(
    iframeRe(),
    (_iframe, _quote, host: string, videoId: string, query?: string) =>
      embed(videoId, host, embedQuery(query)),
  );
  return value === node.value ? undefined : [{ type: 'html', value }];
};

// remark-breaks turns the newline next to a tag into a `break` node; such nodes and
// whitespace-only text at the split edges would otherwise leave `<p><br></p>` behind.
const isBlank = (c: PhrasingContent): boolean =>
  c.type === 'break' || (c.type === 'text' && !c.value.trim());

// Wrap leftover inline nodes in a paragraph, dropping blank nodes at either edge.
const paragraphOf = (children: PhrasingContent[]): Paragraph[] => {
  const start = children.findIndex((c) => !isBlank(c));
  if (start === -1) return [];
  const end = children.findLastIndex((c) => !isBlank(c));
  return [{ type: 'paragraph', children: children.slice(start, end + 1) }];
};

// Split the paragraph around the first tag so surrounding content survives; the
// embed is block-level HTML and cannot live inside a <p>. The tag may share a
// paragraph with a link or another tag on an adjacent line.
const splitTag = (node: Paragraph): (Paragraph | Html)[] | undefined => {
  const at = node.children.findIndex((c) => c.type === 'text' && tagRe().test(c.value));
  if (at === -1) return undefined;

  const { value } = node.children[at] as Text;
  const match = value.match(tagRe());
  if (!match || match.index === undefined) return undefined;

  return [
    ...paragraphOf([
      ...node.children.slice(0, at),
      { type: 'text', value: value.slice(0, match.index).trimEnd() },
    ]),
    { type: 'html', value: embed(match[1].replace(SMART_DASH_RE, '--')) },
    ...paragraphOf([
      { type: 'text', value: value.slice(match.index + match[0].length).trimStart() },
      ...node.children.slice(at + 1),
    ]),
  ];
};

export function remarkYoutube() {
  return (tree: Root) => {
    visit(tree, ['html', 'paragraph'], (node, index, parent) => {
      if (index === undefined || !parent) return;
      const replacement =
        node.type === 'html' ? rewriteIframes(node as Html) : splitTag(node as Paragraph);
      if (!replacement) return;
      parent.children.splice(index, 1, ...replacement);
      // Skip the detached node's children and resume right after the embed, so a
      // later tag in the trailing paragraph is still found.
      return [SKIP, index + replacement.findIndex((n) => n.type === 'html') + 1];
    });
  };
}

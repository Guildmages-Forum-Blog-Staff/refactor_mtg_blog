import type { Root, Paragraph, RootContent } from 'mdast';

const OPEN_RE = /^\{%\s*notel(?:\s+(red|blue|green|yellow|purple|orange|cyan))?\s+(.+?)\s*%\}$/;
const CLOSE_RE = /^\{%\s*endnotel\s*%\}$/;

export function remarkNotel() {
  return (tree: Root) => {
    const children = tree.children;
    let i = 0;
    while (i < children.length) {
      const node = children[i];
      if (node.type !== 'paragraph') { i++; continue; }

      const para = node as Paragraph;
      if (para.children.length !== 1 || para.children[0].type !== 'text') { i++; continue; }

      const text = para.children[0].value.trim();
      const openMatch = text.match(OPEN_RE);
      if (!openMatch) { i++; continue; }

      const color = openMatch[1] ?? 'default';
      const title = openMatch[2];

      let j = i + 1;
      while (j < children.length) {
        const candidate = children[j];
        if (
          candidate.type === 'paragraph' &&
          (candidate as Paragraph).children.length === 1 &&
          (candidate as Paragraph).children[0].type === 'text' &&
          CLOSE_RE.test(((candidate as Paragraph).children[0] as { value: string }).value.trim())
        ) break;
        j++;
      }

      if (j >= children.length) { i++; continue; }

      const inner = children.slice(i + 1, j);
      const openHtml: RootContent = {
        type: 'html',
        value: `<div class="notel notel-${color}"><div class="notel-title">${title}</div><div class="notel-body">`,
      };
      const closeHtml: RootContent = { type: 'html', value: `</div></div>` };

      children.splice(i, j - i + 1, openHtml, ...inner, closeHtml);
      i += inner.length + 2;
    }
  };
}

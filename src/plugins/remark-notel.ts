import type { Root, Paragraph, RootContent, Text } from 'mdast';

const CURLY_L = String.fromCharCode(0x201c);
const CURLY_R = String.fromCharCode(0x201d);

const OPEN_RE =
  /^\{%\s*notel(?:\s+(default|red|blue|green|yellow|purple|orange|cyan))?\s+(.+?)\s*%\}/;
const CLOSE_RE = /\{%\s*endnotel\s*%\}/;

function stripQuotes(s: string): string {
  return s.replace(new RegExp(`[${CURLY_L}${CURLY_R}"]`, 'g'), '').trim();
}

function findClose(text: string): { index: number } | null {
  return text.match(CLOSE_RE) as { index: number } | null;
}

function trimBreaks(nodes: Paragraph['children']): Paragraph['children'] {
  let start = 0;
  let end = nodes.length;
  while (start < end && nodes[start].type === 'break') start++;
  while (end > start && nodes[end - 1].type === 'break') end--;
  return nodes.slice(start, end);
}

export function remarkNotel() {
  return (tree: Root) => {
    const children = tree.children;
    let i = 0;
    while (i < children.length) {
      const node = children[i];
      if (node.type !== 'paragraph') {
        i++;
        continue;
      }

      const para = node as Paragraph;
      if (!para.children.length || para.children[0].type !== 'text') {
        i++;
        continue;
      }

      const firstText = (para.children[0] as Text).value;
      const openMatch = firstText.match(OPEN_RE);
      if (!openMatch) {
        i++;
        continue;
      }

      const color = openMatch[1] ?? 'default';
      const title = stripQuotes(openMatch[2]);
      const openTagLen = openMatch[0].length;

      const openHtml: RootContent = {
        type: 'html',
        value: `<div class="notel notel-${color}"><div class="notel-title">${title}</div><div class="notel-body">`,
      };
      const closeHtml: RootContent = { type: 'html', value: `</div></div>` };

      let closeChildIdx = -1;
      let closeIndex = -1;

      for (let k = 0; k < para.children.length; k++) {
        const child = para.children[k];
        if (child.type !== 'text') continue;
        const searchText =
          k === 0 ? (child as Text).value.slice(openTagLen) : (child as Text).value;
        const m = findClose(searchText);
        if (m) {
          closeChildIdx = k;
          closeIndex = k === 0 ? m.index + openTagLen : m.index;
          break;
        }
      }

      if (closeChildIdx !== -1) {
        const innerChildren: Paragraph['children'] = [];

        if (closeChildIdx === 0) {
          const innerText = firstText
            .slice(openTagLen, closeIndex)
            .replace(/^\n/, '')
            .replace(/\n$/, '');
          if (innerText.trim()) innerChildren.push({ type: 'text', value: innerText });
        } else {
          const afterOpen = firstText.slice(openTagLen).replace(/^\n/, '');
          if (afterOpen.trim()) innerChildren.push({ type: 'text', value: afterOpen });

          for (let k = 1; k < closeChildIdx; k++) {
            innerChildren.push(para.children[k]);
          }

          const closeChildText = (para.children[closeChildIdx] as Text).value;
          const beforeClose = closeChildText.slice(0, closeIndex).replace(/\n$/, '');
          if (beforeClose.trim()) innerChildren.push({ type: 'text', value: beforeClose });
        }

        const trimmed = trimBreaks(innerChildren);
        const replacements: RootContent[] = [openHtml];
        if (trimmed.length > 0) {
          replacements.push({ type: 'paragraph', children: trimmed } as Paragraph);
        }
        replacements.push(closeHtml);

        children.splice(i, 1, ...replacements);
        i += replacements.length;
        continue;
      }

      // Close tag in a subsequent paragraph
      let j = i + 1;
      while (j < children.length) {
        const candidate = children[j];
        if (candidate.type === 'paragraph') {
          const cPara = candidate as Paragraph;
          const cText = cPara.children
            .map((c) => (c.type === 'text' ? (c as Text).value : ''))
            .join('');
          if (CLOSE_RE.test(cText.trim())) break;
        }
        j++;
      }

      if (j >= children.length) {
        i++;
        continue;
      }

      const inner = children.slice(i + 1, j);
      children.splice(i, j - i + 1, openHtml, ...inner, closeHtml);
      i += inner.length + 2;
    }
  };
}

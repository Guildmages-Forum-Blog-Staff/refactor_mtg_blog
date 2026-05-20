import { describe, it, expect } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypePangu } from '../rehype-pangu';

const run = (md: string) =>
  unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePangu)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(md)
    .toString();

describe('rehypePangu', () => {
  it('inserts a space between CJK and ASCII letters in the same text node', () => {
    const html = run('這是中文English內容');
    expect(html).toContain('中文 English');
    expect(html).toContain('English 內容');
  });
});

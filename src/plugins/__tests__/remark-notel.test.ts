import { beforeEach, describe, it, expect } from 'vitest';
import { remark } from 'remark';
import { __setCardDataForTests } from '../mtg-card-cache';
import { remarkNotel } from '../remark-notel';
import { renderLikeAstro } from './astro-pipeline';

const process = (markdown: string) => remark().use(remarkNotel).process(markdown);

// Splits rendered HTML into the notel body and whatever follows the box.
function notelParts(html: string): { body: string; after: string } {
  const match = html.match(/<div class="notel-body">([\s\S]*?)<\/div><\/div>([\s\S]*)$/);
  if (!match) throw new Error(`no notel box in: ${html}`);
  return { body: match[1], after: match[2] };
}

describe('remarkNotel', () => {
  it('renders default color variant', async () => {
    const file = await process('{% notel Title %}\ncontent\n{% endnotel %}');
    const html = String(file);
    expect(html).toContain('class="notel notel-default"');
    expect(html).toContain('Title');
  });

  it('renders named color variant', async () => {
    const file = await process('{% notel red Warning %}\nWatch out!\n{% endnotel %}');
    const html = String(file);
    expect(html).toContain('class="notel notel-red"');
    expect(html).toContain('Warning');
  });

  it('handles same-paragraph open and close', async () => {
    const file = await process('{% notel blue Note %} inline content {% endnotel %}');
    const html = String(file);
    expect(html).toContain('class="notel notel-blue"');
    expect(html).toContain('inline content');
  });

  it('handles multi-paragraph blocks', async () => {
    const input = '{% notel green Title %}\n\nfirst para\n\nsecond para\n\n{% endnotel %}';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('class="notel notel-green"');
    expect(html).toContain('first para');
    expect(html).toContain('second para');
  });

  it('trims leading/trailing break nodes', async () => {
    const file = await process('{% notel yellow Title %}\n\ncontent\n\n{% endnotel %}');
    const html = String(file);
    expect(html).toContain('content');
    expect(html).not.toMatch(/<br>\s*<div class="notel/);
  });

  it('normalizes curly double-quotes in title', async () => {
    const curlyL = String.fromCharCode(0x201c);
    const curlyR = String.fromCharCode(0x201d);
    const file = await process(`{% notel red ${curlyL}Dragon${curlyR} %}\ncontent\n{% endnotel %}`);
    const html = String(file);
    expect(html).toContain('Dragon');
    expect(html).not.toContain(curlyL);
    expect(html).not.toContain(curlyR);
  });

  it('normalizes curly single-quotes in title', async () => {
    const curlySR = String.fromCharCode(0x2019);
    const file = await process(`{% notel blue It${curlySR}s a note %}\ncontent\n{% endnotel %}`);
    const html = String(file);
    // curly right single-quote → ASCII apostrophe (not HTML-escaped)
    expect(html).toContain("It's a note");
    expect(html).not.toContain(curlySR);
  });

  it('escapes & and > in title to prevent broken markup', async () => {
    const file = await process('{% notel red A & B > C %}\ncontent\n{% endnotel %}');
    const html = String(file);
    expect(html).toContain('A &amp; B &gt; C');
    expect(html).not.toContain('" A & B');
  });

  it('does not transform unclosed notel blocks', async () => {
    const file = await process('{% notel Title %}\ncontent without close tag');
    const html = String(file);
    expect(html).not.toContain('class="notel');
  });

  it('preserves content on opening line in multi-paragraph path', async () => {
    const input = '{% notel purple Title %} opening line content\n\nmiddle\n\n{% endnotel %}';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('opening line content');
    expect(html).toContain('middle');
  });

  it.each([
    ['a blockquote', '> {% notel red Title %}\n> body\n> {% endnotel %}'],
    ['a list item', '- item\n\n  {% notel red Title %}\n  body\n  {% endnotel %}'],
  ])('renders inside %s', async (_, input) => {
    const html = String(await process(input));
    expect(html).toContain('<div class="notel notel-red">');
    expect(html).not.toContain('endnotel');
  });
});

describe('remarkNotel — text around the close tag', () => {
  beforeEach(() => __setCardDataForTests({}));

  it.each([
    [
      'root, close line under the last paragraph',
      '{% notel red T %}\nbody\n\nmore\n{% endnotel %}',
      ['body', 'more'],
    ],
    ['a blockquote', '> {% notel red T %}\n>\n> body\n> {% endnotel %}', ['body']],
    ['a list item', '- item\n\n  {% notel red T %}\n\n  body\n  {% endnotel %}', ['body']],
  ])('keeps the text before the close tag in %s', async (_, input, inBody) => {
    const { html } = await renderLikeAstro(input, { folding: false });
    const { body } = notelParts(html);
    for (const text of inBody) expect(body).toContain(text);
    expect(html).not.toContain('endnotel');
  });

  it.each([
    ['root, one paragraph', '{% notel red T %}\nbody\n{% endnotel %}\nafter', 'after'],
    ['root, several paragraphs', '{% notel red T %}\nbody\n\nmore\n{% endnotel %}\nafter', 'after'],
    ['a blockquote', '> {% notel red T %}\n> body\n> {% endnotel %}\n> after', 'after'],
    ['a list item', '- {% notel blue T %}\n  body\n  {% endnotel %} and more', 'and more'],
  ])('moves the text after the close tag out of the box in %s', async (_, input, afterText) => {
    const { html } = await renderLikeAstro(input, { folding: false });
    const { body, after } = notelParts(html);
    expect(body).not.toContain(afterText);
    expect(after).toContain(afterText);
    expect(html).not.toContain('endnotel');
  });
});

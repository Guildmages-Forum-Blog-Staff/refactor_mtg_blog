import { describe, it, expect } from 'vitest';
import { remark } from 'remark';
import { remarkNotel } from '../remark-notel';

const process = (markdown: string) => remark().use(remarkNotel).process(markdown);

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
    const file = await process(
      `{% notel red ${curlyL}Dragon${curlyR} %}\ncontent\n{% endnotel %}`,
    );
    const html = String(file);
    expect(html).toContain('Dragon');
    expect(html).not.toContain(curlyL);
    expect(html).not.toContain(curlyR);
  });

  it('normalizes curly single-quotes in title', async () => {
    const curlySR = String.fromCharCode(0x2019);
    const file = await process(
      `{% notel blue It${curlySR}s a note %}\ncontent\n{% endnotel %}`,
    );
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
});

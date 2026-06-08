import { describe, it, expect } from 'vitest';
import { lintText, type Finding } from '../lint-mtg-tags';

const rules = (fs: Finding[]) => fs.map((f) => f.rule).sort();

describe('lintText', () => {
  it('passes well-formed tags', () => {
    const text = '{% mtgcard Black Lotus %} {% mtglink "Seam Rip" %} {% mtgpick blb 82 %}';
    expect(lintText(text, 'ok.md')).toEqual([]);
  });

  it('flags an unterminated tag (missing %})', () => {
    // {% mtglink "Dandân"} 被 {% mtglink "Dance" %}
    const text = '即便 {% mtglink "Dandan"} 被 {% mtglink "Dance" %} 洗掉';
    const fs = lintText(text, 'bad.md');
    expect(rules(fs)).toContain('unterminated-tag');
    expect(fs[0].line).toBe(1);
  });

  it('flags an unbalanced quote inside a closed tag', () => {
    // {% mtglink "Seam Rip %}  — missing closing quote
    const text = '2 {% mtglink "Seam Rip %} 1 {% mtglink "Day of Judgment" %}';
    const fs = lintText(text, 'bad.md');
    expect(rules(fs)).toContain('unbalanced-quote');
  });

  it('reports the correct 1-indexed line', () => {
    const text = 'line one\nline two\n{% mtglink "Broken %}\n';
    const fs = lintText(text, 'bad.md');
    expect(fs.length).toBe(1);
    expect(fs[0].line).toBe(3);
  });

  it('does not flag escaped or paired quotes', () => {
    expect(lintText('{% mtgcard Black\\" Lotus %}', 'ok.md')).toEqual([]);
  });
});

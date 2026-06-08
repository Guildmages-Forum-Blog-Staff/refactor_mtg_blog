import { describe, it, expect } from 'vitest';
import { lintText, lintFiles, type Finding } from '../lint-mtg-tags';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

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

  it('flags a KV arg missing its = (alt"x")', () => {
    // {% mtglink "Watery Grave" alt"藍黑電震地" %} — quotes stay balanced and the
    // tag is closed, so only the malformed-kv rule can catch this.
    const text = '{% mtglink "Watery Grave" alt"x" %}';
    expect(rules(lintText(text, 'bad.md'))).toContain('malformed-kv');
  });

  it('passes a well-formed KV arg (alt="x")', () => {
    expect(lintText('{% mtglink "Watery Grave" alt="x" %}', 'ok.md')).toEqual([]);
  });
});

describe('lintFiles', () => {
  it('collects findings across explicit files', () => {
    const dir = mkdtempSync(join(tmpdir(), 'lint-'));
    const good = join(dir, 'good.md');
    const bad = join(dir, 'bad.md');
    writeFileSync(good, '{% mtglink "Seam Rip" %}');
    writeFileSync(bad, '{% mtglink "Seam Rip %}');
    const fs = lintFiles([good, bad]);
    expect(fs.some((f) => f.file === bad)).toBe(true);
    expect(fs.some((f) => f.file === good)).toBe(false);
  });

  it('skips paths that no longer exist (lefthook may pass staged deletions)', () => {
    const dir = mkdtempSync(join(tmpdir(), 'lint-'));
    const deleted = join(dir, 'deleted.md'); // never written -> does not exist
    const present = join(dir, 'present.md');
    writeFileSync(present, '{% mtglink "Seam Rip %}');
    // Must not throw on the missing path, and must still lint the present one.
    const fs = lintFiles([deleted, present]);
    expect(fs.every((f) => f.file === present)).toBe(true);
    expect(fs.some((f) => f.rule === 'unbalanced-quote')).toBe(true);
  });
});

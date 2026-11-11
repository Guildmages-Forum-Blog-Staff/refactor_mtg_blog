import { describe, expect, it } from 'vitest';
import { replaceInFrontmatter } from '../migrate-images';

describe('replaceInFrontmatter', () => {
  it('rewrites only the front-matter, keeping quoting and the body', () => {
    const src =
      '---\ntitle: "x"\ncover: "https://i.imgur.com/a.png"\n---\n![](https://i.imgur.com/a.png)\n';
    const out = replaceInFrontmatter(
      src,
      new Map([['https://i.imgur.com/a.png', 'https://img/a.jpg']]),
    );
    expect(out).toBe(
      '---\ntitle: "x"\ncover: "https://img/a.jpg"\n---\n![](https://i.imgur.com/a.png)\n',
    );
  });

  it('refuses a file without front-matter', () => {
    expect(() => replaceInFrontmatter('no fm', new Map())).toThrow(/front-matter/);
  });
});

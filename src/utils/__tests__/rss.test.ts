import { describe, it, expect } from 'vitest';
import { buildRssItems, type RssSourcePost } from '../rss';

const BASE = '/refactor_mtg_blog/';

function makePost(
  id: string,
  data: { title?: string; date: Date; excerpt?: string; categories?: string[] },
): RssSourcePost {
  return {
    id,
    data: {
      title: data.title ?? 'Title',
      date: data.date,
      excerpt: data.excerpt,
      categories: data.categories ?? [],
    },
  };
}

describe('buildRssItems', () => {
  it('sorts items by date descending', () => {
    const posts = [
      makePost('old.md', { date: new Date('2023-01-01') }),
      makePost('new.md', { date: new Date('2024-06-01') }),
      makePost('mid.md', { date: new Date('2023-12-31') }),
    ];
    const items = buildRssItems(posts, BASE);
    expect(items.map((i) => i.link)).toEqual([
      '/refactor_mtg_blog/new/',
      '/refactor_mtg_blog/mid/',
      '/refactor_mtg_blog/old/',
    ]);
  });

  it('builds a trailing-slash link from baseUrl and strips .md/.mdx', () => {
    const items = buildRssItems(
      [makePost('hello-world.mdx', { date: new Date('2024-01-01') })],
      BASE,
    );
    expect(items[0].link).toBe('/refactor_mtg_blog/hello-world/');
  });

  it('keeps the trailing slash for slugs containing a dot', () => {
    const items = buildRssItems(
      [makePost('patch-1.2-notes.md', { date: new Date('2024-01-01') })],
      BASE,
    );
    expect(items[0].link).toBe('/refactor_mtg_blog/patch-1.2-notes/');
  });

  it('uses excerpt as description, empty string when missing', () => {
    const items = buildRssItems(
      [
        makePost('a.md', { date: new Date('2024-02-01'), excerpt: 'summary' }),
        makePost('b.md', { date: new Date('2024-01-01') }),
      ],
      BASE,
    );
    expect(items[0].description).toBe('summary');
    expect(items[1].description).toBe('');
  });

  it('passes title, pubDate and categories through', () => {
    const date = new Date('2024-03-03');
    const items = buildRssItems(
      [makePost('c.md', { title: 'My Post', date, categories: ['Pioneer', 'Construct'] })],
      BASE,
    );
    expect(items[0].title).toBe('My Post');
    expect(items[0].pubDate).toBe(date);
    expect(items[0].categories).toEqual(['Pioneer', 'Construct']);
  });

  it('does not mutate the input array', () => {
    const posts = [
      makePost('old.md', { date: new Date('2023-01-01') }),
      makePost('new.md', { date: new Date('2024-01-01') }),
    ];
    const snapshot = [...posts];
    buildRssItems(posts, BASE);
    expect(posts).toEqual(snapshot);
  });

  it('caps the feed at the 50 most recent posts', () => {
    const posts = Array.from({ length: 60 }, (_, i) =>
      makePost(`post-${i}.md`, { date: new Date(2024, 0, i + 1) }),
    );
    const items = buildRssItems(posts, BASE);
    expect(items).toHaveLength(50);
    expect(items[0].link).toBe('/refactor_mtg_blog/post-59/');
    expect(items.some((it) => it.link === '/refactor_mtg_blog/post-0/')).toBe(false);
  });
});

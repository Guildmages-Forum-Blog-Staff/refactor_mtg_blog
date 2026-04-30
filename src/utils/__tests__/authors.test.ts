import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock astro:content before importing the module under test
vi.mock('astro:content', () => ({
  getCollection: vi.fn(),
}));

import { getCollection } from 'astro:content';
import { getAuthorById, getPostAuthors } from '../authors';

const mockAuthors = [
  {
    id: 'MiohitoKiri5474',
    data: {
      username: 'MiohitoKiri5474',
      name: '台南猴王的耍猴日常',
      avatar: '/images/mio-avatar.JPG',
      url: '/tags/miohitokiri5474/',
      intro: ['intro line 1', 'intro line 2'],
    },
  },
  {
    id: 'JerobaMTG',
    data: {
      username: 'JerobaMTG',
      name: 'Jeroba',
      avatar: '/images/jeroba-avatar.jpg',
      url: '/tags/jerobamtg/',
      intro: ['jeroba intro'],
    },
  },
];

beforeEach(() => {
  vi.mocked(getCollection).mockResolvedValue(mockAuthors as never);
});

describe('getAuthorById', () => {
  it('returns author matching by id', async () => {
    const author = await getAuthorById('MiohitoKiri5474');
    expect(author).not.toBeNull();
    expect(author?.name).toBe('台南猴王的耍猴日常');
  });

  it('returns author matching by username field', async () => {
    const author = await getAuthorById('JerobaMTG');
    expect(author?.username).toBe('JerobaMTG');
  });

  it('returns null for unknown username', async () => {
    const author = await getAuthorById('NonExistentAuthor');
    expect(author).toBeNull();
  });

  it('returned author object includes the id field', async () => {
    const author = await getAuthorById('MiohitoKiri5474');
    expect(author?.id).toBe('MiohitoKiri5474');
  });
});

describe('getPostAuthors', () => {
  it('returns all matching authors for a post', async () => {
    const authors = await getPostAuthors(['MiohitoKiri5474', 'JerobaMTG']);
    expect(authors).toHaveLength(2);
    expect(authors.map((a) => a.username)).toContain('MiohitoKiri5474');
    expect(authors.map((a) => a.username)).toContain('JerobaMTG');
  });

  it('filters out unknown authors silently', async () => {
    const authors = await getPostAuthors(['MiohitoKiri5474', 'GhostAuthor']);
    expect(authors).toHaveLength(1);
    expect(authors[0].username).toBe('MiohitoKiri5474');
  });

  it('returns empty array when no authors match', async () => {
    const authors = await getPostAuthors(['NoOne', 'Nobody']);
    expect(authors).toHaveLength(0);
  });

  it('returns empty array for empty input', async () => {
    const authors = await getPostAuthors([]);
    expect(authors).toHaveLength(0);
  });
});

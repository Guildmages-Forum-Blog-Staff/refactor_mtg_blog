import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock astro:content before importing the module under test
vi.mock('astro:content', () => ({
  getCollection: vi.fn(),
}));

import { getCollection } from 'astro:content';
import { getAuthorById, getPostAuthors, getAllAuthors } from '../authors';

const mockAuthors = [
  {
    id: 'MiohitoKiri5474',
    data: {
      username: 'MiohitoKiri5474',
      name: '台南猴王的耍猴日常',
      name_en: 'MiohitoKiri5474',
      avatar: '/images/mio-avatar.JPG',
      url: '/tags/miohitokiri5474/',
      intro_zh: ['intro line 1', 'intro line 2'],
      intro_en: ['en line 1', 'en line 2'],
    },
  },
  {
    id: 'JerobaMTG',
    data: {
      username: 'JerobaMTG',
      name: 'Jeroba',
      avatar: '/images/jeroba-avatar.jpg',
      url: '/tags/jerobamtg/',
      intro_zh: ['jeroba intro'],
      intro_en: [],
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

describe('.yml id normalization', () => {
  it('getAllAuthors normalizes .yml extension from raw ids', async () => {
    const mockAuthorsWithExt = [
      {
        id: 'MiohitoKiri5474.yml',
        data: mockAuthors[0].data,
      },
      {
        id: 'JerobaMTG.yaml',
        data: mockAuthors[1].data,
      },
    ];
    vi.mocked(getCollection).mockResolvedValue(mockAuthorsWithExt as never);

    const authors = await getAllAuthors();

    expect(authors).toHaveLength(2);
    expect(authors[0].id).toBe('MiohitoKiri5474');
    expect(authors[1].id).toBe('JerobaMTG');
  });

  it('getAuthorById finds entry when raw id has .yml extension', async () => {
    const mockAuthorsWithExt = [
      {
        id: 'MiohitoKiri5474.yml',
        data: mockAuthors[0].data,
      },
    ];
    vi.mocked(getCollection).mockResolvedValue(mockAuthorsWithExt as never);

    const author = await getAuthorById('MiohitoKiri5474');

    expect(author).not.toBeNull();
    expect(author?.id).toBe('MiohitoKiri5474');
    expect(author?.name).toBe('台南猴王的耍猴日常');
  });

  it('getAuthorById finds entry when raw id has .yaml extension', async () => {
    const mockAuthorsWithExt = [
      {
        id: 'JerobaMTG.yaml',
        data: mockAuthors[1].data,
      },
    ];
    vi.mocked(getCollection).mockResolvedValue(mockAuthorsWithExt as never);

    const author = await getAuthorById('JerobaMTG');

    expect(author).not.toBeNull();
    expect(author?.id).toBe('JerobaMTG');
    expect(author?.username).toBe('JerobaMTG');
  });

  it('getPostAuthors returns correct author when raw ids have .yml extension', async () => {
    const mockAuthorsWithExt = [
      {
        id: 'MiohitoKiri5474.yml',
        data: mockAuthors[0].data,
      },
      {
        id: 'JerobaMTG.yaml',
        data: mockAuthors[1].data,
      },
    ];
    vi.mocked(getCollection).mockResolvedValue(mockAuthorsWithExt as never);

    const authors = await getPostAuthors(['MiohitoKiri5474', 'JerobaMTG']);

    expect(authors).toHaveLength(2);
    expect(authors[0].id).toBe('MiohitoKiri5474');
    expect(authors[1].id).toBe('JerobaMTG');
    expect(authors[0].username).toBe('MiohitoKiri5474');
    expect(authors[1].username).toBe('JerobaMTG');
  });

  it('getPostAuthors handles mixed normalized and .yml ids', async () => {
    const mockAuthorsWithExt = [
      {
        id: 'MiohitoKiri5474.yml',
        data: mockAuthors[0].data,
      },
      {
        id: 'JerobaMTG', // no extension
        data: mockAuthors[1].data,
      },
    ];
    vi.mocked(getCollection).mockResolvedValue(mockAuthorsWithExt as never);

    const authors = await getPostAuthors(['MiohitoKiri5474', 'JerobaMTG']);

    expect(authors).toHaveLength(2);
    expect(authors[0].id).toBe('MiohitoKiri5474');
    expect(authors[1].id).toBe('JerobaMTG');
  });
});

describe('intro spacing', () => {
  // Author intros land on the page via v-html / set:html (the author footer
  // and the about page), which bypasses the markdown / MDX pipeline and
  // therefore rehype-pangu. Apply pangu.spacingText at load time so the
  // YAML strings get the same CJK<>ASCII spacing treatment as post bodies.
  const mockWithMixedIntro = [
    {
      id: 'PanguAuthor',
      data: {
        username: 'PanguAuthor',
        name: 'Pangu Tester',
        avatar: '/images/x.jpg',
        intro_zh: ['畢業於MIT', '常駐於Taipei市', 'already spaced line'],
        intro_en: [],
      },
    },
  ];

  beforeEach(() => {
    vi.mocked(getCollection).mockResolvedValue(mockWithMixedIntro as never);
  });

  it('getAllAuthors spaces CJK<>ASCII boundaries in intro lines', async () => {
    const authors = await getAllAuthors();
    expect(authors[0].intro).toEqual(['畢業於 MIT', '常駐於 Taipei 市', 'already spaced line']);
  });

  it('getAuthorById spaces CJK<>ASCII boundaries in intro lines', async () => {
    const author = await getAuthorById('PanguAuthor');
    expect(author?.intro).toEqual(['畢業於 MIT', '常駐於 Taipei 市', 'already spaced line']);
  });

  it('getPostAuthors spaces CJK<>ASCII boundaries in intro lines', async () => {
    const authors = await getPostAuthors(['PanguAuthor']);
    expect(authors[0].intro).toEqual(['畢業於 MIT', '常駐於 Taipei 市', 'already spaced line']);
  });
});

describe('intro language', () => {
  it('defaults to the zh intro and drops the raw intro_* fields', async () => {
    const author = await getAuthorById('MiohitoKiri5474');
    expect(author?.intro).toEqual(['intro line 1', 'intro line 2']);
    expect(author).not.toHaveProperty('intro_zh');
    expect(author).not.toHaveProperty('intro_en');
  });

  it('returns intro_en for en', async () => {
    const authors = await getPostAuthors(['MiohitoKiri5474'], 'en');
    expect(authors[0].intro).toEqual(['en line 1', 'en line 2']);
  });

  it('falls back to the zh intro when intro_en is empty', async () => {
    const all = await getAllAuthors('en');
    expect(all.find((a) => a.id === 'JerobaMTG')?.intro).toEqual(['jeroba intro']);
  });
});

describe('name language', () => {
  it('uses name on zh pages and name_en on en pages', async () => {
    expect((await getAuthorById('MiohitoKiri5474'))?.name).toBe('台南猴王的耍猴日常');
    expect((await getAuthorById('MiohitoKiri5474', 'en'))?.name).toBe('MiohitoKiri5474');
  });

  it('falls back to name when name_en is missing', async () => {
    expect((await getAuthorById('JerobaMTG', 'en'))?.name).toBe('Jeroba');
  });
});

describe('avatar base path', () => {
  it('prefixes site-relative avatars in every loader under a sub-path base', async () => {
    vi.stubEnv('BASE_URL', '/blog/');
    vi.resetModules();
    const { getAuthorById: byIdFresh, getAllAuthors: allFresh } = await import('../authors');
    const { getCollection: freshGetCollection } = await import('astro:content');
    vi.mocked(freshGetCollection).mockResolvedValue(mockAuthors as never);

    expect((await byIdFresh('MiohitoKiri5474'))?.avatar).toBe('/blog/images/mio-avatar.JPG');
    expect((await allFresh())[0].avatar).toBe('/blog/images/mio-avatar.JPG');
    vi.unstubAllEnvs();
  });
});

import { describe, it, expect, vi } from 'vitest';

vi.mock('astro:content', () => ({
  getCollection: vi.fn(async () => [
    { id: 'zh_tw/shared.md', data: { preview: false, categories: ['Limited'] } },
    { id: 'en/shared.md', data: { preview: false, categories: ['Limited'] } },
    { id: 'en/draft.md', data: { preview: true, categories: ['Modern'] } },
  ]),
}));

import { getLangIndex, getLangSwitch } from '../collections';

describe('getLangIndex', () => {
  it('leaves preview posts and their categories out', async () => {
    const index = await getLangIndex('en');
    expect([...index.slugs]).toEqual(['shared']);
    expect([...index.categories]).toEqual(['Limited']);
  });
});

describe('getLangSwitch', () => {
  it('links a translated post to its twin', async () => {
    expect(await getLangSwitch('/shared/')).toEqual({
      otherLang: 'en',
      href: '/en/shared/',
      exact: true,
    });
  });

  it('never points at a preview draft in the other language', async () => {
    expect(await getLangSwitch('/draft/')).toEqual({ otherLang: 'en', href: '/en/', exact: false });
  });
});

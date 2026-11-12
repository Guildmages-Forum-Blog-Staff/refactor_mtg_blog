import { describe, it, expect } from 'vitest';
import { counterpartPath } from '../counterpart';

const target = {
  slugs: new Set(['translated-post', 'series/part-1']),
  categories: new Set(['Limited', 'Level One']),
};

describe('counterpartPath', () => {
  it('maps shared pages to themselves', () => {
    for (const p of ['', 'about/', 'contact/', 'calendar/', 'categories/']) {
      expect(counterpartPath(p, target)).toEqual({ path: p, exact: true });
    }
  });

  it('maps a post only when the target has the same slug', () => {
    expect(counterpartPath('translated-post/', target)).toEqual({
      path: 'translated-post/',
      exact: true,
    });
    expect(counterpartPath('series/part-1/', target).exact).toBe(true);
    expect(counterpartPath('untranslated/', target)).toEqual({ path: '', exact: false });
  });

  it('falls back home for numeric home pagination', () => {
    expect(counterpartPath('3/', target)).toEqual({ path: '', exact: false });
  });

  it('maps author pages to the first page', () => {
    expect(counterpartPath('authors/Kappa/', target)).toEqual({
      path: 'authors/Kappa/',
      exact: true,
    });
    expect(counterpartPath('authors/Kappa/2/', target)).toEqual({
      path: 'authors/Kappa/',
      exact: false,
    });
  });

  it('maps categories the target has, decoding the URL segment', () => {
    expect(counterpartPath('categories/Level%20One/', target)).toEqual({
      path: 'categories/Level%20One/',
      exact: true,
    });
    expect(counterpartPath('categories/Limited/2/', target)).toEqual({
      path: 'categories/Limited/',
      exact: false,
    });
  });

  it('falls back to the category index for categories the target lacks', () => {
    expect(counterpartPath('categories/Modern/', target)).toEqual({
      path: 'categories/',
      exact: false,
    });
  });
});

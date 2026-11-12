import { describe, it, expect } from 'vitest';
import { langFromPath, localePath, stripLang } from '..';

describe('localePath', () => {
  it('keeps zh-tw at the site root and puts en under /en/', () => {
    expect(localePath('zh-tw')).toBe('/');
    expect(localePath('zh-tw', 'about/')).toBe('/about/');
    expect(localePath('en')).toBe('/en/');
    expect(localePath('en', '/about/')).toBe('/en/about/');
  });
});

describe('langFromPath', () => {
  it('detects /en and /en/... as en', () => {
    expect(langFromPath('/en')).toBe('en');
    expect(langFromPath('/en/')).toBe('en');
    expect(langFromPath('/en/about/')).toBe('en');
  });

  it('treats other paths, including en-prefixed slugs, as zh-tw', () => {
    expect(langFromPath('/')).toBe('zh-tw');
    expect(langFromPath('/english-guide/')).toBe('zh-tw');
  });
});

describe('stripLang', () => {
  it('removes the en prefix and the base', () => {
    expect(stripLang('/en/about/')).toBe('about/');
    expect(stripLang('/en/')).toBe('');
    expect(stripLang('/about/')).toBe('about/');
    expect(stripLang('/english-guide/')).toBe('english-guide/');
  });
});

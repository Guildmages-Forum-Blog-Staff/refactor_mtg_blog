export const LANGS = ['zh-tw', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'zh-tw';

/** BCP-47 tag for `<html lang>`, RSS `<language>`, JSON-LD `inLanguage`. */
export const HTML_LANG: Record<Lang, string> = { 'zh-tw': 'zh-TW', en: 'en' };

/** Locale passed to `Date#toLocaleDateString`. */
export const DATE_LOCALE: Record<Lang, string> = { 'zh-tw': 'zh-TW', en: 'en-US' };

/** Subdirectory under `src/content/posts/` holding each language's posts. */
export const POST_DIR: Record<Lang, string> = { 'zh-tw': 'zh_tw', en: 'en' };

// Read lazily: this module is also imported (via utils/posts) from
// astro.config.ts, where import.meta.env is not populated yet.
const base = (): string => import.meta.env.BASE_URL;

/**
 * URL path segment prepended after the base path: zh-TW lives at the site
 * root (keeps every pre-i18n URL valid), English under `en/`.
 */
export function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `${lang}/`;
}

/** `localePath('en', 'about/')` -> `/en/about/`; `localePath('zh-tw')` -> `/`. */
export function localePath(lang: Lang, path = ''): string {
  return `${base()}${langPrefix(lang)}${path.replace(/^\//, '')}`;
}

function relativeToBase(pathname: string): string {
  return pathname.startsWith(base()) ? pathname.slice(base().length) : pathname.replace(/^\//, '');
}

/** Language of a site pathname (`/en/...` -> `en`, anything else -> zh-tw). */
export function langFromPath(pathname: string): Lang {
  return /^en(\/|$)/.test(relativeToBase(pathname)) ? 'en' : DEFAULT_LANG;
}

/** Path relative to the base with any language prefix removed (`/en/about/` -> `about/`). */
export function stripLang(pathname: string): string {
  return relativeToBase(pathname).replace(/^en(\/|$)/, '');
}

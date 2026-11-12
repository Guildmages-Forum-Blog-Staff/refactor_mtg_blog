/** What exists in the target language, for deciding where the language toggle points. */
export interface LangIndex {
  /** Language-free post slugs (see `postSlug`). */
  slugs: ReadonlySet<string>;
  /** Category names that have at least one listed post. */
  categories: ReadonlySet<string>;
}

/** Pages built in every language. Paths are relative to the language root. */
const SHARED_PAGES = new Set(['', 'about/', 'contact/', 'calendar/', 'categories/']);

/**
 * The page in the other language that matches `path` (relative to the language
 * root, no leading slash, trailing slash kept). `exact` is false when no
 * matching page exists and the result is a fallback: the target language's
 * home page, or for an unknown category its category index.
 *
 * - shared pages map to themselves
 * - `authors/<id>/...` maps to that author's first page (every author has
 *   one in every language, but deeper pagination may not exist)
 * - `categories/<cat>/...` maps to the category's first page if the target
 *   has it, else the category index
 * - numeric pagination (`2/`) and posts missing in the target fall back home
 */
export function counterpartPath(path: string, target: LangIndex): { path: string; exact: boolean } {
  if (SHARED_PAGES.has(path)) return { path, exact: true };

  const [head, name] = path.split('/');
  if (head === 'authors' && name)
    return { path: `authors/${name}/`, exact: path === `authors/${name}/` };
  if (head === 'categories' && name) {
    return target.categories.has(decodeURIComponent(name))
      ? { path: `categories/${name}/`, exact: path === `categories/${name}/` }
      : { path: 'categories/', exact: false };
  }

  const slug = path.replace(/\/$/, '');
  if (target.slugs.has(slug)) return { path, exact: true };
  return { path: '', exact: false };
}

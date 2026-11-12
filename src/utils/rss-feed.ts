import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { HTML_LANG, localePath, type Lang } from '../i18n';
import { useTranslations } from '../i18n/ui';
import { getListedPosts } from './collections';
import { buildRssItems, resolveFeedSite, feedSelfHref, buildChannelData } from './rss';

const ATOM_XMLNS = { atom: 'http://www.w3.org/2005/Atom' };

/** The RSS feed for one language: `/rss.xml` (zh-tw) or `/en/rss.xml`. */
export async function languageFeed(context: APIContext, lang: Lang) {
  if (!context.site) {
    throw new Error('`site` must be set in astro.config.ts for the RSS feed.');
  }
  const t = useTranslations(lang);
  const posts = await getListedPosts(lang);
  // Channel <link> should point at the language's home (base path + prefix),
  // not the bare origin — on GitHub Pages the origin root is a different page.
  const home = localePath(lang);
  const siteWithBase = resolveFeedSite(home, context.site);
  return rss({
    title: t.siteTitle,
    description: t.siteDescription,
    site: siteWithBase,
    xmlns: ATOM_XMLNS,
    customData: buildChannelData(feedSelfHref(siteWithBase), HTML_LANG[lang]),
    items: buildRssItems(posts, home),
  });
}

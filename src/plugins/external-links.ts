import type { Options } from 'rehype-external-links';
import type { Element } from 'hast';

// Hosts that count as "us": links pointing here are internal navigation, not
// outbound, so they must NOT get external-link rel/target. Authors write
// absolute FQDN links for internal links (644 across 224 posts as of 2026-05),
// so excluding our own host prevents self-nofollow once the site moves back to
// guildmagesforum.tw. rehype-external-links has no host awareness of its own.
const SELF_HOSTS = new Set(['guildmagesforum.tw', 'www.guildmagesforum.tw']);

// Shared rehype-external-links config: imported by both astro.config.ts (live
// pipeline) and the test, so the attribute contract cannot drift between them.
export const externalLinksOptions: Options = {
  target: '_blank',
  rel: ['nofollow', 'noopener', 'noreferrer'],
  // `test` only runs on links already classified as absolute external URLs;
  // return false for our own host so internal links stay clean (no rel/target).
  test(element: Element) {
    const href = element.properties?.href;
    if (typeof href !== 'string') return false;
    try {
      return !SELF_HOSTS.has(new URL(href).hostname);
    } catch {
      return true;
    }
  },
};

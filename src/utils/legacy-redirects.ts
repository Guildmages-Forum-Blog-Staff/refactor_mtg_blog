import { readdirSync } from 'node:fs';

/**
 * Old Hexo author tag URLs (`/tags/<id>`, plus the lowercased form when it
 * differs) mapped to the new author pages. Built from the `*.yml` filenames
 * in `authorsDir` so new authors get a redirect without config edits. Reads
 * via `fs` because this runs from astro.config.ts, before `astro:content`.
 */
export function getAuthorTagRedirects(authorsDir: string): Record<string, string> {
  return Object.fromEntries(
    readdirSync(authorsDir)
      .filter((file) => file.endsWith('.yml'))
      .map((file) => file.slice(0, -'.yml'.length))
      .flatMap((id) => {
        const target = `/authors/${id}/`;
        const lower = id.toLowerCase();
        return lower === id
          ? [[`/tags/${id}`, target]]
          : [
              [`/tags/${id}`, target],
              [`/tags/${lower}`, target],
            ];
      }),
  );
}

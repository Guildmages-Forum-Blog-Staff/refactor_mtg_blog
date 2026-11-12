/** Post dates are written in Taiwan local time (UTC+8, no DST). */
export const SITE_TIME_ZONE = 'Asia/Taipei';

const OFFSET_MS = 8 * 60 * 60 * 1000;
const ISO_RE = /^(\d{4})-(\d{1,2})-(\d{1,2})[ T](\d{1,2}):(\d{2})(?::(\d{2}))?$/;
const US_RE = /^(\d{1,2})\/(\d{1,2})\/(\d{4}),?\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AP]M)$/i;

const taipei = (y: number, mo: number, d: number, h: number, mi: number, s: number) =>
  new Date(Date.UTC(y, mo - 1, d, h, mi, s) - OFFSET_MS);

/**
 * Read a frontmatter date as Taiwan local time. Handles quoted
 * `YYYY-MM-DD HH:mm:ss`, `M/D/YYYY, h:mm:ss AM`, and unquoted YAML timestamps
 * (which the YAML parser already turned into a Date read as UTC). Anything
 * else is passed through for `z.coerce.date()` to handle.
 */
export function parsePostDate(value: unknown): unknown {
  if (value instanceof Date) return new Date(value.getTime() - OFFSET_MS);
  if (typeof value !== 'string') return value;
  const v = value.trim();
  let m = ISO_RE.exec(v);
  if (m) return taipei(+m[1], +m[2], +m[3], +m[4], +m[5], +(m[6] ?? 0));
  m = US_RE.exec(v);
  if (m) {
    const h12 = +m[4] % 12;
    const h = m[7].toUpperCase() === 'PM' ? h12 + 12 : h12;
    return taipei(+m[3], +m[1], +m[2], h, +m[5], +(m[6] ?? 0));
  }
  return value;
}

/** Calendar year of a date in Taiwan. */
export const taipeiYear = (d: Date): number =>
  Number(d.toLocaleString('en-US', { timeZone: SITE_TIME_ZONE, year: 'numeric' }));

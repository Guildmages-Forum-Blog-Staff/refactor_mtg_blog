const WEEKDAY_SHORT = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
const TAIPEI_OFFSET_MS = 8 * 60 * 60 * 1000;

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * Shift an instant so UTC getters read Taipei wall-clock fields, regardless of
 * the build machine's own timezone (CI runs in UTC; local dev may not).
 * Asia/Taipei has no DST, so a fixed +8h offset is exact year-round.
 */
function toTaipei(d: Date): Date {
  return new Date(d.getTime() + TAIPEI_OFFSET_MS);
}

/**
 * For all-day events the iCal DTEND is exclusive (the day after the last day),
 * and node-ical does not adjust it. The inclusive last day is therefore
 * end - 1 day. For timed events the end is the actual end instant, used as-is.
 */
function inclusiveEnd(start: Date, end: Date, allDay: boolean): Date {
  if (!allDay) return end;
  const d = new Date(end.getTime());
  d.setUTCDate(d.getUTCDate() - 1);
  return d.getTime() < start.getTime() ? start : d;
}

function dayStart(d: Date): number {
  const t = toTaipei(d);
  return Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
}

function sameDay(a: Date, b: Date): boolean {
  return dayStart(a) === dayStart(b);
}

/** Compose e.g. "2026年11月13日週五", optionally dropping the leading year/month. */
function ymd(
  d: Date,
  { year = true, month = true }: { year?: boolean; month?: boolean } = {},
): string {
  const t = toTaipei(d);
  let s = '';
  if (year) s += `${t.getUTCFullYear()}年`;
  if (month) s += `${t.getUTCMonth() + 1}月`;
  s += `${t.getUTCDate()}日${WEEKDAY_SHORT[t.getUTCDay()]}`;
  return s;
}

function time(d: Date): string {
  const t = toTaipei(d);
  return `${pad2(t.getUTCHours())}:${pad2(t.getUTCMinutes())}`;
}

/**
 * Render an event's date as display text. Multi-day events become a range with
 * repeated leading components (year, then month) collapsed onto the end date.
 */
export function formatEventDate(start: Date, end: Date, allDay: boolean): string {
  const last = inclusiveEnd(start, end, allDay);
  const startStr = ymd(start);

  if (sameDay(start, last)) {
    return allDay ? startStr : `${startStr} ${time(start)} – ${time(end)}`;
  }

  const startT = toTaipei(start);
  const lastT = toTaipei(last);
  const crossYear = lastT.getUTCFullYear() !== startT.getUTCFullYear();
  const endStr = ymd(last, {
    year: crossYear,
    month: crossYear || lastT.getUTCMonth() !== startT.getUTCMonth(),
  });

  if (allDay) return `${startStr} – ${endStr}`;
  return `${startStr} ${time(start)} – ${endStr} ${time(end)}`;
}

export interface EventBadge {
  month: string;
  /** Always the start day; the badge stays anchored to the event's first day. */
  day: string;
  /** True when the event spans more than one day (template adds a marker bar). */
  multiDay: boolean;
  /** Inclusive day count, e.g. 11/13–15 -> 3. Used for the "共 N 天" hint. */
  spanDays: number;
}

/**
 * Date badge content. The big number is always the start day, regardless of
 * duration; multi-day events are distinguished purely by style (see the bottom
 * bar in calendar.astro), with `spanDays` feeding an accessible "共 N 天" title.
 */
export function eventBadge(start: Date, end: Date, allDay: boolean): EventBadge {
  const last = inclusiveEnd(start, end, allDay);
  const spanDays = Math.round((dayStart(last) - dayStart(start)) / 86_400_000) + 1;
  const startT = toTaipei(start);
  return {
    month: `${startT.getUTCMonth() + 1}月`,
    day: String(startT.getUTCDate()),
    multiDay: spanDays > 1,
    spanDays,
  };
}

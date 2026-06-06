const WEEKDAY_SHORT = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * For all-day events the iCal DTEND is exclusive (the day after the last day),
 * and node-ical does not adjust it. The inclusive last day is therefore
 * end - 1 day. For timed events the end is the actual end instant, used as-is.
 */
function inclusiveEnd(start: Date, end: Date, allDay: boolean): Date {
  if (!allDay) return end;
  const d = new Date(end.getTime());
  d.setDate(d.getDate() - 1);
  return d.getTime() < start.getTime() ? start : d;
}

function dayStart(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function sameDay(a: Date, b: Date): boolean {
  return dayStart(a) === dayStart(b);
}

/** Compose e.g. "2026年11月13日週五", optionally dropping the leading year/month. */
function ymd(
  d: Date,
  { year = true, month = true }: { year?: boolean; month?: boolean } = {},
): string {
  let s = '';
  if (year) s += `${d.getFullYear()}年`;
  if (month) s += `${d.getMonth() + 1}月`;
  s += `${d.getDate()}日${WEEKDAY_SHORT[d.getDay()]}`;
  return s;
}

function time(d: Date): string {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
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

  const crossYear = last.getFullYear() !== start.getFullYear();
  const endStr = ymd(last, {
    year: crossYear,
    month: crossYear || last.getMonth() !== start.getMonth(),
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
  return {
    month: `${start.getMonth() + 1}月`,
    day: String(start.getDate()),
    multiDay: spanDays > 1,
    spanDays,
  };
}

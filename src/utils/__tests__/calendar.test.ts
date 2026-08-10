import { describe, it, expect } from 'vitest';
import { formatEventDate, eventBadge } from '../calendar';

// node-ical parses VALUE=DATE all-day events to build-machine-local midnight
// (no timezone of its own), which calendar.astro re-anchors to UTC midnight of
// the same calendar day before calendar.ts ever sees it (see normalizeAllDay
// in calendar.astro) — so these tests construct all-day dates the same way
// (`new Date(Date.UTC(y, m, d))`) to match what calendar.ts actually receives,
// and stay timezone-independent regardless of what TZ the test runner is in.
// DTEND is exclusive (the day AFTER the last day).

describe('formatEventDate', () => {
  it('renders a single-day all-day event as one date (exclusive end collapses)', () => {
    // DTSTART 2026-11-13, DTEND 2026-11-14 (exclusive) -> runs only 11/13
    const start = new Date(Date.UTC(2026, 10, 13));
    const end = new Date(Date.UTC(2026, 10, 14));
    expect(formatEventDate(start, end, true)).toBe('2026年11月13日週五');
  });

  it('renders a multi-day all-day event as a range, collapsing repeated year/month', () => {
    // DTSTART 2026-11-13, DTEND 2026-11-16 (exclusive) -> runs 11/13, 14, 15
    const start = new Date(Date.UTC(2026, 10, 13));
    const end = new Date(Date.UTC(2026, 10, 16));
    expect(formatEventDate(start, end, true)).toBe('2026年11月13日週五 – 15日週日');
  });

  it('keeps the month on the end date when the range crosses a month', () => {
    // DTSTART 2026-11-29, DTEND 2026-12-02 (exclusive) -> last day 12/1
    const start = new Date(Date.UTC(2026, 10, 29));
    const end = new Date(Date.UTC(2026, 11, 2));
    expect(formatEventDate(start, end, true)).toBe('2026年11月29日週日 – 12月1日週二');
  });

  it('keeps the year on the end date when the range crosses a year', () => {
    // DTSTART 2026-12-31, DTEND 2027-01-03 (exclusive) -> last day 2027-01-02
    const start = new Date(Date.UTC(2026, 11, 31));
    const end = new Date(Date.UTC(2027, 0, 3));
    expect(formatEventDate(start, end, true)).toBe('2026年12月31日週四 – 2027年1月2日週六');
  });

  it('renders a timed single-day event with start and end times', () => {
    // Real node-ical TZID-parsed events carry an explicit offset and resolve to
    // a fixed instant, unlike bare `new Date(y, m, d, h, mi)` (machine-local,
    // would make this assertion depend on the runner's own timezone). Using an
    // explicit +08:00 offset here pins the instant and exercises the Taipei
    // rendering regardless of what timezone the test runs in.
    const start = new Date('2026-11-13T14:00:00+08:00');
    const end = new Date('2026-11-13T16:30:00+08:00');
    expect(formatEventDate(start, end, false)).toBe('2026年11月13日週五 14:00 – 16:30');
  });
});

describe('eventBadge', () => {
  it('shows only the start day for a single-day event', () => {
    const start = new Date(Date.UTC(2026, 10, 13));
    const end = new Date(Date.UTC(2026, 10, 14));
    expect(eventBadge(start, end, true)).toEqual({
      month: '11月',
      day: '13',
      multiDay: false,
      spanDays: 1,
    });
  });

  it('keeps the start day but flags a multi-day event within one month', () => {
    // 11/13 – 11/15 inclusive -> 3 days, badge still anchors to 13
    const start = new Date(Date.UTC(2026, 10, 13));
    const end = new Date(Date.UTC(2026, 10, 16));
    expect(eventBadge(start, end, true)).toEqual({
      month: '11月',
      day: '13',
      multiDay: true,
      spanDays: 3,
    });
  });

  it('keeps the start day and span count when the range crosses a month', () => {
    // 11/29 – 12/1 inclusive -> 3 days
    const start = new Date(Date.UTC(2026, 10, 29));
    const end = new Date(Date.UTC(2026, 11, 2));
    expect(eventBadge(start, end, true)).toEqual({
      month: '11月',
      day: '29',
      multiDay: true,
      spanDays: 3,
    });
  });

  it('keeps the start day and span count when the range crosses a year', () => {
    // 12/31 – 1/2 inclusive -> 3 days
    const start = new Date(Date.UTC(2026, 11, 31));
    const end = new Date(Date.UTC(2027, 0, 3));
    expect(eventBadge(start, end, true)).toEqual({
      month: '12月',
      day: '31',
      multiDay: true,
      spanDays: 3,
    });
  });
});

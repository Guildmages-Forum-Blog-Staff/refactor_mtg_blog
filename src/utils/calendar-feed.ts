import ical, { type ParameterValue, type VEvent } from 'node-ical';

const ICAL_URL =
  'https://calendar.google.com/calendar/ical/2782072e99e58fdfd8359b71f7fcd3690ac4fd088727d1d47be063132a41f487%40group.calendar.google.com/public/basic.ics';

export interface CalEvent {
  uid: string;
  /** Undefined when the event has no title; the page shows a localized placeholder. */
  summary?: string;
  start: Date;
  end: Date;
  allDay: boolean;
  description?: string;
  location?: string;
  url?: string;
}

function paramValueToString(v: ParameterValue | undefined): string | undefined {
  if (v == null) return undefined;
  return typeof v === 'string' ? v : v.val;
}

/**
 * node-ical builds VALUE=DATE (all-day) events as build-machine-local midnight,
 * with no timezone info of its own — so the same event parses to a different
 * absolute instant depending on what timezone the build happens to run in.
 * Re-anchor to UTC midnight of the same calendar day (read via local getters,
 * which recover the intended Y/M/D on any machine) so every downstream
 * consumer sees a fixed instant instead of a floating one.
 */
function normalizeAllDay(d: Date): Date {
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
}

async function fetchEvents(): Promise<CalEvent[]> {
  try {
    const data = await Promise.race([
      ical.async.fromURL(ICAL_URL),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('iCal fetch timed out')), 10_000),
      ),
    ]);

    return Object.values(data)
      .filter((e): e is VEvent => !!e && e.type === 'VEVENT' && e.start instanceof Date)
      .map((e) => {
        const allDay = e.datetype === 'date';
        const rawEnd = e.end instanceof Date ? e.end : e.start;
        return {
          uid: e.uid,
          summary: paramValueToString(e.summary),
          start: allDay ? normalizeAllDay(e.start) : e.start,
          end: allDay ? normalizeAllDay(rawEnd) : rawEnd,
          allDay,
          description: paramValueToString(e.description),
          location: paramValueToString(e.location),
          url: e.url,
        };
      })
      .sort((a, b) => a.start.valueOf() - b.start.valueOf());
  } catch (err) {
    console.error('Failed to fetch calendar:', err);
    return [];
  }
}

// Memoized: the zh-tw and en calendar pages share one fetch per build.
let eventsPromise: Promise<CalEvent[]> | undefined;

/** Events from the public Google Calendar, sorted by start; [] if the fetch fails. */
export function getCalendarEvents(): Promise<CalEvent[]> {
  eventsPromise ??= fetchEvents();
  return eventsPromise;
}

import { describe, it, expect } from 'vitest';
import { parsePostDate, taipeiYear } from '../post-date';

const iso = (v: unknown) => (parsePostDate(v) as Date).toISOString();

describe('parsePostDate', () => {
  it('reads quoted ISO-like strings as Taipei time', () => {
    expect(iso('2023-09-05 14:24:59')).toBe('2023-09-05T06:24:59.000Z');
    expect(iso('2024-1-05 01:02:03')).toBe('2024-01-04T17:02:03.000Z');
  });

  it('reads US-style AM/PM strings as Taipei time', () => {
    expect(iso('9/5/2023, 2:24:59 PM')).toBe('2023-09-05T06:24:59.000Z');
    expect(iso('12/1/2023, 12:05:00 AM')).toBe('2023-11-30T16:05:00.000Z');
    expect(iso('12/1/2023, 12:05:00 PM')).toBe('2023-12-01T04:05:00.000Z');
  });

  it('shifts unquoted YAML timestamps (parsed as UTC) to Taipei', () => {
    expect(iso(new Date('2023-09-05T14:24:59Z'))).toBe('2023-09-05T06:24:59.000Z');
  });

  it('passes through anything else', () => {
    expect(parsePostDate('2023-09-05T14:24:59+08:00')).toBe('2023-09-05T14:24:59+08:00');
    expect(parsePostDate(undefined)).toBeUndefined();
  });
});

describe('taipeiYear', () => {
  it('uses the Taiwan calendar year', () => {
    expect(taipeiYear(new Date('2023-12-31T17:00:00Z'))).toBe(2024);
  });
});

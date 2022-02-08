export type DateTimeString = string & { type: 'dateTime' };

export function toDateTimeString(value: Date): DateTimeString {
  return value.toISOString() as DateTimeString;
}

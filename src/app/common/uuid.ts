import { v4, validate, version } from 'uuid';

export type Uuid = string & { type: 'uuid' };

export function createUuid(): Uuid {
  return v4() as Uuid;
}

export function isUuid(value: string): value is Uuid {
  return validate(value) && version(value) === 4;
}

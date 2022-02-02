import { DateTimeString } from 'src/app/common/date-time';
import { Uuid } from 'src/app/common/uuid';
import { ObjectStoreToken } from './object-store-token.type';

export interface Tournament {
  publicKey: Uuid;
  name: string;
  dateModified: DateTimeString;
  dateCreated: DateTimeString;
}

export const TOURNAMENTS_OBJECT_STORE_TOKEN: ObjectStoreToken<Tournament> = {
  name: 'tournaments',
};

import { DbConfig } from './core/data/config/db-config.type';

export const AGARI_DB_CONFIG: DbConfig = {
  name: 'agari-db',
  version: 1,
  migrations: {
    1: (database) => database.createObjectStore('tournaments', { keyPath: 'publicKey' }),
  },
};

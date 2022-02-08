import { InjectionToken } from '@angular/core';
import { DbConfig } from './db-config.type';

export const DB_CONFIG: InjectionToken<DbConfig> = new InjectionToken<DbConfig>('db-config');

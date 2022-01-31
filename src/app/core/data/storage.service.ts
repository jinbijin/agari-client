import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DB_CONFIG } from './config/db-config.token';
import { DbConfig } from './config/db-config.type';
import { IndexedDbService } from './indexed-db.service';

@Injectable()
export class StorageService {
  #idb!: IDBDatabase;

  constructor(
    @Inject(DB_CONFIG) private readonly dbConfig: DbConfig,
    private readonly indexedDbService: IndexedDbService
  ) {}

  initialize(): Observable<any> {
    return this.indexedDbService
      .openDatabase(this.dbConfig.name, this.dbConfig.version, this.dbConfig.migrations)
      .pipe(tap((database) => (this.#idb = database)));
  }
}

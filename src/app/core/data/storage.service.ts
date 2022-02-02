import { Inject, Injectable } from '@angular/core';
import { ignoreElements, Observable, tap } from 'rxjs';
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

  initialize(): Observable<never> {
    return this.indexedDbService
      .openDatabase(this.dbConfig.name, this.dbConfig.version, this.dbConfig.migrations)
      .pipe(
        tap((database) => (this.#idb = database)),
        ignoreElements()
      );
  }

  getAll<T>(storeName: string): Observable<T[]> {
    return new Observable<T[]>((subscriber) => {
      const transaction = this.#idb.transaction(storeName, 'readonly');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();

      request.onerror = function (event: Event) {
        subscriber.error(this.error?.name);
      };
      request.onsuccess = function (event: Event) {
        subscriber.next(this.result);
        subscriber.complete();
      };

      return () => transaction.abort();
    });
  }
}

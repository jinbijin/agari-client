import { Inject, Injectable } from '@angular/core';
import { ignoreElements, Observable, Subscriber, tap } from 'rxjs';
import { DB_CONFIG } from './config/db-config.token';
import { DbConfig } from './config/db-config.type';
import { IndexedDbService } from './indexed-db.service';
import { ObjectStoreToken } from './object-stores/object-store-token.type';

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

  getAll<T>(storeToken: ObjectStoreToken<T>): Observable<T[]> {
    return new Observable<T[]>((subscriber) => {
      const transaction = this.#idb.transaction(storeToken.name, 'readonly');
      const objectStore = transaction.objectStore(storeToken.name);
      const request = objectStore.getAll();

      request.onerror = function (event: Event) {
        subscriber.error(this.error?.name);
      };
      request.onsuccess = function (event: Event) {
        subscriber.next(this.result);
        subscriber.complete();
      };
    });
  }

  add<T>(storeToken: ObjectStoreToken<T>, value: T): Observable<void> {
    return new Observable<void>((subscriber) => {
      const transaction = this.startTransaction(subscriber, storeToken.name, 'readwrite');
      const objectStore = transaction.objectStore(storeToken.name);
      const request = objectStore.add(value);

      request.onerror = function (event: Event) {
        subscriber.error(this.error?.name);
      };
    });
  }

  put<T>(storeToken: ObjectStoreToken<T>, value: T): Observable<void> {
    return new Observable<void>((subscriber) => {
      const transaction = this.startTransaction(subscriber, storeToken.name, 'readwrite');
      const objectStore = transaction.objectStore(storeToken.name);
      const request = objectStore.put(value);

      request.onerror = function (event: Event) {
        subscriber.error(this.error?.name);
      };
    });
  }

  delete<T>(storeToken: ObjectStoreToken<T>, key: string): Observable<void> {
    return new Observable<void>((subscriber) => {
      const transaction = this.startTransaction(subscriber, storeToken.name, 'readwrite');
      const objectStore = transaction.objectStore(storeToken.name);
      const request = objectStore.delete(key);

      request.onerror = function (event: Event) {
        subscriber.error(this.error?.name);
      };
    });
  }

  private startTransaction(
    subscriber: Subscriber<any>,
    storeName: string,
    mode?: IDBTransactionMode
  ): IDBTransaction {
    const transaction = this.#idb.transaction(storeName, mode);
    transaction.oncomplete = function (event) {
      subscriber.next();
      subscriber.complete();
    };

    return transaction;
  }
}

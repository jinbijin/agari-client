import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class IndexedDbService {
  #idbFactory: IDBFactory;

  constructor() {
    const idbFactory = window?.indexedDB;
    if (!idbFactory) {
      throw new Error("Browser doesn't support IndexedDB!");
    }
    this.#idbFactory = idbFactory;
  }

  openDatabase(
    name: string,
    version?: number,
    onUpgradeNeeded?: Record<number, (database: IDBDatabase) => void>
  ): Observable<IDBDatabase> {
    return new Observable((subscriber) => {
      const request = this.#idbFactory.open(name, version);

      request.onerror = function (event: Event) {
        event.stopPropagation();
        subscriber.error(this.error?.name);
      };
      request.onsuccess = function (event: Event) {
        subscriber.next(this.result);
        subscriber.complete();
      };
      request.onupgradeneeded = function (event: IDBVersionChangeEvent) {
        if (onUpgradeNeeded) {
          for (const [key, value] of [...Object.entries(onUpgradeNeeded)].sort((x, y) => +x[0] - +y[0])) {
            if (event.oldVersion < +key) {
              value(this.result);
            }
          }
        }
      };
    });
  }

  deleteDatabase(name: string): Observable<never> {
    return new Observable((subscriber) => {
      const request = this.#idbFactory.deleteDatabase(name);

      request.onerror = function (event: Event) {
        event.stopPropagation();
        subscriber.error(request.error?.name);
      };
      request.onsuccess = function (event) {
        subscriber.complete();
      };
    });
  }
}

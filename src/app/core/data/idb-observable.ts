import { Observable } from 'rxjs';

export function wrapIdbRequest<TResult>(dbRequestFactory: () => IDBRequest<TResult>): Observable<TResult> {
  return new Observable<TResult>((source) => {
    const request = dbRequestFactory();
    request.onerror = function (event: Event) {
      event.stopPropagation();
      source.error(request.error?.name);
    };
    request.onsuccess = function (event) {
      source.next(request.result);
      source.complete();
    };
    return source;
  });
}

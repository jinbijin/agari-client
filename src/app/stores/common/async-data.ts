interface AsyncDataBusy<T> {
  status: 'BUSY';
  value?: T;
  loadingMessage: string;
  errorMessage?: string;
}

interface AsyncDataFailed<T> {
  status: 'FAILED';
  value?: T;
  loadingMessage: undefined;
  errorMessage: string;
}

interface AsyncDataDone<T> {
  status: 'DONE';
  value: T;
}

export type AsyncData<T> = AsyncDataBusy<T> | AsyncDataFailed<T> | AsyncDataDone<T>;

export type RequiredAsyncData<T> = AsyncData<T> & { value: T };

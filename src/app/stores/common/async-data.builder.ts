import { AsyncData } from './async-data';

export class AsyncDataBuilder<TData> {
  private constructor(private readonly value: AsyncData<TData>) {}

  static from<T>(value: AsyncData<T>): AsyncDataBuilder<T> {
    return new AsyncDataBuilder(value);
  }

  map<TTarget>(mapFn: (value: TData) => TTarget): AsyncDataBuilder<TTarget> {
    switch (this.value.status) {
      case 'BUSY':
        return new AsyncDataBuilder({
          status: 'BUSY',
          value: this.value.value ? mapFn(this.value.value) : undefined,
          loadingMessage: this.value.loadingMessage,
          errorMessage: this.value.errorMessage,
        });
      case 'DONE':
        return new AsyncDataBuilder({
          status: 'DONE',
          value: mapFn(this.value.value),
        });
      case 'FAILED':
        return new AsyncDataBuilder({
          status: 'FAILED',
          value: this.value.value ? mapFn(this.value.value) : undefined,
          loadingMessage: this.value.loadingMessage,
          errorMessage: this.value.errorMessage,
        });
    }
  }

  toAsyncData(): AsyncData<TData> {
    return this.value;
  }
}

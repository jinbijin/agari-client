export interface DbConfig {
  name: string;
  version: number;
  migrations: Record<number, (database: IDBDatabase) => void>;
}

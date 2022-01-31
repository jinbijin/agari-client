import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { DB_CONFIG } from './config/db-config.token';
import { DbConfig } from './config/db-config.type';
import { IndexedDbService } from './indexed-db.service';
import { StorageService } from './storage.service';

@NgModule({})
export class DataModule {
  static forRoot(dbConfig: DbConfig): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [
        IndexedDbService,
        StorageService,
        { provide: DB_CONFIG, useValue: dbConfig },
        {
          provide: APP_INITIALIZER,
          useFactory: (storageService: StorageService) => () => storageService.initialize(),
          deps: [StorageService],
          multi: true,
        },
      ],
    };
  }
}

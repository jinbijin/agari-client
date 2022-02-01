import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgariComponent } from './agari.component';
import { DataModule } from './core/data/data.module';
import { PwaModule } from './core/pwa/pwa.module';
import { AgariRoutingModule } from './routing/agari-routing.module';

@NgModule({
  declarations: [AgariComponent],
  imports: [
    BrowserModule,
    AgariRoutingModule,
    PwaModule.forRoot(),
    DataModule.forRoot({
      name: 'agari-db',
      version: 1,
      migrations: {
        1: (database) => database.createObjectStore('tournaments', { keyPath: 'publicKey' }),
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AgariComponent],
})
export class AgariModule {}

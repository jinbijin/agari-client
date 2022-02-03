import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AGARI_DB_CONFIG } from './agari.db-config';
import { AGARI_NGXS_CONFIG } from './agari.ngxs-config';
import { DataModule } from './core/data/data.module';
import { PwaModule } from './core/pwa/pwa.module';
import { AgariRootComponent } from './routing/agari-root.component';
import { AgariRootModule } from './routing/agari-root.module';
import { AgariRoutingModule } from './routing/agari-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AgariRoutingModule,
    PwaModule.forRoot(),
    DataModule.forRoot(AGARI_DB_CONFIG),
    NgxsModule.forRoot([], AGARI_NGXS_CONFIG),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    AgariRootModule,
  ],
  providers: [],
  bootstrap: [AgariRootComponent],
})
export class AgariModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AgariComponent } from './agari.component';
import { AGARI_DB_CONFIG } from './agari.db-config';
import { AGARI_NGXS_CONFIG } from './agari.ngxs-config';
import { DataModule } from './core/data/data.module';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';
import { PwaModule } from './core/pwa/pwa.module';
import { AgariRoutingModule } from './routing/agari-routing.module';

@NgModule({
  declarations: [AgariComponent],
  imports: [
    BrowserModule,
    AgariRoutingModule,
    PwaModule.forRoot(),
    DataModule.forRoot(AGARI_DB_CONFIG),
    NgxsModule.forRoot([], AGARI_NGXS_CONFIG),
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AgariComponent],
})
export class AgariModule {}

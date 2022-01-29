import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgariRoutingModule } from './agari-routing.module';
import { AgariComponent } from './agari.component';
import { PwaModule } from './core/pwa/pwa.module';

@NgModule({
  declarations: [AgariComponent],
  imports: [BrowserModule, AgariRoutingModule, PwaModule.forRoot(), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AgariComponent],
})
export class AgariModule {}

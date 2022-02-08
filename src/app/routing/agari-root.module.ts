import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgariFooterModule } from '../modules/page-layout/agari-footer/agari-footer.module';
import { HeaderModule } from '../modules/page-layout/agari-header/agari-header.module';
import { AgariRootComponent } from './agari-root.component';
import { AgariRoutingModule } from './agari-routing.module';

@NgModule({
  declarations: [AgariRootComponent],
  imports: [CommonModule, AgariRoutingModule, HeaderModule, AgariFooterModule],
  exports: [AgariRootComponent],
})
export class AgariRootModule {}

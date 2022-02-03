import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgariFooterComponent } from './agari-footer.component';

@NgModule({
  declarations: [AgariFooterComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [AgariFooterComponent],
})
export class AgariFooterModule {}

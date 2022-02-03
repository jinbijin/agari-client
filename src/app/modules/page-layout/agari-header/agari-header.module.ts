import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgariHeaderComponent } from './agari-header.component';

@NgModule({
  declarations: [AgariHeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [AgariHeaderComponent],
})
export class HeaderModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimeModule } from './date-time/date-time.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DateTimeModule],
  exports: [DateTimeModule],
})
export class SharedModule {}

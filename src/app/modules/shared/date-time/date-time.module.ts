import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RelativeToNowPipe } from './relative-to-now.pipe';

@NgModule({
  declarations: [RelativeToNowPipe],
  imports: [CommonModule],
  exports: [RelativeToNowPipe],
})
export class DateTimeModule {}

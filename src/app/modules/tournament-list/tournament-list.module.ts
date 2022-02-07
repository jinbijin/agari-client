import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TournamentListComponent } from './tournament-list.component';

@NgModule({
  declarations: [TournamentListComponent],
  imports: [CommonModule, MatListModule],
  exports: [TournamentListComponent],
})
export class TournamentListModule {}

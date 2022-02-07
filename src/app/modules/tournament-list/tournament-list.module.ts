import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { TournamentListComponent } from './tournament-list.component';

@NgModule({
  declarations: [TournamentListComponent],
  imports: [CommonModule, SharedModule, MatListModule],
  exports: [TournamentListComponent],
})
export class TournamentListModule {}

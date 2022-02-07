import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../shared/shared.module';
import { TournamentListComponent } from './tournament-list.component';

@NgModule({
  declarations: [TournamentListComponent],
  imports: [CommonModule, SharedModule, MatCardModule, MatProgressBarModule],
  exports: [TournamentListComponent],
})
export class TournamentListModule {}

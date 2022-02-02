import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentOverviewComponent } from './tournament-overview.component';

@NgModule({
  declarations: [
    TournamentOverviewComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TournamentOverviewComponent,
  ]
})
export class TournamentOverviewModule { }

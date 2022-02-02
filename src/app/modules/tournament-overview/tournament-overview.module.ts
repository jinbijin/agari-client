import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TournamentStoreModule } from 'src/app/stores/tournament/tournament.module';
import { TournamentOverviewComponent } from './tournament-overview.component';

@NgModule({
  declarations: [TournamentOverviewComponent],
  imports: [CommonModule, TournamentStoreModule],
  exports: [TournamentOverviewComponent],
})
export class TournamentOverviewModule {}

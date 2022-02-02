import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TournamentOverviewModule } from '../../../modules/tournament-overview/tournament-overview.module';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';

@NgModule({
  declarations: [TournamentComponent],
  imports: [CommonModule, TournamentRoutingModule, TournamentOverviewModule],
})
export class TournamentModule {}

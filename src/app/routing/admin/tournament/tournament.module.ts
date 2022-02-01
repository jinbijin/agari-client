import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverviewModule } from 'src/app/tournament/overview/overview.module';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';

@NgModule({
  declarations: [TournamentComponent],
  imports: [CommonModule, TournamentRoutingModule, OverviewModule],
})
export class TournamentModule {}

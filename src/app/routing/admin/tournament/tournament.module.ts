import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TournamentOverviewModule } from '../../../modules/tournament-overview/tournament-overview.module';
import { TournamentPageComponent } from './tournament-page.component';
import { TournamentRoutingModule } from './tournament-routing.module';

@NgModule({
  declarations: [TournamentPageComponent],
  imports: [CommonModule, TournamentRoutingModule, TournamentOverviewModule],
})
export class TournamentModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TournamentCreatorModule } from 'src/app/modules/tournament-creator/tournament-creator.module';
import { TournamentListModule } from 'src/app/modules/tournament-list/tournament-list.module';
import { TournamentStoreModule } from 'src/app/stores/tournament/tournament.module';
import { TournamentPageComponent } from './tournament-page.component';
import { TournamentRoutingModule } from './tournament-routing.module';

@NgModule({
  declarations: [TournamentPageComponent],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    TournamentStoreModule,
    TournamentListModule,
    TournamentCreatorModule,
  ],
})
export class TournamentModule {}

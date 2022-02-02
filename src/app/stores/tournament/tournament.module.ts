import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TournamentState } from './tournament.state';

@NgModule({
  imports: [NgxsModule.forFeature([TournamentState])],
  exports: [NgxsModule],
})
export class TournamentStoreModule {}

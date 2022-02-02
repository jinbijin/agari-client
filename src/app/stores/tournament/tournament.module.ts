import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DataModule } from 'src/app/core/data/data.module';
import { TournamentState } from './tournament.state';

@NgModule({
  imports: [DataModule, NgxsModule.forFeature([TournamentState])],
  exports: [NgxsModule],
})
export class TournamentStoreModule {}

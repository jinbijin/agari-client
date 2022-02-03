import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentPageComponent } from './tournament-page.component';

const routes: Routes = [{ path: '', component: TournamentPageComponent, data: { title: 'Tournaments' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}

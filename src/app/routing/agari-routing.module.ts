import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tournament', pathMatch: 'full' },
  {
    path: 'tournament',
    loadChildren: async () => (await import('./admin/tournament/tournament.module')).TournamentModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AgariRoutingModule {}

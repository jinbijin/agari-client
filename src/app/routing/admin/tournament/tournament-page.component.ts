import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TournamentStateModel, TOURNAMENT_STATE_TOKEN } from 'src/app/stores/tournament/tournament.state';

@Component({
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.scss'],
})
export class TournamentPageComponent {
  @Select(TOURNAMENT_STATE_TOKEN)
  tournaments$!: Observable<TournamentStateModel>;
}

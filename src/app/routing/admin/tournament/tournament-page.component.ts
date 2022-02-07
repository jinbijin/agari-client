import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TournamentState, TournamentStateModel } from 'src/app/stores/tournament/tournament.state';

@Component({
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.scss'],
})
export class TournamentPageComponent {
  @Select(TournamentState.tournaments)
  tournaments$!: Observable<TournamentStateModel>;
}

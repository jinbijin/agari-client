import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Create } from 'src/app/stores/tournament/tournament.actions';

@Component({
  selector: 'agari-tournament-overview',
  templateUrl: './tournament-overview.component.html',
  styleUrls: ['./tournament-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentOverviewComponent {
  constructor(private readonly store: Store) {}

  create(): void {
    this.store.dispatch(new Create('test'));
  }
}

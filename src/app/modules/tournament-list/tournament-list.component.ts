import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Tournament } from 'src/app/core/data/object-stores/tournaments.object-store';
import { AsyncData, RequiredAsyncData } from 'src/app/stores/common/async-data';
import { Delete } from 'src/app/stores/tournament/tournament.actions';

@Component({
  selector: 'agari-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentListComponent {
  @Input() tournaments!: AsyncData<RequiredAsyncData<Tournament>[]>;

  constructor(private readonly store: Store) {}

  remove(tournament: Tournament): void {
    this.store.dispatch(new Delete(tournament.publicKey));
  }
}

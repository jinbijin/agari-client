import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tournament } from 'src/app/core/data/object-stores/tournaments.object-store';
import { AsyncData } from 'src/app/stores/common/async-data';

@Component({
  selector: 'agari-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentListComponent {
  @Input() tournaments!: AsyncData<AsyncData<Tournament>[]>;
}

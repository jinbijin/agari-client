import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'agari-tournament-overview',
  templateUrl: './tournament-overview.component.html',
  styleUrls: ['./tournament-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentOverviewComponent {}

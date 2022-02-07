import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Store } from '@ngxs/store';
import { Create } from 'src/app/stores/tournament/tournament.actions';

@Component({
  selector: 'agari-tournament-creator',
  templateUrl: './tournament-creator.component.html',
  styleUrls: ['./tournament-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentCreatorComponent {
  readonly nameControl: FormControl = new FormControl(null, [Validators.required]);

  @ViewChild(MatExpansionPanel) expansionPanel!: MatExpansionPanel;

  constructor(private readonly store: Store) {}

  submit(): void {
    if (!this.nameControl.valid) {
      this.nameControl.markAsTouched();
      return;
    }

    this.store.dispatch(new Create(this.nameControl.value));
    this.nameControl.reset();
    this.expansionPanel.close();
  }
}

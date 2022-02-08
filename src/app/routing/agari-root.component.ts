import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'agari-root',
  templateUrl: './agari-root.component.html',
  styleUrls: ['./agari-root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgariRootComponent {
  constructor() {}
}

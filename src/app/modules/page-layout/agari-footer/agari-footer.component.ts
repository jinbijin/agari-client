import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'footer[agariFooter]',
  templateUrl: './agari-footer.component.html',
  styleUrls: ['./agari-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgariFooterComponent {}

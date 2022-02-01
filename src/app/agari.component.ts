import { Component } from '@angular/core';
import { UpdateNotificationService } from './core/pwa/update-notification.service';

@Component({
  selector: 'agari-root',
  templateUrl: './agari.component.html',
  styleUrls: ['./agari.component.scss'],
})
export class AgariComponent {
  constructor(private readonly updateNotificationService: UpdateNotificationService) {}
}

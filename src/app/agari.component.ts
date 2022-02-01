import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { UpdateNotificationService } from './core/pwa/update-notification.service';

@Component({
  selector: 'agari-root',
  templateUrl: './agari.component.html',
  styleUrls: ['./agari.component.scss'],
})
export class AgariComponent implements OnInit {
  title?: string;

  constructor(
    private readonly updateNotificationService: UpdateNotificationService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        tap((data) => (this.title = data['title']))
      )
      .subscribe();
  }
}

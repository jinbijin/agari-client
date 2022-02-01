import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { filter, from, switchMap, tap } from 'rxjs';

@Injectable()
export class UpdateNotificationService {
  constructor(private readonly updates: SwUpdate, private readonly snackBar: MatSnackBar) {}

  initialize(): void {
    this.updates.versionUpdates
      .pipe(
        tap((event) => {
          switch (event.type) {
            case 'VERSION_READY':
              const snackBarRef = this.snackBar.open(
                'An update to a new version is ready to be installed.',
                'Install'
              );
              snackBarRef
                .onAction()
                .pipe(
                  switchMap(() => from(this.updates.activateUpdate())),
                  filter((x) => x),
                  tap(() => this.snackBar.open('Update successful!', undefined, { duration: 5000 }))
                )
                .subscribe();
              break;
            case 'VERSION_DETECTED':
              this.snackBar.open('An update to a new version is available and downloading...', undefined, {
                duration: 5000,
              });
              break;
          }
        })
      )
      .subscribe();
  }
}

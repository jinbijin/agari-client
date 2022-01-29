import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { UpdateNotificationService } from './update-notification.service';

@NgModule({
  imports: [
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
})
export class PwaModule {
  static forRoot(): ModuleWithProviders<PwaModule> {
    return {
      ngModule: PwaModule,
      providers: [UpdateNotificationService],
    };
  }
}

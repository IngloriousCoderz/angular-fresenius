import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './12-routing/app.config';
import { AppComponent } from './12-routing/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

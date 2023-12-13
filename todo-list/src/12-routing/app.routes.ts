import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', title: 'Homepage', component: HomepageComponent },
  { path: 'about', title: 'About', component: AboutComponent },
];

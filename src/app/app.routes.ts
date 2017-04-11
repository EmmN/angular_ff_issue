import { Routes } from '@angular/router';

import { AppWrapperComponent } from './app_wrapper.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AppWrapperComponent,
    pathMatch: 'full',
  }
];
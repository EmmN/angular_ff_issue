import { Routes } from '@angular/router';

import { NestedComponent } from './nested.component';

export const NestedRoutes: Routes = [
  {
    path: 'nested',
    component: NestedComponent,
    pathMatch: 'full',
  }
];
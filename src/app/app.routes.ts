import { RouterModule, Routes, Route } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/db.component';

/**
 * How do routes work?
 *
 * Please check file app/dashboard/db.routes.ts
 *
 * @type {{path: string; component: any}[]}
 */
export const routes: Routes = [
    { path: 'dashboard', component: <any>DashboardComponent },
    { path: '', component: <any>MainComponent },
];
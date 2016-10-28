import { RouterModule, Routes, Route } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/db.component';

export const routes: Routes = [
    { path: 'dashboard', component: <any>DashboardComponent },
    { path: '', component: <any>MainComponent },
];
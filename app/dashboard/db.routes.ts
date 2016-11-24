import { Route }              from '@angular/router';

import { DashboardComponent } from './db.component';
import { HomeComponent }      from './home/home.component';

export const routes = [
    {
        path: 'dashboard',
        component: <any>DashboardComponent,
        children: [
            { path: 'home', component: <any>HomeComponent },
            { path: '', redirectTo: 'home' }
        ]
    }
];
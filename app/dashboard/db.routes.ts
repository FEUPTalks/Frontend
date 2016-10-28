import { Route }              from '@angular/router';

import { DashboardComponent } from './db.component';
import { HomeComponent }      from './home/home.component';
import { TestComponent }      from './test/test.component';

export const routes = [
    {
        path: 'dashboard',
        component: <any>DashboardComponent,
        children: [
            { path: 'home', component: <any>HomeComponent },
            { path: 'test', component: <any>TestComponent },
            { path: '', redirectTo: 'home' }
        ]
    }
];
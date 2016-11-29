import { Route }              from '@angular/router';

import { DashboardComponent } from './db.component';
import { HomeComponent }      from './home/home.component';
import { List_EditComponent } from './list_edit/list_edit.component';
export const routes = [
    {
        path: 'dashboard',
        component: <any>DashboardComponent,
        children: [
            { path: 'list_edit', component: <any>List_EditComponent },
            { path: 'home', component: <any>HomeComponent },
            { path: '', redirectTo: 'home' }           
        ]
    }
];
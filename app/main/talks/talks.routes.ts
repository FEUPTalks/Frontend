import { Routes, Route } from '@angular/router';

import { TalksComponent, RegisterComponent } from './index';

export const routes: Routes = [
    {
        path: 'talks',
        component: <any>TalksComponent,
        children: [
            { path: 'register', component: <any>RegisterComponent },
        ]
    }
];
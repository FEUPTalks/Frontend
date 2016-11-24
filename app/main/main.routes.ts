import { Routes, Route } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { TalksComponent } from './talks/talks.component';

export const routes: Routes = [
    {
        path: '',
        component: <any>MainComponent,
        children: [
            { path: 'home', component: <any>HomeComponent },
            { path: 'talks', component: <any>TalksComponent },
            { path: '', redirectTo: 'home' }
        ]
    }
];
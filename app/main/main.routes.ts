import { Routes, Route } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { TalksComponent } from './talks/talks.component';
import { LoginComponent } from './login/login.component';
import {CalendarComponent} from "./calendar/calendar.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
    {
        path: '',
        component: <any>MainComponent,
        children: [
            { path: 'home', component: <any>HomeComponent },
            { path: 'talks', component: <any>TalksComponent },
            { path: 'calendar', component: <any>CalendarComponent },
            { path: 'about', component: <any>AboutComponent },
            { path: '', redirectTo: 'home' },
        ],
    },
    { path: 'login', component: <any>LoginComponent }
];
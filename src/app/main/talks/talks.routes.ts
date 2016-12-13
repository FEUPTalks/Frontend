import { Routes } from '@angular/router';

import {MainComponent} from "../main.component";
import {HomeComponent} from "../home/home.component";
import {TalkGetComponent} from "./get/get.component";
import {RegisterComponent} from "./register/register.component";
import {TalkEditComponent} from "./edit/edit.component";

export const routes: Routes = [
    {
        path: 'talks',
        component: <any>MainComponent,
        children: [
            { path: 'register', component: <any>RegisterComponent },
            { path: ':id', component: <any>TalkGetComponent },
            { path: '', component: <any>HomeComponent },
            { path: 'edit/:id', component: <any>TalkEditComponent }
        ]
    }
];
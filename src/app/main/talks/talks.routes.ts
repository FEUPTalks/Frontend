import { Routes, Route } from '@angular/router';

import { TalksComponent, RegisterComponent, List_EditComponent, Edit_TalkComponent } from './index';
import {TalkGetComponent} from "./get/get.component";
import {MainComponent} from "../main.component";
import {HomeComponent} from "../home/home.component";

export const routes: Routes = [
    {
        path: 'talks',
        component: <any>MainComponent,
        children: [
            { path: 'register', component: <any>RegisterComponent },
            { path: ':id', component: <any>TalkGetComponent },
            { path: '', component: <any>HomeComponent },
            { path: 'edit_talk', component: <any>Edit_TalkComponent }
        ]
    }
];
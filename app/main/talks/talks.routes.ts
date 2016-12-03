import { Routes, Route } from '@angular/router';

import { TalksComponent, RegisterComponent, List_EditComponent } from './index';
import {TalkGetComponent} from "./get/get.component";

export const routes: Routes = [
    {
        path: 'talks',
        component: <any>TalksComponent,
        children: [
            { path: 'register', component: <any>RegisterComponent },
            { path: ':id', component: <any>TalkGetComponent }
        ]
    }
];
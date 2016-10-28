import { Routes, Route } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path: '',
        component: <any>MainComponent,
        children: [
            { path: 'home', component: <any>HomeComponent },
            { path: 'test', component: <any>TestComponent },
            { path: 'projects', component: <any>ProjectsComponent },
            { path: '', redirectTo: 'home' }
        ]
    }
];
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { HomeModule }         from './home/home.module';
import { TestModule }         from './test/test.module';

import { SidebarComponent }   from '../shared/index';
import { DashboardComponent } from './db.component';
import { routes }             from './db.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
        TestModule
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
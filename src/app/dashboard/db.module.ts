import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { HomeModule }         from './home/home.module';
import { DashboardComponent } from './db.component';
import { routes }             from './db.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
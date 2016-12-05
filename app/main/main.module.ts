import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { HomeModule }       from './home/home.module';
import { TalksModule }      from './talks/talks.module';
import { LoginModule }      from './login/login.module';

import { MainComponent }    from './index';
import { routes }           from './main.routes';
import {SharedModule} from "../shared/shared/shared.module";
import {Ng2BreadcrumbModule, BreadcrumbService} from '../../node_modules/ng2-breadcrumb/ng2-breadcrumb';
import {CalendarModule} from "./calendar/calendar.module";
import {AboutModule} from "./about/about.module";

@NgModule({
    imports: [
        SharedModule,
        Ng2BreadcrumbModule,
        RouterModule.forRoot(routes),
        HomeModule,
        TalksModule,
        LoginModule,
        CalendarModule,
        AboutModule
    ],
    declarations: [MainComponent],
    exports: [MainComponent],
    providers: [BreadcrumbService]
})

export class MainModule { }
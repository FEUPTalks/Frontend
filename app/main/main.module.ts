import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { HomeModule }       from './home/home.module';
import { TalksModule }      from './talks/talks.module';
import { LoginModule }      from './login/login.module';

import { MainComponent }    from './index';
import { routes }           from './main.routes';
import {SharedModule} from "../shared/shared/shared.module";
import {Ng2BreadcrumbModule, BreadcrumbService} from 'ng2-breadcrumb';

@NgModule({
    imports: [
        SharedModule,
        Ng2BreadcrumbModule,
        RouterModule.forRoot(routes),
        HomeModule,
        TalksModule,
        LoginModule,
    ],
    declarations: [MainComponent],
    exports: [MainComponent],
    providers: [BreadcrumbService]
})

export class MainModule { }
import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { HomeModule }       from './home/home.module';
import { TalksModule }      from './talks/talks.module';

import { MainComponent }    from './index';
import { routes }           from './main.routes';
import {SharedModule} from "../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        HomeModule,
        TalksModule
    ],
    declarations: [MainComponent],
    exports: [MainComponent]
})

export class MainModule { }
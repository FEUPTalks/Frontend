import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { HomeModule }       from './home/home.module';
import { TalksModule }      from './talks/talks.module';

import { MainComponent }    from './index';
import { routes }           from './main.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        HomeModule,
        TalksModule
    ],
    declarations: [MainComponent],
    exports: [MainComponent]
})

export class MainModule { }
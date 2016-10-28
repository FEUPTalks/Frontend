import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { HomeModule }       from './home/home.module';

import { MainComponent }    from './index';
import { routes }           from './main.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule
    ],
    declarations: [MainComponent],
    exports: [MainComponent]
})

export class MainModule { }
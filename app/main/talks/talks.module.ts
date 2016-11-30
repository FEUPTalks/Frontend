import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { RegisterModule }     from './register/register.module';

import { TalksComponent }     from './index';
import { routes }             from './talks.routes';
import {SharedModule} from "../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        RegisterModule,
    ],
    declarations: [TalksComponent],
    exports: [TalksComponent]
})

export class TalksModule { }
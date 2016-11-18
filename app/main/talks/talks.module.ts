import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { RegisterModule }     from './register/register.module';

import { TalksComponent }     from './index';
import { routes }             from './talks.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RegisterModule,
    ],
    declarations: [TalksComponent],
    exports: [TalksComponent]
})

export class TalksModule { }
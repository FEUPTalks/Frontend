import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { RegisterModule }     from './register/register.module';

import { TalksComponent }     from './index';
import { routes }             from './talks.routes';
import {SharedModule} from "../../shared/shared/shared.module";
import {TalkService} from "../../services/talk.service";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        RegisterModule,
    ],
    declarations: [TalksComponent],
    exports: [TalksComponent],
    providers: [TalkService],
})

export class TalksModule { }
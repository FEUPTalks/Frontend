import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { RegisterModule }     from './register/register.module';

import { TalksComponent }     from './index';
import { routes }             from './talks.routes';
import {SharedModule} from "../../shared/shared/shared.module";
import {TalkService} from "../../services/api/talk.service";
import {TalkGetModule} from "./get/get.module";
import {Edit_TalkModule} from "./edit_talk/edit_talk.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        RegisterModule,
        TalkGetModule,
        Edit_TalkModule
    ],
    declarations: [TalksComponent],
    exports: [TalksComponent],
    providers: [TalkService],
})

export class TalksModule { }
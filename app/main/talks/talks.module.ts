import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { RegisterModule }     from './register/register.module';

import { TalksComponent }     from './index';
import { routes }             from './talks.routes';
import {Angular2DataTableModule} from "angular2-data-table";
import {TalkService} from "../../services/talk.service";

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RegisterModule,
        Angular2DataTableModule
    ],
    declarations: [TalksComponent],
    exports: [TalksComponent],
    providers: [TalkService],
})

export class TalksModule { }
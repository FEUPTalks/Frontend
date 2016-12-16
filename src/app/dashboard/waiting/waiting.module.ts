import { NgModule }              from '@angular/core';

import { WaitingComponent }         from './waiting.component';
import { TalkService }           from "../../services/api/talk.service";
import {SharedModule} from "../../shared/shared/shared.module";
import {Angular2DataTableModule} from "angular2-data-table";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        Angular2DataTableModule
    ],
    declarations: [
        WaitingComponent,
    ],
    providers: [TalkService],
    exports: [WaitingComponent]
})

export class WaitingModule { }
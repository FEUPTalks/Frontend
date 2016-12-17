import { NgModule }              from '@angular/core';

import { LiveComponent }         from './live.component';
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
        LiveComponent,
    ],
    providers: [TalkService],
    exports: [LiveComponent]
})

export class LiveModule { }
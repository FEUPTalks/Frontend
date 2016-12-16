import { NgModule }              from '@angular/core';

import { AcceptedComponent }         from './accepted.component';
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
        AcceptedComponent,
    ],
    providers: [TalkService],
    exports: [AcceptedComponent]
})

export class AcceptedModule { }
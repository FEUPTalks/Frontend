import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { List_EditComponent } from './list_edit.component';
import { TalkService }           from "../../../services/talk.service";
import {SharedModule} from "../../../shared/shared/shared.module";
import {Angular2DataTableModule} from "angular2-data-table";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        HttpModule,
        Angular2DataTableModule
    ],
    declarations: [List_EditComponent],
    providers: [TalkService],
    exports: [List_EditComponent]
})

export class List_EditModule { }
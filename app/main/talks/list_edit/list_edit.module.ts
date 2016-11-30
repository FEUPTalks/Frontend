import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { List_EditComponent } from './list_edit.component';
import { CommonModule } from "@angular/common";
import { TalkService }           from "../../../services/talk.service";
import {Angular2DataTableModule} from "angular2-data-table";


@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        Angular2DataTableModule
    ],
    declarations: [List_EditComponent],
    providers: [TalkService],
    exports: [List_EditComponent]
})

export class List_EditModule { }
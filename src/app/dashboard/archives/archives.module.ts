import { NgModule }              from '@angular/core';

import { ArchivesComponent }         from './archives.component';
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
        ArchivesComponent,
    ],
    providers: [TalkService],
    exports: [ArchivesComponent]
})

export class ArchivesModule { }
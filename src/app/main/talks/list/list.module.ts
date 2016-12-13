import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TalkListComponent } from './list.component';
import { TalkService } from "../../../services/api/talk.service";
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
    declarations: [TalkListComponent],
    providers: [TalkService],
    exports: [TalkListComponent]
})

export class TalkListModule { }
import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { TalkService }           from "../../../services/api/talk.service";
import {SharedModule} from "../../../shared/shared/shared.module";
import {TalkGetComponent} from "./get.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        HttpModule,
    ],
    declarations: [TalkGetComponent],
    providers: [TalkService],
    exports: [TalkGetComponent]
})

export class TalkGetModule { }
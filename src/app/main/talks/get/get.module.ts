import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { TalkService }           from "../../../services/api/talk.service";
import {SharedModule} from "../../../shared/shared/shared.module";
import {TalkGetComponent} from "./get.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        HttpModule,
        FormsModule
    ],
    declarations: [TalkGetComponent],
    providers: [TalkService],
    exports: [TalkGetComponent]
})

export class TalkGetModule { }
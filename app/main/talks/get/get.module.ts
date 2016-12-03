import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { TalkService }           from "../../../services/talk.service";
import {SharedModule} from "../../../shared/shared/shared.module";
import {TalkGetComponent} from "./get.component";

@NgModule({
    imports: [
        SharedModule,
        HttpModule,
    ],
    declarations: [TalkGetComponent],
    providers: [TalkService],
    exports: [TalkGetComponent]
})

export class TalkGetModule { }
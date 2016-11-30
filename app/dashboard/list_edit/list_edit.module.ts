import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { List_EditComponent } from './list_edit.component';
import { TalkService }           from "../../services/talk.service";
import {SharedModule} from "../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        HttpModule,
    ],
    declarations: [List_EditComponent],
    providers: [TalkService],
    exports: [List_EditComponent]
})

export class List_EditModule { }
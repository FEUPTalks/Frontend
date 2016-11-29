import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { List_EditComponent } from './list_edit.component';
import {CommonModule} from "@angular/common";
import { TalkService }           from "../../services/talk.service";

@NgModule({
    imports: [
        HttpModule,
        CommonModule
    ],
    declarations: [List_EditComponent],
    providers: [TalkService],
    exports: [List_EditComponent]
})

export class List_EditModule { }
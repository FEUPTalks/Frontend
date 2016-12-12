import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { Edit_TalkComponent } from './edit_talk.component';

import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        Edit_TalkComponent
    ],
    exports: [Edit_TalkComponent],
})

export class Edit_TalkModule { }
import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { TalkEditComponent } from './edit.component';

import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        TalkEditComponent
    ],
    exports: [TalkEditComponent],
})

export class TalkEditModule { }
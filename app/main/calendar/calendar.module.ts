import { NgModule }      from '@angular/core';

import { HomeComponent } from './home.component';
import {SharedModule} from "../../shared/shared/shared.module";
import {List_EditModule} from "../talks/list_edit/list_edit.module";

@NgModule({
    imports: [
        SharedModule,
        List_EditModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
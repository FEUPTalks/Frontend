import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";

import { HomeComponent } from './home.component';
import {List_EditModule} from "../talks/list_edit/list_edit.module";

@NgModule({
    imports: [
        CommonModule,
        List_EditModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
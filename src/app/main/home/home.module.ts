import { NgModule }      from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from "../../shared/shared/shared.module";
import { TalkListModule } from "../talks/list/list.module";

@NgModule({
    imports: [
        SharedModule,
        TalkListModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
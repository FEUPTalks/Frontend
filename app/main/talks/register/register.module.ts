import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { RegisterComponent } from './register.component';

import {MaterializeDirective} from "../../../shared/index";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        RegisterComponent,
        MaterializeDirective
    ],
    exports: [RegisterComponent]
})

export class RegisterModule { }
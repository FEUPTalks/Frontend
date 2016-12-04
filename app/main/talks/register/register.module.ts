import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { RegisterComponent } from './register.component';

import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        HttpModule,
        FormsModule,
    ],
    declarations: [
        RegisterComponent
    ],
    exports: [RegisterComponent],
})

export class RegisterModule { }
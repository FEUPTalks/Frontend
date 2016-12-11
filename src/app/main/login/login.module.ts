import { NgModule }      from '@angular/core';

import { LoginComponent } from './login.component';
import {SharedModule} from "../../shared/shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        SharedModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
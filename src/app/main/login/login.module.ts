/**
 * Created by Bill on 12/2/2016.
 */
import { NgModule }      from '@angular/core';

import { LoginComponent } from './login.component';
import {SharedModule} from "../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
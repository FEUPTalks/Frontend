import { NgModule }      from '@angular/core';

import { AboutComponent } from './about.component';
import {SharedModule} from "../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})

export class AboutModule { }
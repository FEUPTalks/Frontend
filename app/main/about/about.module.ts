import { NgModule }      from '@angular/core';

import { CalendarComponent } from './calendar.component';
import {SharedModule} from "../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [CalendarComponent],
    exports: [CalendarComponent]
})

export class CalendarModule { }
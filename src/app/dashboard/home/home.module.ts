import { NgModule }              from '@angular/core';
import { ChartModule }           from 'angular2-highcharts';

import { HomeComponent }         from './home.component';
import { PendingChartComponent } from './chart/pending-chart.component';
import { TalkService }           from "../../services/api/talk.service";
import {AttendeesChartComponent} from "./chart/attendees-chart.component";
import {SharedModule} from "../../shared/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        ChartModule
    ],
    declarations: [
        HomeComponent,
        PendingChartComponent,
        AttendeesChartComponent
    ],
    providers: [TalkService],
    exports: [HomeComponent]
})

export class HomeModule { }
import { NgModule }              from '@angular/core';
import { ChartModule }           from 'angular2-highcharts';

import { HomeComponent }         from './home.component';
import { PendingChartComponent } from './chart/pending-chart.component';
import { TalkService }           from "../../services/talk.service";
import {CommonModule} from "@angular/common";
import {AttendeesChartComponent} from "./chart/attendees-chart.component";

@NgModule({
    imports: [
        CommonModule,
        ChartModule
    ],
    declarations: [HomeComponent, PendingChartComponent, AttendeesChartComponent],
    providers: [TalkService],
    exports: [HomeComponent]
})

export class HomeModule { }
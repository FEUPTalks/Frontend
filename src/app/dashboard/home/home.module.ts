import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';

import { HomeComponent } from './home.component';
import { PendingChartComponent } from './chart/pending-chart.component';
import { TalkService } from "../../services/api/talk.service";
import { AttendeesChartComponent } from "./chart/attendees-chart.component";
import { SharedModule } from "../../shared/shared/shared.module";
import { AdminComponent } from "./admin/index";
import { EmployeeComponent } from "./employee/index";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        ChartModule,
        RouterModule
    ],
    declarations: [
        HomeComponent,
        PendingChartComponent,
        AttendeesChartComponent,
        AdminComponent,
        EmployeeComponent
    ],
    providers: [TalkService],
    exports: [HomeComponent]
})

export class HomeModule { }
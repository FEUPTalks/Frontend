"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_highcharts_1 = require('angular2-highcharts');
var home_component_1 = require('./home.component');
var pending_chart_component_1 = require('./chart/pending-chart.component');
var talk_service_1 = require("../../services/talk.service");
var attendees_chart_component_1 = require("./chart/attendees-chart.component");
var shared_module_1 = require("../../shared/shared/shared.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                angular2_highcharts_1.ChartModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                pending_chart_component_1.PendingChartComponent,
                attendees_chart_component_1.AttendeesChartComponent
            ],
            providers: [talk_service_1.TalkService],
            exports: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map
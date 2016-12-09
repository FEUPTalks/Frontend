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
var router_1 = require('@angular/router');
var home_module_1 = require('./home/home.module');
var talks_module_1 = require('./talks/talks.module');
var login_module_1 = require('./login/login.module');
var index_1 = require('./index');
var main_routes_1 = require('./main.routes');
var shared_module_1 = require("../shared/shared/shared.module");
var ng2_breadcrumb_1 = require('../../node_modules/ng2-breadcrumb/ng2-breadcrumb');
var calendar_module_1 = require("./calendar/calendar.module");
var about_module_1 = require("./about/about.module");
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                ng2_breadcrumb_1.Ng2BreadcrumbModule,
                router_1.RouterModule.forRoot(main_routes_1.routes),
                home_module_1.HomeModule,
                talks_module_1.TalksModule,
                login_module_1.LoginModule,
                calendar_module_1.CalendarModule,
                about_module_1.AboutModule
            ],
            declarations: [index_1.MainComponent],
            exports: [index_1.MainComponent],
            providers: [ng2_breadcrumb_1.BreadcrumbService]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map
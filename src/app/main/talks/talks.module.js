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
var register_module_1 = require('./register/register.module');
var index_1 = require('./index');
var talks_routes_1 = require('./talks.routes');
var shared_module_1 = require("../../shared/shared/shared.module");
var talk_service_1 = require("../../services/talk.service");
var get_module_1 = require("./get/get.module");
var TalksModule = (function () {
    function TalksModule() {
    }
    TalksModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forRoot(talks_routes_1.routes),
                register_module_1.RegisterModule,
                get_module_1.TalkGetModule
            ],
            declarations: [index_1.TalksComponent],
            exports: [index_1.TalksComponent],
            providers: [talk_service_1.TalkService],
        }), 
        __metadata('design:paramtypes', [])
    ], TalksModule);
    return TalksModule;
}());
exports.TalksModule = TalksModule;
//# sourceMappingURL=talks.module.js.map
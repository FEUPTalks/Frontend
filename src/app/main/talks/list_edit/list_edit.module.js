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
var http_1 = require('@angular/http');
var list_edit_component_1 = require('./list_edit.component');
var talk_service_1 = require("../../../services/talk.service");
var shared_module_1 = require("../../../shared/shared/shared.module");
var angular2_data_table_1 = require("angular2-data-table");
var router_1 = require("@angular/router");
var List_EditModule = (function () {
    function List_EditModule() {
    }
    List_EditModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule,
                http_1.HttpModule,
                angular2_data_table_1.Angular2DataTableModule
            ],
            declarations: [list_edit_component_1.List_EditComponent],
            providers: [talk_service_1.TalkService],
            exports: [list_edit_component_1.List_EditComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], List_EditModule);
    return List_EditModule;
}());
exports.List_EditModule = List_EditModule;
//# sourceMappingURL=list_edit.module.js.map
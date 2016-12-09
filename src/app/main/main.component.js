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
var ng2_breadcrumb_1 = require('../../node_modules/ng2-breadcrumb/ng2-breadcrumb');
/**
 *	This class represents the main website
 */
var MainComponent = (function () {
    function MainComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        breadcrumbService.addFriendlyNameForRoute('/talks', 'home');
    }
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-cmp',
            templateUrl: './main.component.html',
        }), 
        __metadata('design:paramtypes', [ng2_breadcrumb_1.BreadcrumbService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map
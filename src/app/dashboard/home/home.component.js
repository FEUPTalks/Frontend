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
var talk_service_1 = require('../../services/talk.service');
var HomeComponent = (function () {
    function HomeComponent(talkService) {
        this.talkService = talkService;
        this.talks = null;
        this.modalActions = new core_1.EventEmitter();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.talkService.get("talks").subscribe(function (data) {
            _this.talks = data;
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.parse = function (date) {
        return new Date(Date.parse(date));
    };
    HomeComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
        console.log("hey");
    };
    HomeComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'db-home-cmp',
            templateUrl: 'home.component.html',
        }), 
        __metadata('design:paramtypes', [talk_service_1.TalkService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
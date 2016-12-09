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
require("rxjs/add/operator/map");
var talk_service_1 = require("../../../services/talk.service");
var router_1 = require("@angular/router");
var TalkGetComponent = (function () {
    function TalkGetComponent(talkService, route, router) {
        this.talkService = talkService;
        this.route = route;
        this.router = router;
        this.talk = null;
        this.id = 0;
    }
    TalkGetComponent.prototype.ngOnInit = function () {
        // (+) converts string 'id' to a number
        this.id = +this.route.snapshot.params['id'];
        this.getTalks();
    };
    TalkGetComponent.prototype.getTalks = function () {
        var _this = this;
        this.talkService.getOne("talks/" + this.id).subscribe(function (data) {
            _this.talk = data;
            console.log(_this.talk);
        }, function (err) {
            console.log(err);
        });
    };
    TalkGetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'talk-get-cmp',
            templateUrl: 'get.component.html',
            styleUrls: ['get.component.css']
        }), 
        __metadata('design:paramtypes', [talk_service_1.TalkService, router_1.ActivatedRoute, router_1.Router])
    ], TalkGetComponent);
    return TalkGetComponent;
}());
exports.TalkGetComponent = TalkGetComponent;
//# sourceMappingURL=get.component.js.map
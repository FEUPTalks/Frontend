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
var List_EditComponent = (function () {
    function List_EditComponent(talkService) {
        this.talkService = talkService;
        this.talks = null;
        this.rows = [];
        this.temp = [];
        this.columns = [
            { prop: 'title' },
            { prop: 'date' },
            { prop: 'speakerName' },
            { prop: 'room' },
            { prop: 'controls' }
        ];
    }
    List_EditComponent.prototype.ngOnInit = function () {
        this.getTalks();
    };
    List_EditComponent.prototype.getTalks = function () {
        var _this = this;
        this.talkService.get("talks").subscribe(function (data) {
            _this.talks = data;
            for (var i = 0; i < _this.talks.length; i++) {
                _this.rows.push({
                    title: _this.talks[i].title,
                    date: _this.talks[i].date,
                    speakerName: _this.talks[i].speakerName,
                    room: _this.talks[i].room,
                    controls: _this.talks[i].talkID
                });
            }
            _this.temp = _this.rows.slice();
        }, function (err) {
            console.log(err);
        });
    };
    List_EditComponent.prototype.updateFilter = function (event) {
        var val = event.target.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.title.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    List_EditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'talk-list_edit-cmp',
            templateUrl: 'list_edit.component.html',
        }), 
        __metadata('design:paramtypes', [talk_service_1.TalkService])
    ], List_EditComponent);
    return List_EditComponent;
}());
exports.List_EditComponent = List_EditComponent;
//# sourceMappingURL=list_edit.component.js.map
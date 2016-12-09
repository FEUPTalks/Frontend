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
require('rxjs/Rx');
require('../../../assets/js/material-datetime.js');
var talk_service_1 = require("../../../services/talk.service");
var RegisterComponent = (function () {
    function RegisterComponent(talkService) {
        this.talkService = talkService;
        this.breadcumb = [];
        this.globalActions = new core_1.EventEmitter();
        this.today = new Date();
        this.formDateOptions = {
            selectMonths: true,
            selectYears: 1,
            min: new Date((this.today.getMonth() + 1) + "-" + (this.today.getDate() + 5) + "-" + this.today.getFullYear())
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        $('.timepicker').clockpicker({
            autoclose: false,
            twelvehour: false,
        });
        this.breadcumb.push({ name: 'Home', routerLink: '/home' });
        this.breadcumb.push({ name: 'Register', routerLink: '/talks/register' });
    };
    RegisterComponent.prototype.getPaths = function () {
        return this.breadcumb;
    };
    RegisterComponent.prototype.submit = function (data) {
        /* Update form params, because angular doesn't fetch them */
        var date = new Date(data['startDate']);
        var time = $("#startTime").val();
        date.setHours(time.split(":")[0]);
        date.setMinutes(time.split(":")[1]);
        if (!data['dateflex'])
            data['dateflex'] = 3;
        if (!data['duration'])
            data['duration'] = 3;
        data['dateflex'] = parseInt(data['dateflex']);
        data['duration'] = parseInt(data['duration']);
        data['date'] = date.toISOString();
        data['speakerPicture'] = 1;
        data['room'] = "";
        /* End of form params */
        console.log("Sending: " + JSON.stringify(data));
        this.talkService.post("talks", data).subscribe(function (res) {
            if (res.status === 201 || res.status === 200) {
                document.querySelectorAll("button[type=submit]")[0].setAttribute("disabled", "true");
                Materialize.toast('Success! A new talk was proposed.', 4000);
            }
        }, function (err) {
            console.log("Error: " + err);
            Materialize.toast('Error! Not possible to submit a new talk.', 4000);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'talk-register-cmp',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css']
        }), 
        __metadata('design:paramtypes', [talk_service_1.TalkService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
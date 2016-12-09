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
var PendingChartComponent = (function () {
    function PendingChartComponent() {
    }
    PendingChartComponent.prototype.ngAfterViewInit = function () {
        $('.dial').knob({
            thickness: 0.1,
            angleOffset: 180,
            fgColor: "#7986CB",
            skin: "tron",
            readOnly: true,
            val: 50,
            max: 100,
            format: function (value) {
                return value + '%';
            }
        });
    };
    PendingChartComponent = __decorate([
        core_1.Component({
            selector: 'pending-chart',
            template: "\n        <input type=\"text\" value=\"50\" class=\"dial\">\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PendingChartComponent);
    return PendingChartComponent;
}());
exports.PendingChartComponent = PendingChartComponent;
//# sourceMappingURL=pending-chart.component.js.map
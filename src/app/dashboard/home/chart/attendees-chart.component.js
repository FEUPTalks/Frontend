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
var AttendeesChartComponent = (function () {
    function AttendeesChartComponent() {
        this.data = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
    }
    AttendeesChartComponent.prototype.ngAfterViewInit = function () {
        this.renderChart();
    };
    AttendeesChartComponent.prototype.renderChart = function () {
        jQuery('.attendees-chart').highcharts({
            title: {
                text: '',
                x: -20 //center
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'People'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                valueSuffix: ' Persons'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                    name: 'Attendees',
                    data: this.data
                }]
        });
    };
    AttendeesChartComponent = __decorate([
        core_1.Component({
            selector: 'attendees-chart',
            template: "\n        <div class=\"attendees-chart\"></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AttendeesChartComponent);
    return AttendeesChartComponent;
}());
exports.AttendeesChartComponent = AttendeesChartComponent;
//# sourceMappingURL=attendees-chart.component.js.map
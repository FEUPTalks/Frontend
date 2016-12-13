import {Component, AfterViewInit, Input} from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'pending-chart',
    template: `
        <input id="pending-chart" type="text" value="50" class="dial">
    `
})

export class PendingChartComponent implements AfterViewInit {

    ngAfterViewInit() {
        (<any>$('.dial')).knob({
            thickness: 0.1,
            angleOffset: 180,
            fgColor: "#7986CB",
            skin: "tron",
            readOnly: true,
            max: 100,
            format : function (value : number) {
                return value + '%';
            }
        });
    }

    updateChart(newValue : number) {
        (<any>$('#pending-chart')).val(newValue);
        (<any>$('#pending-chart')).trigger("change");
    }
}

import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'pending-chart',
    template: `
        <input type="text" value="50" class="dial">
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
            val: 50,
            max: 100,
            format : function (value : number) {
                return value + '%';
            }
        });
    }
}

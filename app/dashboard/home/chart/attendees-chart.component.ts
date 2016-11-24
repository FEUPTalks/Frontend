import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'attendees-chart',
    template: `
        <div class="attendees-chart"></div>
    `
})

export class AttendeesChartComponent implements AfterViewInit {

    private data = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];

    ngAfterViewInit() {
        this.renderChart();
    }

    renderChart() {
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
    }
}
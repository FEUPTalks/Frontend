import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {TalkService} from "../../services/api/talk.service";
import {Talk} from "../../services/api/talk";

declare var $: any;

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
})

export class CalendarComponent implements AfterViewInit {

    public talks : Talk[] = null;

    constructor(private talkService: TalkService) {}

    ngAfterViewInit() {
        this.talkService.get("talks").subscribe(
            data => {
                this.talks = data;
                let events = [];
                for(let i=0; i<this.talks.length; i++) {
                    let date = new Date(Date.parse(this.talks[i].date));
                    events.push({
                        title: this.talks[i].title,
                        start: new Date(Date.parse(this.talks[i].date)),
                        end: new Date(date.getFullYear(), date.getMonth(), date.getDate(),
                            date.getHours()+this.talks[i].duration, date.getMinutes()),
                        allDay: false
                    });
                }
                (<any>$('#calendar')).fullCalendar({
                    editable: false,
                    weekMode: 'liquid',
                    url: '#',
                    events: events,
                    header: {
                        left: 'prev,next',
                        center: 'title',
                        right: 'month'
                    }
                });
            },
            err => {
                console.log(err);
            });
    }
}

import {Component, AfterViewInit, EventEmitter} from '@angular/core';
import {MaterializeAction} from '../../shared/materialize';

import {TalkService}       from '../../services/api/talk.service';
import {Talk}              from '../../services/api/talk';
import {UserService} from "../../services/auth/user.service";

declare var Materialize: any;

@Component({
    selector: 'db-archives-cmp',
    templateUrl: './archives.component.html',
})

export class ArchivesComponent implements AfterViewInit {

    public talks: Talk[] = null;

    rows : any[] = [];
    temp : any[] = [];

    columns = [
        { prop: 'title' },
        { prop: 'date' },
        { prop: 'speakerName' },
        { prop: 'proponent' },
        { prop: 'controls' }
    ];

    constructor(private auth: UserService, private talkService: TalkService) { }

    /**
     * After view initializing, let's fetch the talks
     */
    ngAfterViewInit() {
        let send = { state : 6 };
        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
            data => {
                this.talks = data;
                for(var i = 0; i<this.talks.length; i++) {
                    this.rows.push(
                        {
                            title: this.talks[i].title,
                            date: this.talks[i].date,
                            speakerName: this.talks[i].speakerName,
                            proponent: this.talks[i].proponentName,
                            controls: this.talks[i].talkID
                        }
                    );
                }
                this.temp = [...this.rows];
            },
            err => {
                console.log("Error: " + err);
            });
    }

    /**
     * Helper function to parse a date string into date object
     * @param date
     * @returns {Date}
     */
    public parse(date: string) {
        return new Date(Date.parse(date));
    }

    /**
     * Belongs to datatables search function
     * @param event
     */
    updateFilter(event) {
        let val = event.target.value;

        // filter our data
        let temp = this.temp.filter(function(d) {
            return d.title.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
    }
}

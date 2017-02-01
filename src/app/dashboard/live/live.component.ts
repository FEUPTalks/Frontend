import {Component, AfterViewInit, EventEmitter, ViewChild} from '@angular/core';
import {MaterializeAction} from '../../shared/materialize';

import {TalkService}       from '../../services/api/talk.service';
import {Talk}              from '../../services/api/talk';
import {UserService} from "../../services/auth/user.service";

declare var Materialize: any;

@Component({
    selector: 'db-live-cmp',
    templateUrl: './live.component.html',
})

export class LiveComponent implements AfterViewInit {

    public talks: Talk[] = null;

    rows : any[] = [];
    temp : any[] = [];

    columns = [
        { prop: 'title' },
        { prop: 'date' },
        { prop: 'speakerName' },
        { prop: 'proponent' },
        { prop: 'room' },
        { prop: 'controls' }
    ];

    @ViewChild('datatable') table;

    constructor(private auth: UserService, private talkService: TalkService) { }

    /**
     * After view initializing, let's fetch the talks
     */
    ngAfterViewInit() {
        let send = { state : 5 };
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
                            room: this.talks[i].room,
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
        let val = event.target.value.toLowerCase();

        // filter our data
        let temp = this.temp.filter(function(d) {
            return d.title.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
    }

    /**
     * Helper function to check if all attributes in a talk are set
     * @param id
     * @returns {boolean}
     */
    checkAttributes(id : number) : boolean {
        let talkid = null;
        for(let talk in this.talks) {
            if(this.talks[talk].talkID == id) {
                talkid = talk;
                break;
            }
        }
        if(!talkid) return false;
        for(let key in this.talks[talkid]) {
            if(this.talks[talkid][key] === "") {
                return true;
            }
        }
        return false;
    }
}

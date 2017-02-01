import {Component, AfterViewInit, EventEmitter} from '@angular/core';
import {MaterializeAction} from '../../shared/materialize';

import {TalkService}       from '../../services/api/talk.service';
import {Talk}              from '../../services/api/talk';
import {UserService} from "../../services/auth/user.service";

declare var Materialize: any;

@Component({
    selector: 'db-accepted-cmp',
    templateUrl: './accepted.component.html',
})

export class AcceptedComponent implements AfterViewInit {

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

    /* These actions belong to materializeCSS and allow us to call modals & stuff */
    modalActions1 = new EventEmitter<string|MaterializeAction>();
    modalActions2 = new EventEmitter<string|MaterializeAction>();
    globalActions = new EventEmitter<string|MaterializeAction>();

    constructor(private auth: UserService, private talkService: TalkService) { }

    /**
     * After view initializing, let's fetch the talks
     */
    ngAfterViewInit() {
        let send = { state : 3 };
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
     * Helper function to update the room in the database for a certain talk (id)
     * @param id
     * @param room
     */
    public submitRoom(id : number, room : string) {
        if(!room)
            return;
        var data = {};
        data['room'] = room;
        this.talkService.put("talks/" + id + "/SetRoom", this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The room was changed.', 4000);
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to change the room.', 4000);
            });
    }

    /**
     * Helper function to update the additionalNeeds in the database for a certain talk (id)
     * @param id
     * @param addNeeds
     */
    public submitAddNeeds(id : number, addNeeds : string) {
        if(!addNeeds)
            return;
        var data = {};
        data['other'] = addNeeds;
        this.talkService.put("talks/" + id + "/SetOther", this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The additional needs were changed.', 4000);
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to change the additional needs.', 4000);
            });
    }

    /**
     * Helper function to proceed to the next state
     * @param id
     * @param room This parameter is required because without room, a function cannot proceed to the next state
     * The room parameter is just what the user has in the input box, if null, this can't proceed
     */
    public changeState(id : number, room : string) {
        if(!room) {
            Materialize.toast('Error! There is no room set.', 4000);
            return;
        }
        var data = {};
        data['state'] = 4;
        this.talkService.put("talks/" + id + "/SetState", this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The talk was forwarded.', 4000);
                this.removeTalk(id);
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! The talk was not forwarded.', 4000);
            });
    }

    /**
     * Helper function that bundles everything needed to remove a talk from the View, which means the table
     * It doesn't include removing from the database
     * @param id
     */
    removeTalk(id : number) {
        for(let i=0; i<this.talks.length; i++) {
            if(this.talks[i]['talkID'] == id) {
                this.talks.splice(i, 1);
                this.rows.splice(i, 1);
                this.temp.splice(i, 1);
                window.dispatchEvent(new Event('resize'));
                return;
            }
        }
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
}

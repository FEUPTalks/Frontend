import {Component, AfterViewInit, EventEmitter, ViewChild} from '@angular/core';
import {MaterializeAction} from '../../shared/materialize';

import {TalkService}       from '../../services/api/talk.service';
import {Talk}              from '../../services/api/talk';
import {UserService} from "../../services/auth/user.service";

declare var Materialize: any;

@Component({
    selector: 'db-waiting-cmp',
    templateUrl: './waiting.component.html',
})

export class WaitingComponent implements AfterViewInit {

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
    /* These actions belong to materializeCSS and allow us to call modals & stuff */
    modalActions1 = new EventEmitter<string|MaterializeAction>();
    modalActions2 = new EventEmitter<string|MaterializeAction>();

    constructor(private auth: UserService, private talkService: TalkService) { }

    ngAfterViewInit() {
        let send = { state : 4 };
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

    public parse(date: string) {
        return new Date(Date.parse(date));
    }

    acceptTalk(id: number) {
        var data = {};
        data['state'] = 5;
        this.talkService.put("talks/" + id + "/SetState", this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The talk was published.', 4000);
                this.removeTalk(id);
                this.closeModal2();
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to publish this talk.', 4000);
            });
    }

    rejectTalk(id: number) {
        var data = {};
        data['state'] = 2;
        this.talkService.put("talks/" + id + "/SetState", this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The talk was cancelled.', 4000);
                this.removeTalk(id);
                this.closeModal1();
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to cancel this talk.', 4000);
            });
    }

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

    updateFilter(event) {
        let val = event.target.value.toLowerCase();

        // filter our data
        let temp = this.temp.filter(function(d) {
            return d.title.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
    }

    openModal1(id : number) {
        document.getElementById("modal1").setAttribute("data-id", id.toString());
        this.modalActions1.emit({action: "modal", params: ['open']});
    }

    closeModal1() {
        this.modalActions1.emit({action: "modal", params: ['close']});
    }

    openModal2(id : number) {
        document.getElementById("modal2").setAttribute("data-id", id.toString());
        this.modalActions2.emit({action: "modal", params: ['open']});
    }

    closeModal2() {
        this.modalActions2.emit({action: "modal", params: ['close']});
    }
}

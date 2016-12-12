import {Component, AfterViewInit, EventEmitter} from '@angular/core';
import {MaterializeAction} from '../../shared/materialize';

import {TalkService}       from '../../services/api/talk.service';
import {Talk}              from '../../services/api/talk';
import {UserService} from "../../services/auth/user.service";

declare var Materialize: any;

@Component({
    selector: 'db-pending-cmp',
    templateUrl: './pending.component.html',
})

export class PendingComponent implements AfterViewInit {

    public talks: Talk[] = null;

    rows : any[] = [];
    temp : any[] = [];

    columns = [
        { prop: 'title' },
        { prop: 'date' },
        { prop: 'speakerName' },
        { prop: 'room' },
        { prop: 'controls' }
    ];

    /* These actions belong to materializeCSS and allow us to call modals & stuff */
    modalActions1 = new EventEmitter<string|MaterializeAction>();
    modalActions2 = new EventEmitter<string|MaterializeAction>();
    globalActions = new EventEmitter<string|MaterializeAction>();

    constructor(private auth: UserService, private talkService: TalkService) { }

    ngAfterViewInit() {
        let send = { state : 1 };
        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
            data => {
                this.talks = data;
                for(var i = 0; i<this.talks.length; i++) {
                    this.rows.push(
                        {
                            title: this.talks[i].title,
                            date: this.talks[i].date,
                            speakerName: this.talks[i].speakerName,
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
        data['talkID'] = id;
        data['state'] = 2;
        this.talkService.put("talks/" + id, this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The talk was accept.', 4000);
                this.removeTalk(id);
                this.closeModal2();
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to accept this talk.', 4000);
            });
    }

    rejectTalk(id: number) {
        var data = {};
        data['talkID'] = id;
        data['state'] = 3;
        this.talkService.put("talks/" + id, this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The talk was reject.', 4000);
                this.removeTalk(id);
                this.closeModal1();
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to reject this talk.', 4000);
            });
    }

    removeTalk(id : number) {
        for(let i=0; i<this.talks.length; i++) {
            if(this.talks[i]['talkID'] === id) {
                this.talks.slice(i, 1);
                return;
            }
        }
    }

    openModal1() {
        this.modalActions1.emit({action: "modal", params: ['open']});
    }

    closeModal1() {
        this.modalActions1.emit({action: "modal", params: ['close']});
    }

    openModal2() {
        this.modalActions2.emit({action: "modal", params: ['open']});
    }

    closeModal2() {
        this.modalActions2.emit({action: "modal", params: ['close']});
    }
}

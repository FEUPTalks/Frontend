import {Component, OnInit, EventEmitter, ViewChild} from '@angular/core';
import {MaterializeAction} from '../../../shared/materialize';

import {TalkService}       from '../../../services/api/talk.service';
import {Talk}              from '../../../services/api/talk';
import {UserService} from "../../../services/auth/user.service";
import {PendingChartComponent} from "../chart/pending-chart.component";

declare var Materialize: any;

@Component({
    selector: 'db-home-admin-cmp',
    templateUrl: './admin.component.html',
})

export class AdminComponent implements OnInit {

    public talks: Talk[] = null;
    public talksApproved: Talk[] = null;
    public talksWaiting : Talk[] = null;

    /* Get the child component -> pendingChart, in order to update the pecentage */
    @ViewChild(PendingChartComponent) pendingChart : PendingChartComponent;

    /* These actions belong to materializeCSS and allow us to call modals & stuff */
    modalActions1 = new EventEmitter<string|MaterializeAction>();
    modalActions2 = new EventEmitter<string|MaterializeAction>();
    globalActions = new EventEmitter<string|MaterializeAction>();

    constructor(private auth: UserService, private talkService: TalkService) { }

    /**
     * When view is initializing, let's fetch the talks (only happens once)
     */
    ngOnInit() {
        let send = { state : 1 };
        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
            data => {
                this.talks = data;
                send['state'] = 4;
                this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
                    data => {
                        this.talksWaiting = data;
                        send['state'] = 3;
                        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
                            data => {
                                this.talksApproved = data;
                                /* Update the chart percentage -> Approved talks over Total Talks */
                                let percentage = 0;
                                let total = this.talks.length + this.talksApproved.length;
                                if(this.talksApproved && this.talks)
                                    percentage = this.talksApproved.length / (total == 0 ? 1 : total);

                                this.pendingChart.updateChart(percentage*100);
                            });
                    },
                    err => {
                        console.log("Error: " + err);
                    });
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
     * Helper function to proceed to the next state
     * @param id
     */
    acceptTalk(id: number) {
        var data = {};
        data['state'] = 3;
        this.talkService.put("talks/" + id + "/SetState", this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The talk was accepted.', 4000);
                this.removeTalk(id);
                this.closeModal2();
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to accept this talk.', 4000);
            });
    }

    /**
     * Helper function to reject a talk, new state
     * @param id
     */
    rejectTalk(id: number) {
        var data = {};
        data['state'] = 2;
        this.talkService.put("talks/" + id + "/SetState", this.auth.getToken(), data).subscribe(
            data => {
                Materialize.toast('Success! The talk was rejected.', 4000);
                this.removeTalk(id);
                this.closeModal1();
            },
            err => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to reject this talk.', 4000);
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
                return;
            }
        }
    }

    /* These functions are related to opening and closing modals with angular 2 and materialize CSS */
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

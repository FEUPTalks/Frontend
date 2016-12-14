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

    /* Get the child component -> pendingChart, in order to update the pecentage */
    @ViewChild(PendingChartComponent) pendingChart : PendingChartComponent;

    /* These actions belong to materializeCSS and allow us to call modals & stuff */
    modalActions1 = new EventEmitter<string|MaterializeAction>();
    modalActions2 = new EventEmitter<string|MaterializeAction>();
    globalActions = new EventEmitter<string|MaterializeAction>();

    constructor(private auth: UserService, private talkService: TalkService) { }

    ngOnInit() {
        let send = { state : 1 };
        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
            data => {
                this.talks = data;
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
    }

    public parse(date: string) {
        return new Date(Date.parse(date));
    }

    acceptTalk(id: number) {
        var data = {};
        data['state'] = 3;
        this.talkService.put("talks/" + id + "/SetState", this.auth.getToken(), data).subscribe(
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
        data['state'] = 2;
        this.talkService.put("talks/" + id + "/SetState", this.auth.getToken(), data).subscribe(
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
            if(this.talks[i]['talkID'] == id) {
                this.talks.splice(i, 1);
                return;
            }
        }
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

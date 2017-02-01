import { Component, AfterViewInit } from '@angular/core';
import {UserService} from "../services/auth/user.service";
import {Talk} from "../services/api/talk";
import {TalkService} from "../services/api/talk.service";

/**
 *	This class represents the dashboard
 */

@Component({
    selector: 'dashboard-cmp',
    templateUrl: './db.component.html',
    styleUrls: ['./db.component.css']
})

export class DashboardComponent implements AfterViewInit {

    public talks : Talk[];
    public talksAccepted : Talk[];
    public talksWaiting : Talk[];

    constructor(private auth: UserService, private talkService : TalkService) {

    }

    /**
     * After view initializing, let's fetch the talks
     */
    ngAfterViewInit() {
        this.getTalks();
    }

    /**
     * Get needed talks from the database, multiple states
     */
    getTalks() {
        let send = { state : 1 };
        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
            data => {
                this.talks = data;
                let send = { state : 3 };
                this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
                    data => {
                        this.talksAccepted = data;
                        let send = { state : 4 };
                        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
                            data => {
                                this.talksWaiting = data;
                            },
                            err => {
                                console.log("Error: " + err);
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
}

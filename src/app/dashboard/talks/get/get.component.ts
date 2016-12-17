import { Component, OnInit } from '@angular/core';

import "rxjs/add/operator/map";

import {Talk} from "../../../services/api/talk";
import {TalkRegistration} from "../../../services/api/talkRegistration";
import {TalkRegistrationLog} from "../../../services/api/talkRegistrationLog";
import {TalkService} from "../../../services/api/talk.service";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/auth/user.service";

@Component({
    selector: 'db-talk-get-cmp',
    templateUrl: './get.component.html',
    styleUrls: ['./get.component.css']
})

export class TalkGetComponent implements OnInit {

    public talk : Talk = null;
    public talkRegistrations : TalkRegistration[] = null;
    public talkRegistrationLogs : TalkRegistrationLog[] = null;
    public id : number = 0;

    constructor(private auth : UserService,
                private talkService: TalkService,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        // + converts string 'id' to a number
        this.id = +this.route.snapshot.params['id'];
        this.getTalks();
        this.getTalkRegistrations();
        this.getTalkRegistrationLogs();
    }

    getTalks() {
        this.talkService.getPrivate("talks/" + this.id, this.auth.getToken(), {}).subscribe(
            data => {
                this.talk = data;
                this.talkService.getImg("picture/" + this.id).subscribe(
                    data => {
                        var image = new Image();
                        image.src = data;
                        image.style.width = "auto";
                        image.style.height = "120px";
                        document.getElementById("talk-avatar").appendChild(image);
                    },
                    err => {
                        console.log(err);
                    });
            },
            err => {
                console.log(err);
            });
    }

    getTalkRegistrations() {
        this.talkService.getPrivate("talkRegistration/" + this.id, this.auth.getToken(), {}).subscribe(
            data => {
                this.talkRegistrations = data;
                console.log(this.talkRegistrations);
            },
            err => {
                console.log(err);
            });
    }

    getTalkRegistrationLogs() {
        this.talkService.getPrivate("talkRegistrationLog/" + this.id, this.auth.getToken(), {}).subscribe(
            data => {
                this.talkRegistrationLogs = data;
            },
            err => {
                console.log(err);
            });
    }
}

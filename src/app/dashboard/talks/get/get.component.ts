import { Component, OnInit } from '@angular/core';

import "rxjs/add/operator/map";

import {Talk} from "../../../services/api/talk";
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
    }

    getTalks() {
        this.talkService.getPrivate("talks/" + this.id, this.auth.getToken(), {}).subscribe(
            data => {
                this.talk = data;
            },
            err => {
                console.log(err);
            });
    }
}

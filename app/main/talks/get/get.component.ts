import { Component, OnInit } from '@angular/core';

import "rxjs/add/operator/map";

import {Talk} from "../../../services/talk";
import {TalkService} from "../../../services/talk.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'talk-get-cmp',
    templateUrl: 'get.component.html',
})

export class TalkGetComponent implements OnInit {

    public talks : Talk[] = null;
    public id : number = 0;

    constructor(private talkService: TalkService,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        // (+) converts string 'id' to a number
        this.id = +this.route.snapshot.params['id'];
        this.getTalks();
    }

    getTalks() {
        this.talkService.get("talks").subscribe(
            data => {
                this.talks = data;
            },
            err => {
                console.log(err);
            });
    }
}
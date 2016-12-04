import { Component, OnInit } from '@angular/core';

import "rxjs/add/operator/map";

import {Talk} from "../../../services/talk";
import {TalkService} from "../../../services/talk.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'talk-get-cmp',
    templateUrl: 'get.component.html',
    styleUrls: ['get.component.css']
})

export class TalkGetComponent implements OnInit {

    public talk : Talk = null;
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
        this.talkService.getOne("talks/" + this.id).subscribe(
            data => {
                this.talk = data;
                console.log(this.talk);
            },
            err => {
                console.log(err);
            });
    }
}
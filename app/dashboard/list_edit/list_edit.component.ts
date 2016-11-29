import { Component, OnInit } from '@angular/core';

import "rxjs/add/operator/map";

import {Talk} from "../../services/talk";
import {TalkService} from "../../services/talk.service";

@Component({
    moduleId: module.id,
    selector: 'talk-list_edit-cmp',
    templateUrl: 'list_edit.component.html',
    styleUrls: ['list_edit.component.css']
})

export class List_EditComponent implements OnInit {

    public talks : Talk[] = null;

    constructor(private talkService: TalkService) {

    }

    ngOnInit() {
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
import { Component, OnInit } from '@angular/core';
import {Talk} from "../services/talk";
import {TalkService} from "../services/talk.service";

/**
 *	This class represents the dashboard
 */

@Component({
    moduleId: module.id,
    selector: 'dashboard-cmp',
    templateUrl: 'db.component.html'
})

export class DashboardComponent implements OnInit {

    public talks : Talk[] = null;

    constructor(private talkService: TalkService) {}

    ngOnInit() {
        this.talkService.getTalks("talks").subscribe(
            data => {
                this.talks = data;
            },
            err => {
                console.log(err);
            });
    }
}
import { Component, OnInit } from '@angular/core';

import { TalkService }       from '../../services/talk.service';
import { Talk }              from '../../services/talk';

@Component({
    moduleId: module.id,
    selector: 'db-home-cmp',
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {

    public talks : Talk[] = null;

    constructor(private talkService: TalkService) {}

    ngOnInit() {
        this.talkService.get("talks").subscribe(
            data => {
                this.talks = data;
            },
            err => {
                console.log(err);
            });
    }

    public parse(date : string) {
        return new Date(Date.parse(date));
    }
}
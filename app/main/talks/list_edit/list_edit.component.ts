import { Component, OnInit } from '@angular/core';

import "rxjs/add/operator/map";

import {Talk} from "../../../services/talk";
import {TalkService} from "../../../services/talk.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'talk-list_edit-cmp',
    templateUrl: 'list_edit.component.html',
})

export class List_EditComponent implements OnInit {

    public talks : Talk[] = null;
    rows : any[] = [];
    temp : any[] = [];

    columns = [
        { prop: 'title' },
        { prop: 'date' },
        { prop: 'speakerName' },
        { prop: 'room' },
        { prop: 'controls' }
    ];

    constructor(private talkService: TalkService) {

    }

    ngOnInit() {
        this.getTalks();
    }

    getTalks() {
        this.talkService.get("talks").subscribe(
            data => {
                this.talks = data;
                for(var i = 0; i<this.talks.length; i++) {
                    this.rows.push(
                        {
                            title: this.talks[i].title,
                            date: this.talks[i].date,
                            speakerName: this.talks[i].speakerName,
                            room: this.talks[i].room,
                            controls: this.talks[i].talkID
                        }
                    );
                }
                this.temp = [...this.rows];
            },
            err => {
                console.log(err);
            });
    }

    updateFilter(event) {
        let val = event.target.value;

        // filter our data
        let temp = this.temp.filter(function(d) {
            return d.title.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
    }
}
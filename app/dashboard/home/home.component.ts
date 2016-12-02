import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from '../../shared/materialize';

import { TalkService }       from '../../services/talk.service';
import { Talk }              from '../../services/talk';

@Component({
    moduleId: module.id,
    selector: 'db-home-cmp',
    templateUrl: 'home.component.html',
})


export class HomeComponent implements OnInit {

    public talks : Talk[] = null;
    modalActions = new EventEmitter<string|MaterializeAction>();

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

    openModal() {
        this.modalActions.emit({action:"modal",params:['open']});
        console.log("hey");
    }
    closeModal() {
        this.modalActions.emit({action:"modal",params:['close']});
    }
}
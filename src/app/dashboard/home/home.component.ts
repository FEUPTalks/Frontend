import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from '../../shared/materialize';

import { TalkService }       from '../../services/talk.service';
import { Talk }              from '../../services/talk';

declare var Materialize : any;

@Component({
    selector: 'db-home-cmp',
    templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

    public talks : Talk[] = null;
    modalActions1 = new EventEmitter<string|MaterializeAction>();
    modalActions2 = new EventEmitter<string|MaterializeAction>();
    globalActions = new EventEmitter<string|MaterializeAction>();

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

    openModal1() {
      this.modalActions1.emit({action:"modal",params:['open']});
      console.log("hey");
    }

    closeModal1() {
      this.modalActions1.emit({action:"modal",params:['close']});
    }

    openModal2() {
      this.modalActions2.emit({action:"modal",params:['open']});
      console.log("hey");
    }

    closeModal2() {
      this.modalActions2.emit({action:"modal",params:['close']});
    }

    acceptTalk(id : number) {
      var data = {};
      data['talkID'] = id;
      data['state'] = 2;
      this.talkService.post("talks/" + id, data).subscribe(
        data => {
          Materialize.toast('Success! The talk was accept.', 4000);
          console.log(data);
        },
        err => {
          console.log("Error: " + err);
          Materialize.toast('Error! Not possible to accept this talk.', 4000);
        });
    }

    rejectTalk(id : number) {
      var data = {};
      data['talkID'] = id;
      data['state'] = 3;
      this.talkService.post("talks/" + id, data).subscribe(
        data => {
          Materialize.toast('Success! The talk was reject.', 4000);
          console.log(data);
        },
        err => {
          console.log("Error: " + err);
          Materialize.toast('Error! Not possible to reject this talk.', 4000);
        });
    }
}

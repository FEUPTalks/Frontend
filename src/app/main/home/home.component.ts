import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {TalkService} from "../../services/api/talk.service";
import {Talk} from "../../services/api/talk";
import {TalkListComponent} from "../talks/list/list.component";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})

export class HomeComponent implements AfterViewInit {

    public talks : Talk[] = null;
    @ViewChild(TalkListComponent)
    listEdit : TalkListComponent;

    constructor(private talkService: TalkService) {}

    ngAfterViewInit() {
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

    updateFilter(event) {
        this.listEdit.updateFilter(event);
    }
}

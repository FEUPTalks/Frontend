import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {TalkService} from "../../services/talk.service";
import {Talk} from "../../services/talk";
import {List_EditComponent} from "../talks/list_edit/list_edit.component";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})

export class HomeComponent implements AfterViewInit {

    public talks : Talk[] = null;
    @ViewChild(List_EditComponent)
    listEdit : List_EditComponent;

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

import { Component, OnInit } from '@angular/core';

import { TalkService } from '../../../services/api/talk.service';
import { Talk } from '../../../services/api/talk';
import { UserService } from "../../../services/auth/user.service";

declare var Materialize: any;

@Component({
    selector: 'db-home-employee-cmp',
    templateUrl: './employee.component.html',
})

export class EmployeeComponent implements OnInit {

    public talksApproved: Talk[] = null;

    constructor(private auth: UserService, private talkService: TalkService) { }

    ngOnInit() {
        let send = { state : 4 };
        this.talkService.getPrivate("talks/all", this.auth.getToken(), send).subscribe(
            data => {
                this.talksApproved = data;
                send['state'] = 3;
            },
            err => {
                console.log("Error: " + err);
            });
    }

    public parse(date: string) {
        return new Date(Date.parse(date));
    }
}

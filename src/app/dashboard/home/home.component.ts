import { Component } from '@angular/core';
import { UserService } from "../../services/auth/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'db-home-cmp',
    templateUrl: './home.component.html',
})

export class HomeComponent {

    constructor(private auth : UserService) {

    }
}

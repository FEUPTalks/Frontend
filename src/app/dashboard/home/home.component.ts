import { Component } from '@angular/core';
import { UserService } from "../../services/auth/user.service";

@Component({
    selector: 'db-home-cmp',
    templateUrl: './home.component.html',
})

export class HomeComponent {

    constructor(private auth : UserService) {}
}

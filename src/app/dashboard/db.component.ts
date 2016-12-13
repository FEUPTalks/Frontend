import { Component } from '@angular/core';
import {UserService} from "../services/auth/user.service";

/**
 *	This class represents the dashboard
 */

@Component({
    selector: 'dashboard-cmp',
    templateUrl: './db.component.html',
    styleUrls: ['./db.component.css']
})

export class DashboardComponent {

    constructor(private auth: UserService) {}
}

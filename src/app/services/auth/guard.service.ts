import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: UserService, private router: Router) {}

    /**
     * If user is not logged, we'll send him to login
     * @returns {boolean}
     */
    canActivate() : boolean {
        if (!this.auth.loggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
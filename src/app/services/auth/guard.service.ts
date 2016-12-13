import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: UserService, private router: Router) {}

    /**
     * If user is not logged, we'll send him to login
     * @returns {boolean}
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if (!this.auth.loggedIn()) {
            console.log("Not logged in");
            this.router.navigate(['login']);
            return false;
        }
        if (!this.auth.getProfile()['role'] || this.auth.getProfile()['role'] > route.data['role']) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }
}
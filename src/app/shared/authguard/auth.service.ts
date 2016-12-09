import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private router: Router) {

    }

    // This method will display the lock widget
    login() {

    }

    // This method will log the use out
    logout() {
        // To log out, just remove the token and profile
        // from local storage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');

        // Send the user back to the public deals page after logout
        this.router.navigateByUrl('/home');
    }

    // Finally, this method will check to see if the user is logged in.
    // We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
    loggedIn() {
        return tokenNotExpired();
    }
}
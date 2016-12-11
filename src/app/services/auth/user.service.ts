import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {TalkService} from "../api/talk.service";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    constructor(private talkService: TalkService, private router: Router) {
    }

    /**
     * This method will try to login an user and return the result
     * @param username
     * @param password
     */
    login(username, password) {
        let data = {username: username, password: password};

        let login = this.talkService.post("token-auth", data);
        login.subscribe(
            (res) => {
                console.log(res);
                let json = JSON.parse(res['_body']);
                localStorage.setItem('id_token', json['Token']);
                localStorage.setItem('profile', JSON.stringify(json));
                this.router.navigate(['dashboard']);
            });
        return login;
    }

    /**
     * Removes stuff from cookies and logs user out
     */
    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');

        // Send the user back to the public deals page after logout
        this.router.navigateByUrl('/home');
    }

    /**
     * Checks if user is loggedIn (token not expired)
     * @returns {boolean}
     */
    loggedIn() {
        return tokenNotExpired();
    }


    /**
     * Get user from localStorage profile
     * @returns {any}
     */
    getProfile() {
        return JSON.parse(localStorage.getItem("profile"));
    }
}
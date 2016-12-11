import {Component} from '@angular/core';
import {TalkService} from "../../services/api/talk.service";
import {UserService} from "../../services/auth/user.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    public alert = false;
    public alertText;

    constructor(private auth : UserService, private talkService: TalkService) {}

    login(event, username, password) {
        event.preventDefault();
        this.auth.login(username, password).subscribe(
            (res) => {
                this.alertText = "Sucessfully logged in!";
                this.alert = true;
            },
            (err) => {
                this.alertText = "Incorrect user or password!";
                this.alert = true;
            }
        );
    }

    close() {
        this.alert = false;
    }
}

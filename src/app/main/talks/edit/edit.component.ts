import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {TalkService} from "../../../services/api/talk.service";
import {ActivatedRoute} from "@angular/router";
import {Talk} from "../../../services/api/talk";
import {UserService} from "../../../services/auth/user.service";

declare var Materialize: any;
declare var $: any;

@Component({
    selector: 'talk-edit-cmp',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class TalkEditComponent implements OnInit {

    public talk : Talk = null;
    today = new Date();
    formDateOptions = {
        selectMonths: true,
        selectYears: 1,
        min: new Date((this.today.getMonth() + 1) + "-" + (this.today.getDate() + 5) + "-" + this.today.getFullYear()),
        format: 'mm-dd-yyyy'
    };
    picture: string[] = [];

    constructor(private auth : UserService, private route : ActivatedRoute, private talkService: TalkService) {

    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.talkService.getOne("talks/" + id).subscribe(
            (res) => {
                this.talk = res;
                let date = new Date(res.date);
                res.date = date.toLocaleDateString('en-US').replace(/\//g, "-");
                (<any>$('.timepicker')).clockpicker({
                    autoclose: false,
                    twelvehour: false,
                    default: this.pad(date.getHours()) + ":" + this.pad(date.getMinutes())
                });
            },
            (err) => {
                console.log("Error: " + err);
            });
    }

    submit(data?: any) {
        /* Update form params, because angular doesn't fetch them */
        let id = this.route.snapshot.params['id'];
        var date = new Date(data['startDate']);
        var time = (<any>$("#startTime")).val();
        date.setHours(time.split(":")[0]);
        date.setMinutes(time.split(":")[1]);
        if (!data['dateflex']) data['dateflex'] = 3;
        if (!data['duration']) data['duration'] = 3;
        data['dateflex'] = parseInt(data['dateflex']);
        data['duration'] = parseInt(data['duration']);
        data['date'] = date.toISOString();
        data['speakerPicture'] = 1;
        data['room'] = this.talk.room;
        this.picture['speakerName'] = data['speakerName'];
        /* End of form params */

        let token = this.auth.loggedIn() ? this.auth.getToken() : this.route.snapshot.queryParams["token"];
        console.log("Sending: " + JSON.stringify(data));

        this.talkService.put("talks/" + id, token, data).subscribe(
            (res) => {
                if (res.status === 201 || res.status === 200) {
                    document.querySelectorAll("button[type=submit]")[0].setAttribute("disabled", "true");
                    Materialize.toast('Success! The talk was edited.', 4000);
                }
            },
            (err) => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to edit the talk.', 4000);
            });

        /*this.talkService.postImg("picture", this.picture).subscribe(
         (res) => {
         if (res.status === 201 || res.status === 200) {
         console.log("Image sent!")
         }
         },
         (err) => {
         console.log("Error: " + err);
         });*/
    }

    readFile(file, callback) {
        var reader = new FileReader();
        reader.onload = () => {
            callback(reader.result);
        };
        reader.onerror = () => {
            callback(null);
        };
        reader.readAsDataURL(file);
    }

    fileChange(input) {
        var submit = document.querySelectorAll("button[type=submit]")[0];
        submit.setAttribute("disabled", "true");
        this.readFile(input.files[0], (base64) => {
            this.picture['picture'] = base64;
            submit.removeAttribute("disabled");
        });
    }

    pad(n : number) : number {
        return n<10 ? parseInt('0'+n) : n;
    }
}

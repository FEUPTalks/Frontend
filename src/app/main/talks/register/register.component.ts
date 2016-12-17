import {Component, OnInit, EventEmitter} from '@angular/core';
import {MaterializeAction} from '../../../shared/index';
import 'rxjs/Rx';
import {TalkService} from "../../../services/api/talk.service";

declare var Materialize: any;
declare var $: any;

@Component({
    selector: 'talk-register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    breadcumb: Object[] = [];
    globalActions = new EventEmitter<string|MaterializeAction>();
    today = new Date();
    formDateOptions = {
        selectMonths: true,
        selectYears: 1,
        min: new Date((this.today.getMonth() + 1) + "-" + (this.today.getDate() + 5) + "-" + this.today.getFullYear())
    };
    picture = {};

    constructor(private talkService: TalkService) {

    }

    ngOnInit() {
        (<any>$('.timepicker')).clockpicker({
            autoclose: false,
            twelvehour: false,
        });
        this.breadcumb.push({name: 'Home', routerLink: '/home'});
        this.breadcumb.push({name: 'Register', routerLink: '/talks/register'});
    }

    getPaths() {
        return this.breadcumb;
    }

    submit(data?: any) {
        /* Update form params, because angular doesn't fetch them */
        var date = new Date(data['startDate']);
        var time = (<any>$("#startTime")).val();
        date.setHours(time.split(":")[0]);
        date.setMinutes(time.split(":")[1]);
        if (!data['dateflex']) data['dateflex'] = 3;
        if (!data['duration']) data['duration'] = 3;
        data['dateflex'] = parseInt(data['dateflex']);
        data['duration'] = parseInt(data['duration']);
        data['date'] = date.toISOString();
        data['snack'] = data['snack'] ? 1 : 0;
        data['room'] = "";
        /* End of form params */

        console.log(this.picture);

        this.talkService.postImg("picture", this.picture).subscribe(
            (res) => {
                if (res.status === 201 || res.status === 200) {
                    console.log(res);
                    data['speakerPicture'] = parseInt(res['_body']);
                    this.talkService.post("talks", data).subscribe(
                        (res) => {
                            if (res.status === 201 || res.status === 200) {
                                document.querySelectorAll("button[type=submit]")[0].setAttribute("disabled", "true");
                                Materialize.toast('Success! A new talk was proposed.', 4000);
                            }
                        },
                        (err) => {
                            console.log("Error: " + err);
                            Materialize.toast('Error! Not possible to submit a new talk.', 4000);
                        });
                }
            },
            (err) => {
                console.log("Error: " + err);
            });
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
            this.picture['speakerPicture'] = base64;
            submit.removeAttribute("disabled");
        });
    }
}

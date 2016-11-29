import {Component, OnInit, EventEmitter} from '@angular/core';
import {MaterializeAction} from '../../../shared/index';
import 'rxjs/Rx';
import '../../../assets/js/material-datetime.js';
import {TalkService} from "../../../services/talk.service";

declare var Materialize : any;

@Component({
    moduleId: module.id,
    selector: 'talk-register-cmp',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    globalActions = new EventEmitter<string|MaterializeAction>();

    constructor(private talkService : TalkService) {

    }

    ngOnInit() {
        (<any>$('.timepicker')).clockpicker({
            autoclose: false,
            twelvehour: false,
        });
    }

    submit(data? : any) {
        /* Update form params, because angular doesn't fetch them */
        var date = new Date(data['startDate']);
        var time = (<any>$("#startTime")).val();
        date.setHours(time.split(":")[0]);
        date.setMinutes(time.split(":")[1]);
        data['date'] = date.toISOString();
        data['speakerPicture'] = 1;
        data['room'] = "";
        /* End of form params */

        console.log("Sending: " + JSON.stringify(data));

        this.talkService.post("talks", data).subscribe(
            (res) => {
                if(res.status === 201 || res.status === 200) {
                    document.querySelectorAll("button[type=submit]")[0].setAttribute("disabled", "true");
                    Materialize.toast('Success! A new talk was proposed.', 4000);
                }
            },
            (err) => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to submit a new talk.', 4000);
            });
    }
}
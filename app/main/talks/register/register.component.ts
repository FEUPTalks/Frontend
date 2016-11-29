import {Component, OnInit}                      from '@angular/core';
import 'rxjs/Rx';
import '../../../assets/js/material-datetime.js';
import {TalkService} from "../../../services/talk.service";

@Component({
    moduleId: module.id,
    selector: 'talk-register-cmp',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    constructor(private talkService : TalkService) {

    }

    ngOnInit() {
        (<any>$('.timepicker')).clockpicker({
            autoclose: false,
            twelvehour: false,
        });
    }

    submit(data? : any) {
        /* Update JQuery params, because angular doesn't fetch them */
        data['proposedInitialDate'] = data['startDate'] + "T" + (<any>$("#startTime")).val() + "Z";
        data['proposedEndDate'] = data['endDate'] + "T" + (<any>$("#endTime")).val() + "Z";
        data['proposedEndDate'] = "2016-11-10T12:00:00Z";
        data['duration'] = 1;
        data['speakerPicture'] = 1;
        data['hostEmail'] = "noidea@gmail.com";
        data['snack'] = "hey";
        data['room'] = 15;
        data['state'] = 0;
        /* End of JQuery params */

        this.talkService.post("talks", data).subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);
            });
    }
}
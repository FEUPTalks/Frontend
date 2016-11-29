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
        data['startTime'] = (<any>$("#startTime")).val();
        data['endTime'] = (<any>$("#endTime")).val();
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
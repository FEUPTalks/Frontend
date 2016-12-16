import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";

import {Talk} from "../../../services/api/talk";
import {TalkService} from "../../../services/api/talk.service";
import {Router, ActivatedRoute} from "@angular/router";

declare var Materialize: any;

@Component({
    selector: 'talk-get-cmp',
    templateUrl: './get.component.html',
    styleUrls: ['./get.component.css']
})

export class TalkGetComponent implements OnInit {

    public talk : Talk = null;
    public id : number = 0;

    constructor(private talkService: TalkService,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        // + converts string 'id' to a number
        this.id = +this.route.snapshot.params['id'];
        this.getTalk();
    }

    getTalk() {
        this.talkService.getOne("talks/" + this.id).subscribe(
            data => {
                this.talk = data;
                var image = new Image();
                image.src = this.talk['speakerPicture'];
                image.style.width = "auto";
                image.style.height = "120px";
                document.getElementById("talk-avatar").appendChild(image);
            },
            err => {
                console.log(err);
            });
    }

    submit(data?: any) {
        /* Update form params, because angular doesn't fetch them */
        data['talkID'] = this.id;
        /* End of form params */

        console.log("Sending: " + JSON.stringify(data));

        this.talkService.post("talkRegistration", data).subscribe(
            (res) => {
                if (res.status === 201 || res.status === 200) {
                    document.querySelectorAll("button[type=submit]")[0].setAttribute("disabled", "true");
                    Materialize.toast('Success! You have registered as an attendee for this talk.', 4000);
                }
            },
            (err) => {
                console.log("Error: " + err);
                Materialize.toast('Error! Not possible to register as an attendee for this talk.', 4000);
            });
    }
}

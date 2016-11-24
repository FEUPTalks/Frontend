import { Component }                      from '@angular/core';
import { Http, Response }                 from '@angular/http';
import { Headers, RequestOptions }        from '@angular/http';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'talk-register-cmp',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent {

    constructor(private http:Http) {

    }

    submit() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var req = {};
        req['title'] = "test";

        this.http.post('http://les16b.fe.up.pt/talks', JSON.stringify(req), options).map(res => res.json())
            .subscribe(
                data => req['response'] = "not sure how to get response yet",
                err => console.log('ERROR!!!'),
                () => console.log('Got response from API', req['response'])
            );
    }
}
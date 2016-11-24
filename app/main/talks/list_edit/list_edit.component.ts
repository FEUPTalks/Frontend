import {Injectable}    from '@angular/core';

import { Component }                      from '@angular/core';
import { Http, Response }                 from '@angular/http';
import { Headers, RequestOptions }        from '@angular/http';

import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/map";

@Component({
    moduleId: module.id,
    selector: 'talk-list_edit-cmp',
    templateUrl: 'list_edit.component.html',
    styleUrls: ['list_edit.component.css']
})

@Injectable()
export class List_EditComponent {

 constructor(private http:Http) {

    }

    getTalks() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var req = {};
        req['title'] = "test";
        let body = JSON.stringify(req);     
        return this.http.get('http://les16b.fe.up.pt/talks').map(res => res.json())
        .subscribe(
                data => req['response'] = "not sure how to get response yet",
                err => console.log('ERROR!!!'),
                () => console.log("Finished")

             );
          }

     editTalks(){

     }  

     updateTalks() {
         let headers = new Headers({'Content-Type': 'application/json'});
         let options = new RequestOptions({headers: headers});
         var req = {};
         req['title'] = "test";
         let body = JSON.stringify(req);
         return this.http.put('http://les16b.fe.up.pt/talks' + body, headers).map((res:Response) => res.json());
       
     }


      deleteTalks(

      ) {
         return this.http.delete('http://les16b.fe.up.pt/talks');
        }

    }
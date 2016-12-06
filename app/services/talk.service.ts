import { Http, Response }                 from '@angular/http';
import { Headers, RequestOptions }        from '@angular/http';
import { Injectable }                     from '@angular/core';
import { Observable }                     from 'rxjs/Rx';

import { Talk }                           from './talk';

@Injectable()
export class TalkService {
    private baseUrl: string = 'http://localhost:8144/';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    private options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http:Http) {

    }

    get(path : string) : Observable<Talk[]> {
        return this.http.get(this.baseUrl + path)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    getOne(path : string) : Observable<Talk> {
        return this.http.get(this.baseUrl + path)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    post(path : string, vals : string) : Observable<Response> {
        return this.http.post(this.baseUrl + path, JSON.stringify(vals))
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    postImg(path : string, vals : string) : Observable<Response> {
        return this.http.post(this.baseUrl + path, JSON.stringify(vals))
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
}
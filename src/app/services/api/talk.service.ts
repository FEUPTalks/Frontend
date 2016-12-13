import {Http, Response, URLSearchParams}                 from '@angular/http';
import { Headers, RequestOptions }        from '@angular/http';
import { Injectable }                     from '@angular/core';
import { Observable }                     from 'rxjs/Rx';

import { Talk }                           from './talk';

@Injectable()
export class TalkService {
    private baseUrl: string = 'http://localhost:8144/';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    private options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http:Http) {}

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

    getPrivate(path : string, token : string, vals : any) : Observable<any> {
        /* Set headers and query params */
        let headers : Headers = new Headers();
        let params: URLSearchParams = new URLSearchParams();
        if(token)
            headers.append("Authorization", "Bearer " + token);
        for(let key in vals)
            params.set(key, vals[key]);
        /* Return the request with headers and respective params */
        return this.http.get(this.baseUrl + path, { headers : headers, search : params })
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    post(path : string, vals : any) : Observable<Response> {
        return this.http.post(this.baseUrl + path, JSON.stringify(vals))
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    postImg(path : string, vals : any) : Observable<Response> {
        return this.http.post(this.baseUrl + path, JSON.stringify(vals))
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    put(path : string, token : string, vals : any) : Observable<Response> {
        /* Set headers and query params */
        let headers : Headers = new Headers();
        let params: URLSearchParams = new URLSearchParams();
        if(token)
            headers.append("Authorization", "Bearer " + token);
        for(let key in vals)
            params.set(key, vals[key]);
        return this.http.put(this.baseUrl + path, JSON.stringify(vals), { headers : headers, search: params })
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
}

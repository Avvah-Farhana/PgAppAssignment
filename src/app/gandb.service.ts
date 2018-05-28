import { Injectable, EventEmitter } from '@angular/core';
import { Http , Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'; 
import { PinkArrayType } from './pink';

@Injectable()
export class GandBService {
    private girlsUrl = "app/girlsdata.json";
    constructor(private http:Http){}

    // getGirls():Observable<PinkArrayType[]>{
    //     return this.http.get(this.girlsUrl)
    //     .map((response:Response)=><PinkArrayType[]> response.json())
    //     .do(data=>console.log(JSON.stringify(data)));
    // }

    getGirls():Observable<PinkArrayType[]>{
        return this.http.get('http://localhost:8000/api/girls/list')
        .map((response:Response)=><PinkArrayType[]> response.json())
        .do(data=>console.log(JSON.stringify(data)));
    }


    addmemb(memb:PinkArrayType)
    {
        console.log(memb);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:8000/api/girls',JSON.stringify(memb), {headers:headers});
        
    }

    private handleError(error: Response) { 
        console.error(error); 
        return Observable.throw(error.json().error()); 
     } 
}
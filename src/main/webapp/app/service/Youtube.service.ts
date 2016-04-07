import { Injectable} from 'angular2/core';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Rx';
import { Http, Response } from 'angular2/http';
import { Song } from "../model/Song";
//import 'rxjs/Rx';

@Injectable()
export class YoutubeService {
    constructor(private _http:Http) {}
    
    getSongs(country:string) {
//        console.log('_http' + _http);
       // console.log(_http);
        return this._http.get('chart/top100?country=kpop').map((response: Response) => <Song[]> response.json().songs());
    }
    
}
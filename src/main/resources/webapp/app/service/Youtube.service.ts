
import { Injectable} from 'angular2/core';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Rx';
import { Http, Response } from 'angular2/http';
import { Song } from "../model/Song";
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';

//test123
@Injectable()
export class YoutubeService {
    constructor(private _http:Http) {}
    
    getSongs(country:string) {
        return this._http.get('/chart/top100?country=' + country).map((response: Response) => {
            return <Song[]> response.json().songs;
        });
    }
    
}
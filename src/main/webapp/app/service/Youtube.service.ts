
import { Injectable} from 'angular2/core';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Rx';
import { Http, Response } from 'angular2/http';
import { Song } from "../model/Song";
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {
    constructor(private _http:Http) {}
    
    getSongs(country:string) {
        console.log('test1234');
//        return this._http.get('chart/top100?country=kpop').map((response: Response) => <Song[]> response.json().songs);
        return this._http.get('data/kpop.json').map((response: Response) => {
            console.log(response.json());
            return <Song[]> response.json().songs;
        });
    }
    
}
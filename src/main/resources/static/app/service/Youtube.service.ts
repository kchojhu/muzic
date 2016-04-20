import { Injectable} from 'angular2/core';
import { Http, Response} from 'angular2/http';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Rx';
import {  } from 'angular2/http';
import { Song } from "../model/Song";
import { MusicItem } from "../model/MusicItem";
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';

//test123
@Injectable()
export class YoutubeService {
    constructor(private _http:Http) {}
    
    getSongs(musicItem:MusicItem) {
        return this._http.get('/chart/top100?country=' + musicItem.value).map((response: Response) => {
            return <Song[]> response.json().songs;
        });
    }

    getDropdown() {
        return this._http.get('/chart/musicDropdown').map((response: Response) => {
            return <MusicItem[]> response.json();
        });
    }
    
}
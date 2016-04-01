import { Injectable} from "angular2/core";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "angular2/http";
import { Song } from "../model/Song";

@Injectable()
export class YoutubeService {
    constructor(private _http:Http) {}
    
    getSongs(country:string) {
        return this._http.get('chart/top100?country=kpop').map((response: Response) => <Song[]> response.json().songs())
    }
    
}

import { Component, Inject } from 'angular2/core';
import { Song } from '../model/Song';
import { YoutubeService } from '../service/Youtube.service';

@Component({
  selector: 'music-listing',
  template: `
    <div class="music-listing">
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{{selectedCountry}}&nbsp;&nbsp;&nbsp;<span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li *ngFor="#country of countries"><a href="#" (click)="selectCountry(country)" >{{country}}</a></li>
          </ul>
        </div>
        <ol>
            <li *ngFor="#song of songs" class="music-item">
                <p class="title">{{song.songName}}<small class="author"><br>{{song.artistName}}</small></p><img src="{{song.image}}" class="thumb">
            </li>
        </ol>
    </div>
`
})
export class MusicListing {

    songs:Song[];
    
    selectedCountry: string = "Korean";
    
    countries: string[] = ["American", "Japanese", "Korean"];
    
    ngOnInit() {
        this.getSongs();
    }    
    
    selectCountry(country:string) {
        this.selectedCountry = country;
    }
    
    getSongs() {
        this._youtubeService.getSongs('').subscribe(songs => {
         console.log(songs);
         this.songs = songs;   
        }, err => console.log(err));
    }
    
    constructor(private  _youtubeService:YoutubeService) {
//        this.songs = [];
        /*
        console.log('hello');
        let song1 = new Song("YmC53o2_gWk", "Artist Name 1", "Song Name 1", 1, 236, "https://i.ytimg.com/vi/YmC53o2_gWk/default.jpg");
        let song2 = new Song("XyzaMpAVm3s", "Artist Name 2", "Song Name 2", 2, 236, "https://i.ytimg.com/vi/YmC53o2_gWk/default.jpg");
        let song3 = new Song("ToASX6axGuw", "Artist Name 3", "Song Name 3", 3, 236, "https://i.ytimg.com/vi/YmC53o2_gWk/default.jpg");
        
        this.songs.push(song1);
        this.songs.push(song2);
        this.songs.push(song3);*/
    }
}

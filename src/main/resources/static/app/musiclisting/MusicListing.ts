
import { Component, Inject, Output, EventEmitter } from 'angular2/core';
import { Song } from '../model/Song';
import { YoutubeService } from '../service/Youtube.service';
import 'rxjs/Rx';

declare var _:any;
declare var $: any;
//test
@Component({
  selector: 'music-listing',
  template: `
        <div class="dropdown country-dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{{selectedCountry}}&nbsp;&nbsp;&nbsp;<span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li *ngFor="#country of countries"><a href="#" (click)="selectCountry(country)" >{{country}}</a></li>
          </ul>
        </div>

    <div class="music-listing" (window:resize)="onResize($event)" [style.height.px]="height">
        <ol>
            <li *ngFor="#song of songs" [ngClass]="{'music-item':true, selected: song.isSelected}" (click)="selectSong(song)">
                <p class="title">{{song.songName}}<small class="author"><br>{{song.artistName}}</small></p><img src="{{song.image}}" class="thumb">
            </li>
        </ol>
    </div>
`
})
export class MusicListing {

    songs:Song[];
    height:number = 400;
    selectedCountry: string = "Korean";
    currentSong: Song;
    countries: string[] = ["American", "Japanese", "Korean"];
    @Output() selectedSongEvent:EventEmitter<Song> = new EventEmitter<Song>();
    
    onResize(event?) {
        console.log('change height');
        this.height = $(window).height();
    }
    
    ngAfterViewInit() {
        this.onResize();
    }    
    
    ngOnInit() {
        this.getSongs(this.selectedCountry);
    }    
    
    getRandomSong(): Song {
        return this.songs[Math.floor(Math.random() * this.songs.length)];
    };
    
    playRandomSong() {
        this.selectedSongEvent.next(this.getRandomSong());
    }
    
    selectNextSong(song:Song) {
        let songIndex:number = song && song.songIndex || 0;
        songIndex += 1;
        this.selectSong(this.songs[songIndex]);
    }
    
    selectSong(song:Song) {
        this.currentSong.isSelected = false;
//        console.log('song selected:' + JSON.stringify(song));
        this.currentSong = song;
        this.currentSong.isSelected = true;
        this.selectedSongEvent.next(song);
        
    }
    
    selectCountry(country:string) {
        this.selectedCountry = country;
        this.getSongs(country);
    }
    
    getSongs(country:string) {
        this._youtubeService.getSongs(country).subscribe(songs => {
         let songIndex = 0;
         _.each(songs, (song) => song.songIndex = songIndex++);
         this.songs = songs;
            
         this.currentSong = songs[0];
         this.currentSong.isSelected = true;  
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

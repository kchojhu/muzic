import { Component } from 'angular2/core';
import { Song } from '../model/Song';

@Component({
  selector: 'music-listing',
  template: `
    <ol class="music-listing" >
        <li *ngFor="#song of songs">
            <p class="title">{{song.songName}}<small class="author"><br>{{song.artistName}}</small></p><img src="{{song.image}}" class="thumb">
        </li>
    </ol>
  `
})
export class MusicListing {

    songs:Song[];
    
        
    constructor() {
        this.songs = [];
        console.log('hello');
        let song1 = new Song("YmC53o2_gWk", "Artist Name 1", "Song Name 1", 1, 236, "https://i.ytimg.com/vi/YmC53o2_gWk/default.jpg");
        let song2 = new Song("XyzaMpAVm3s", "Artist Name 2", "Song Name 2", 2, 236, "https://i.ytimg.com/vi/YmC53o2_gWk/default.jpg");
        let song3 = new Song("ToASX6axGuw", "Artist Name 3", "Song Name 3", 3, 236, "https://i.ytimg.com/vi/YmC53o2_gWk/default.jpg");
        
        this.songs.push(song1);
        this.songs.push(song2);
        this.songs.push(song3);
    }
}

import { Component } from "angular2/core";
import {Song} from "../model/Song";

  //  <li *ngFor="#song of songs">Test{{song.songName}}</li>
@Component({
  selector: 'music-listing',
  template: `
    what!
  `
})
export class MusicListing /*implements OnInit*/{

    songs:Song[] = [];
    
    //ngOnInit() {
        
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

import { Component, Inject } from 'angular2/core';
import { Song } from '../model/Song';

/*
    <section id="progressContainer">
      <input type="range" id="progress" value="0" max="0"/>
    </section>

    <section id="topList" class="hidden">
      <ol></ol>
    </section>
    <section id="badList" class="hidden">
      <ol></ol>
    </section>

          <button id="volume">&#xf027;</button>
          <button id="info">&#xf129;</button>
          <button id="topListBtn">&#xf0cb;</button>
          <button id="dontPlay">&#xf165;</button>

*/
declare var YT:any;
declare var $:any;
@Component({
  selector: 'music-player',
  template: `
    <section id="video-container">
      <div id="player"></div>
    </section>
    <section id="screen"></section>

    <section id="controlsContainer">
      <div id="playerControls">
          <section id="songInfo" class="hidden"></section>
          <input type="range" id="volumeBar" value="50" max="100" min="0" step="0.025">
          <button id="play" class="hidden">&#xf04b;</button>
          <button id="pause">&#xf04c;</button>
          <button id="next">&#xf04e;</button>
      </div>
    </section>
`
})
export class MusicPlayer {    
    player:any;
    
    ngOnInit() {
       // this.getSongs();
    }    

    ngAfterViewInit() {
//        let ratio, song, width;
//        song_data = JSON.parse(result);
//        songDataReady();
        let width = $(window).width();
        let ratio : number = 16 / 9;
//        song = randSong();
//        current_song = song;
//                    width : $(window).width(),
  //          height : Math.ceil(width / ratio),
        /*
        ,
            events : {
                'onReady' : onPlayerReady,
                'onStateChange' : onPlayerStateChange
            }
        */

        this.player = new YT.Player('player', {
            width : $(window).width(),
            height : Math.ceil(width / ratio),
            videoId : 'YmC53o2_gWk',
            playerVars : {
                controls : 0,
                showinfo : 0,
                modestbranding : 1,
                disablekb : 1,
                cc_load_policy : 0,
                iv_load_policy : 3,
                origin : "http://www.fn1.co/",
                playsinline : 1,
                fs : 0,
                rel : 0,
                wmode : "transparent"
            }
        });
    }
    
    play(song:Song) {
        console.log('play:' + JSON.stringify(song));
    }
    
    constructor() {

    }
}

import { Component, Inject, Output, EventEmitter } from 'angular2/core';
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
declare var YT: any;
declare var $: any;
@Component({
    selector: 'music-player',
    template: `
    <section id="video-container">
          <button id="topListBtn" (click)="togglePlayList()">&#xf0cb;</button>
      <div id="player"></div>
    </section>
    <section id="screen">

    </section>

    <section id="controlsContainer">
      <div id="playerControls">
          <section id="songInfo" class="hidden"></section>
          <input type="range" id="volumeBar" value="50" max="100" min="0" step="0.025">
          <button id="info">&#xf129;</button>

          <button id="play" (click)="play()">{{isPlaying ? '&#xf04c;' :'&#xf04b;' }}</button>
          <button id="pause" class="hidden">&#xf04c;</button>
          <button id="next" (click)="playNext()">&#xf04e;</button>
      </div>
    </section>
`
})
export class MusicPlayer {
    player: any;
    playerEl: any;
    isPlaying: boolean = false;
    currentSong: Song;
    @Output() nextSong: EventEmitter<Song> = new EventEmitter<Song>();
    @Output() togglePlayListEvent: EventEmitter<string> = new EventEmitter<string>();    

    togglePlayList() {
        console.log('playlist1');
        
        this.togglePlayListEvent.emit('toggle playlist');
    }


    playNext() {
        this.nextSong.emit(this.currentSong);
        
    }

    play(song?: Song) {
        console.log('play:' + JSON.stringify(song));


        if (song) {
            this.player.loadVideoById(song.songId);
            this.currentSong = song;
            this.isPlaying = true;
            return;
        }

        if (this.isPlaying) {
            this.player.pauseVideo();
        } else {
            this.player.playVideo();
        }

        this.isPlaying = !this.isPlaying;

    }
    ngOnInit() {
        // this.getSongs();
    }

    ngAfterViewInit() {
        //        let ratio, song, width;
        //        song_data = JSON.parse(result);
        //        songDataReady();
        let width = $(window).width();
        let ratio: number = 16 / 9;
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
        console.log('here');
        console.log(YT.Player);
        this.player = new YT.Player('player', {
            width: $(window).width(),
            height: Math.ceil(width / ratio),
            videoId: 'YmC53o2_gWk',
            playerVars: {
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                disablekb: 1,
                cc_load_policy: 0,
                iv_load_policy: 3,
                origin: "http://www.fn1.co/",
                playsinline: 1,
                fs: 1,
                rel: 0,
                wmode: "transparent"
            },
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this)
            }
        });

        this.playerEl = $("#player");
        $(window).on('resize', () => this.resizeWindow());
        this.resizeWindow();
    }

    onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {

        }
        if (event.data === YT.PlayerState.ENDED) {
            this.nextSong.emit(this.currentSong);
        }
        if (event.data === YT.PlayerState.PAUSED) {
        }
    }

    resizeWindow() {
        let pHeight, pWidth;
        let width = $(window).width();
        let height = $(window).height();
        let ratio = 16 / 9;
        if (width / ratio < height) {
            pWidth = Math.ceil(height * ratio);
            return this.playerEl.width(pWidth).height(height).css({
                left: (width - pWidth) / 2,
                top: 0
            });
        } else {
            pHeight = Math.ceil(width / ratio);
            return this.playerEl.width(width).height(pHeight).css({
                left: 0,
                top: (height - pHeight) / 2
            });
        }
    }

    constructor() {

    }
}

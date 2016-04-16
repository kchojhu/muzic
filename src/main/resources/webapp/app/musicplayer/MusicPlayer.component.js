System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MusicPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MusicPlayer = (function () {
                function MusicPlayer() {
                    this.isPlaying = false;
                    this.nextSong = new core_1.EventEmitter();
                    this.togglePlayListEvent = new core_1.EventEmitter();
                }
                MusicPlayer.prototype.togglePlayList = function () {
                    console.log('playlist1');
                    this.togglePlayListEvent.emit('toggle playlist');
                };
                MusicPlayer.prototype.playNext = function () {
                    this.nextSong.emit(this.currentSong);
                };
                MusicPlayer.prototype.play = function (song) {
                    console.log('play:' + JSON.stringify(song));
                    if (song) {
                        this.player.loadVideoById(song.songId);
                        this.currentSong = song;
                        this.isPlaying = true;
                        return;
                    }
                    if (this.isPlaying) {
                        this.player.pauseVideo();
                    }
                    else {
                        this.player.playVideo();
                    }
                    this.isPlaying = !this.isPlaying;
                };
                MusicPlayer.prototype.ngOnInit = function () {
                    // this.getSongs();
                };
                MusicPlayer.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    //        let ratio, song, width;
                    //        song_data = JSON.parse(result);
                    //        songDataReady();
                    var width = $(window).width();
                    var ratio = 16 / 9;
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
                    $(window).on('resize', function () { return _this.resizeWindow(); });
                    this.resizeWindow();
                };
                MusicPlayer.prototype.onPlayerStateChange = function (event) {
                    if (event.data === YT.PlayerState.PLAYING) {
                    }
                    if (event.data === YT.PlayerState.ENDED) {
                        this.nextSong.emit(this.currentSong);
                    }
                    if (event.data === YT.PlayerState.PAUSED) {
                    }
                };
                MusicPlayer.prototype.resizeWindow = function () {
                    var pHeight, pWidth;
                    var width = $(window).width();
                    var height = $(window).height();
                    var ratio = 16 / 9;
                    if (width / ratio < height) {
                        pWidth = Math.ceil(height * ratio);
                        return this.playerEl.width(pWidth).height(height).css({
                            left: (width - pWidth) / 2,
                            top: 0
                        });
                    }
                    else {
                        pHeight = Math.ceil(width / ratio);
                        return this.playerEl.width(width).height(pHeight).css({
                            left: 0,
                            top: (height - pHeight) / 2
                        });
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MusicPlayer.prototype, "nextSong", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MusicPlayer.prototype, "togglePlayListEvent", void 0);
                MusicPlayer = __decorate([
                    core_1.Component({
                        selector: 'music-player',
                        template: "\n    <section id=\"video-container\">\n          <button id=\"topListBtn\" (click)=\"togglePlayList()\">&#xf0cb;</button>\n      <div id=\"player\"></div>\n    </section>\n    <section id=\"screen\">\n\n    </section>\n\n    <section id=\"controlsContainer\">\n      <div id=\"playerControls\">\n          <section id=\"songInfo\" class=\"hidden\"></section>\n          <input type=\"range\" id=\"volumeBar\" value=\"50\" max=\"100\" min=\"0\" step=\"0.025\">\n          <button id=\"info\">&#xf129;</button>\n\n          <button id=\"play\" (click)=\"play()\">{{isPlaying ? '&#xf04c;' :'&#xf04b;' }}</button>\n          <button id=\"pause\" class=\"hidden\">&#xf04c;</button>\n          <button id=\"next\" (click)=\"playNext()\">&#xf04e;</button>\n      </div>\n    </section>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MusicPlayer);
                return MusicPlayer;
            }());
            exports_1("MusicPlayer", MusicPlayer);
        }
    }
});
//# sourceMappingURL=MusicPlayer.component.js.map
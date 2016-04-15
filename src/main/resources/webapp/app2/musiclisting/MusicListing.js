System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var MusicListing;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            //test
            MusicListing = (function () {
                function MusicListing(_youtubeService) {
                    this._youtubeService = _youtubeService;
                    this.selectedCountry = "Korean";
                    this.countries = ["American", "Japanese", "Korean"];
                    this.selectedSongEvent = new core_1.EventEmitter();
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
                MusicListing.prototype.ngOnInit = function () {
                    this.getSongs(this.selectedCountry);
                };
                MusicListing.prototype.selectNextSong = function (song) {
                    var songIndex = song && song.songIndex || 0;
                    songIndex += 1;
                    this.selectSong(this.songs[songIndex]);
                };
                MusicListing.prototype.selectSong = function (song) {
                    this.currentSong.isSelected = false;
                    //        console.log('song selected:' + JSON.stringify(song));
                    this.currentSong = song;
                    this.currentSong.isSelected = true;
                    this.selectedSongEvent.next(song);
                };
                MusicListing.prototype.selectCountry = function (country) {
                    this.selectedCountry = country;
                    this.getSongs(country);
                };
                MusicListing.prototype.getSongs = function (country) {
                    var _this = this;
                    this._youtubeService.getSongs(country).subscribe(function (songs) {
                        var songIndex = 0;
                        _.each(songs, function (song) { return song.songIndex = songIndex++; });
                        _this.songs = songs;
                        _this.currentSong = songs[0];
                        _this.currentSong.isSelected = true;
                    }, function (err) { return console.log(err); });
                };
                __decorate([
                    core_1.Output()
                ], MusicListing.prototype, "selectedSongEvent", void 0);
                MusicListing = __decorate([
                    core_1.Component({
                        selector: 'music-listing',
                        template: "\n        <div class=\"dropdown country-dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">{{selectedCountry}}&nbsp;&nbsp;&nbsp;<span class=\"caret\"></span></button>\n          <ul class=\"dropdown-menu\">\n            <li *ngFor=\"#country of countries\"><a href=\"#\" (click)=\"selectCountry(country)\" >{{country}}</a></li>\n          </ul>\n        </div>\n\n    <div class=\"music-listing\">\n        <ol>\n            <li *ngFor=\"#song of songs\" [ngClass]=\"{'music-item':true, selected: song.isSelected}\" (click)=\"selectSong(song)\">\n                <p class=\"title\">{{song.songName}}<small class=\"author\"><br>{{song.artistName}}</small></p><img src=\"{{song.image}}\" class=\"thumb\">\n            </li>\n        </ol>\n    </div>\n"
                    })
                ], MusicListing);
                return MusicListing;
            }());
            exports_1("MusicListing", MusicListing);
        }
    }
});
//# sourceMappingURL=MusicListing.js.map
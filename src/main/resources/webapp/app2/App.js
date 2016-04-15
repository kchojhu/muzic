///<reference path="../../../../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/core', './musiclisting/MusicListing', './musicplayer/MusicPlayer.component', 'angular2/http', './service/Youtube.service', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var browser_1, core_1, MusicListing_1, MusicPlayer_component_1, http_1, Youtube_service_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MusicListing_1_1) {
                MusicListing_1 = MusicListing_1_1;
            },
            function (MusicPlayer_component_1_1) {
                MusicPlayer_component_1 = MusicPlayer_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Youtube_service_1_1) {
                Youtube_service_1 = Youtube_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            //         
            App = (function () {
                function App() {
                    console.log('created App');
                }
                App.prototype.nextSongEvent = function (currentSong) {
                    this.musicList.selectNextSong(currentSong);
                };
                App.prototype.selectedSongEvent = function (song) {
                    console.log('song emitted:' + JSON.stringify(song));
                    this.musicPlayer.play(song);
                };
                App.prototype.ngAfterViewInit = function () {
                    var swipe = new SwipeMe(document.getElementById('swipeme'), {
                        accessClasses: {
                            left: 'pull-right',
                            right: 'pull-left'
                        }
                    });
                    function triggerLeft(event) {
                        if (document.getElementById('swipeme').className.indexOf('pull-right') === -1) {
                            swipe.swipe('right');
                        }
                        else {
                            swipe.swipe('left');
                        }
                        if (event.preventDefault)
                            event.preventDefault();
                    }
                    function triggerRight(event) {
                        if (document.getElementById('swipeme').className.indexOf('pull-left') === -1) {
                            swipe.swipe('left');
                        }
                        else {
                            swipe.swipe('right');
                        }
                        if (event.preventDefault)
                            event.preventDefault();
                    }
                };
                __decorate([
                    core_1.ViewChild(MusicPlayer_component_1.MusicPlayer)
                ], App.prototype, "musicPlayer", void 0);
                __decorate([
                    core_1.ViewChild(MusicListing_1.MusicListing)
                ], App.prototype, "musicList", void 0);
                App = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS, Youtube_service_1.YoutubeService],
                        selector: 'hello-world',
                        directives: [MusicListing_1.MusicListing, MusicPlayer_component_1.MusicPlayer],
                        template: "\n<div id=\"swipeme\" class=\"main\">\n    <div id=\"swipeme-main\" class=\"panel panel-main\">\n           <music-player (nextSong)=\"nextSongEvent($event)\"></music-player>\n    </div>\n    <div id=\"swipeme-right\" class=\"panel panel-right\">\n        <music-listing (selectedSongEvent)=\"selectedSongEvent($event)\"></music-listing>\n    </div>\n</div>\n  "
                    })
                ], App);
                return App;
            }());
            exports_1("App", App);
            browser_1.bootstrap(App, []).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=App.js.map
System.register(['angular2/core', 'angular2/common', 'angular2/router', 'services/SpotifyService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, SpotifyService_1;
    var AlbumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SpotifyService_1_1) {
                SpotifyService_1 = SpotifyService_1_1;
            }],
        execute: function() {
            AlbumComponent = (function () {
                function AlbumComponent(routeParams, spotify, locationStrategy) {
                    this.routeParams = routeParams;
                    this.spotify = spotify;
                    this.locationStrategy = locationStrategy;
                    this.id = routeParams.get('id');
                }
                AlbumComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.spotify
                        .getAlbum(this.id)
                        .subscribe(function (res) { return _this.renderAlbum(res); });
                };
                AlbumComponent.prototype.back = function () {
                    this.locationStrategy.back();
                };
                AlbumComponent.prototype.renderAlbum = function (res) {
                    this.album = res;
                };
                AlbumComponent = __decorate([
                    core_1.Component({
                        selector: 'album',
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n  <div *ngIf=\"album\">\n    <h1>{{ album.name }}</h1>\n    <h2>{{ album.artists[0].name }}</h2>\n\n    <p>\n      <img src=\"{{ album.images[1].url }}\">\n    </p>\n\n    <h3>Tracks</h3>\n    <ol>\n      <li *ngFor=\"#t of album.tracks.items\">\n        <a [routerLink]=\"['/Tracks', {id: t.id}]\">\n          {{ t.name }}\n        </a>\n      </li>\n    </ol>\n\n    <p><a href (click)=\"back()\">Back</a></p>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, (typeof (_a = typeof SpotifyService_1.SpotifyService !== 'undefined' && SpotifyService_1.SpotifyService) === 'function' && _a) || Object, router_1.LocationStrategy])
                ], AlbumComponent);
                return AlbumComponent;
                var _a;
            })();
            exports_1("AlbumComponent", AlbumComponent);
        }
    }
});
//# sourceMappingURL=AlbumComponent.js.map
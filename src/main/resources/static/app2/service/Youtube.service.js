System.register(['angular2/core', 'rxjs/Rx', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var YoutubeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            //test123
            YoutubeService = (function () {
                function YoutubeService(_http) {
                    this._http = _http;
                }
                YoutubeService.prototype.getSongs = function (country) {
                    return this._http.get('/chart/top100?country=' + country).map(function (response) {
                        return response.json().songs;
                    });
                };
                YoutubeService = __decorate([
                    core_1.Injectable()
                ], YoutubeService);
                return YoutubeService;
            }());
            exports_1("YoutubeService", YoutubeService);
        }
    }
});
//# sourceMappingURL=Youtube.service.js.map
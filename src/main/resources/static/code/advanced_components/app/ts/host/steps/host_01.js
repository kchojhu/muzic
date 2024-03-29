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
    var Popup, HostSampleApp1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Popup = (function () {
                function Popup() {
                    console.log('Directive bound');
                }
                Popup = __decorate([
                    core_1.Directive({
                        selector: '[popup]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Popup);
                return Popup;
            }());
            HostSampleApp1 = (function () {
                function HostSampleApp1() {
                }
                HostSampleApp1 = __decorate([
                    core_1.Component({
                        selector: 'host-sample-app',
                        directives: [Popup],
                        template: "\n  <div class=\"ui message\" popup>\n    <div class=\"header\">\n      Learning Directives\n    </div>\n\n    <p>\n      This should use our Popup diretive\n    </p>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HostSampleApp1);
                return HostSampleApp1;
            }());
            exports_1("HostSampleApp1", HostSampleApp1);
        }
    }
});
//# sourceMappingURL=host_01.js.map
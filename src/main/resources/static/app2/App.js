///<reference path="../../../../../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var browser_1, core_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    console.log('created App');
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <div id=\"app\">\n        <div id=\"left2\">Left 2</div>\n        <div id=\"left1\">\n            <div id=\"left1A\">Left 1A</div>\n            <div id=\"left1B\">Left 1B</div>\n        </div>\n        <div id=\"main\">Main</div>\n        <div id=\"right1\">Right 10</div>\n    </div>\n  "
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
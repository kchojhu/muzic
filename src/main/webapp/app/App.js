System.register(["angular2/platform/browser", "angular2/core"], function(exports_1, context_1) {
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
                }
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
                App = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n<div id=\"swipeme\" class=\"main\">\n<!--      <div id=\"swipeme-left\" class=\"panel panel-left\">Left off-canvas</div>-->\n    <div id=\"swipeme-main\" class=\"panel panel-main\">\n    Just Testing\n    </div>\n    <div id=\"swipeme-right\" class=\"panel panel-right\">Right off-canvas</div>\n</div>\n  "
                    })
                ], App);
                return App;
            }());
            exports_1("App", App);
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=App.js.map
/// <reference path="../../../../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from "angular2/platform/browser";
import { Component, AfterViewInit, forwardRef } from "angular2/core";
import { MusicListing } from "./musiclisting/MusicListing";

declare var SwipeMe:any;


@Component({
  selector: 'hello-world',
  directives: [MusicListing],
  template: `
<div id="swipeme" class="main">
    <div id="swipeme-main" class="panel panel-main">
    Hello
    <music-listing></music-listing>
    </div>
    <div id="swipeme-right" class="panel panel-right">Right off-canvas</div>
</div>
  `
})
export class App implements AfterViewInit{
        
    constructor() {
        console.log('created App');
    }
    
    ngAfterViewInit() {
            let swipe = new SwipeMe(
            document.getElementById('swipeme'),
            {
                accessClasses: {
                    left: 'pull-right',
                    right: 'pull-left'
                }
            }
        );

        function triggerLeft(event) {
            if (document.getElementById('swipeme').className.indexOf('pull-right') === -1) {
                swipe.swipe('right');
            } else {
                swipe.swipe('left');
            }

            if(event.preventDefault) event.preventDefault();
        }

        function triggerRight(event) {
            if (document.getElementById('swipeme').className.indexOf('pull-left') === -1) {
                swipe.swipe('left');
            } else {
                swipe.swipe('right');
            }

            if(event.preventDefault) event.preventDefault();
        }

    }
}

bootstrap(App);

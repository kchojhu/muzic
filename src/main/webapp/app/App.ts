///<reference path="../../../../node_modules/angular2/typings/browser.d.ts"/>

import { bootstrap } from 'angular2/platform/browser';
import { Component, AfterViewInit, forwardRef } from 'angular2/core';
import { MusicListing } from './musiclisting/MusicListing';
import { MusicPlayer } from './musicplayer/MusicPlayer.component';
import { HTTP_PROVIDERS} from 'angular2/http';
import { YoutubeService } from './service/Youtube.service';

declare var SwipeMe:any;

//          <music-player></music-player>
@Component({
  providers: [HTTP_PROVIDERS, YoutubeService],
  selector: 'hello-world',
  directives: [MusicListing, MusicPlayer],
  template: `
<div id="swipeme" class="main">
    <div id="swipeme-main" class="panel panel-main">
          <music-listing></music-listing>
    </div>
    <div id="swipeme-right" class="panel panel-right">

    </div>
</div>
  `
})
export class App implements AfterViewInit{
        
    constructor() {
        console.log('created App');
//        console.
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

bootstrap(App,[]).catch(err => console.error(err));

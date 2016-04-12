import { Component, Inject } from 'angular2/core';

@Component({
  selector: 'music-player',
  template: `
    <section id="video-container">
      <div id="player"></div>
    </section>
    <section id="screen"></section>
    <section id="progressContainer">
      <input type="range" id="progress" value="0" max="0"/>
    </section>

    <section id="topList" class="hidden">
      <ol></ol>
    </section>
    <section id="badList" class="hidden">
      <ol></ol>
    </section>

    <section id="controlsContainer">
      <div id="playerControls">
          <section id="songInfo" class="hidden"></section>
          <input type="range" id="volumeBar" value="50" max="100" min="0" step="0.025">
          <button id="volume">&#xf027;</button>
          <button id="info">&#xf129;</button>
          <button id="topListBtn">&#xf0cb;</button>
          <button id="dontPlay">&#xf165;</button>
          <button id="play" class="hidden">&#xf04b;</button>
          <button id="pause">&#xf04c;</button>
          <button id="next">&#xf04e;</button>
      </div>
    </section>
`
})
export class MusicPlayer {    
    
    ngOnInit() {
       // this.getSongs();
    }    

    constructor() {

    }
}

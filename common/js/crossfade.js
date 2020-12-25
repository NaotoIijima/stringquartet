/*
 * Copyright 2013 Boris Smus. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CrossfadeSample = function() {
  loadSounds(this, {
    sig0: './common/audio/org/signal_0_short.wav',
    sig45: './common/audio/org/signal_-45_short.wav',
    sig90: './common/audio/org/signal_-90_short.wav',
    sig135: './common/audio/org/signal_-135_short.wav',
    sig180: './common/audio/org/signal_180_short.wav',
    sig_135: './common/audio/org/signal_135_short.wav',
    sig_90: './common/audio/org/signal_90_short.wav',
    sig_45: './common/audio/org/signal_45_short.wav',
    sig0_a: './common/audio/trans/signal_0_short.wav',
    sig45_a: './common/audio/trans/signal_-45_short.wav',
    sig90_a: './common/audio/trans/signal_-90_short.wav',
    sig135_a: './common/audio/trans/signal_-135_short.wav',
    sig180_a: './common/audio/trans/signal_180_short.wav',
    sig_135_a: './common/audio/trans/signal_135_short.wav',
    sig_90_a: './common/audio/trans/signal_90_short.wav',
    sig_45_a: './common/audio/trans/signal_45_short.wav',
    sig0_b: './common/audio/1storder/signal_0_short.wav',
    sig45_b: './common/audio/1storder/signal_-45_short.wav',
    sig90_b: './common/audio/1storder/signal_-90_short.wav',
    sig135_b: './common/audio/1storder/signal_-135_short.wav',
    sig180_b: './common/audio/1storder/signal_180_short.wav',
    sig_135_b: './common/audio/1storder/signal_135_short.wav',
    sig_90_b: './common/audio/1storder/signal_90_short.wav',
    sig_45_b: './common/audio/1storder/signal_45_short.wav'
  });
  console.log("sound loading finished!");
  this.isPlaying = false;
}

CrossfadeSample.prototype.play = function() {
  // Create two sources.
  this.ctl1 = createSource(this.sig0);
  this.ctl2 = createSource(this.sig45);
  this.ctl3 = createSource(this.sig90);
  this.ctl4 = createSource(this.sig135);
  this.ctl5 = createSource(this.sig180);
  this.ctl6 = createSource(this.sig_135);
  this.ctl7 = createSource(this.sig_90);
  this.ctl8 = createSource(this.sig_45);

  this.ctl9 = createSource(this.sig0_a);
  this.ctl10 = createSource(this.sig45_a);
  this.ctl11 = createSource(this.sig90_a);
  this.ctl12 = createSource(this.sig135_a);
  this.ctl13 = createSource(this.sig180_a);
  this.ctl14 = createSource(this.sig_135_a);
  this.ctl15 = createSource(this.sig_90_a);
  this.ctl16 = createSource(this.sig_45_a);

  this.ctl17 = createSource(this.sig0_b);
  this.ctl18 = createSource(this.sig45_b);
  this.ctl19 = createSource(this.sig90_b);
  this.ctl20 = createSource(this.sig135_b);
  this.ctl21 = createSource(this.sig180_b);
  this.ctl22 = createSource(this.sig_135_b);
  this.ctl23 = createSource(this.sig_90_b);
  this.ctl24 = createSource(this.sig_45_b);

  // Mute the second source.
  this.ctl2.gainNode.gain.value = 0;
  this.ctl3.gainNode.gain.value = 0;
  this.ctl4.gainNode.gain.value = 0;
  this.ctl5.gainNode.gain.value = 0;
  this.ctl6.gainNode.gain.value = 0;
  this.ctl7.gainNode.gain.value = 0;
  this.ctl8.gainNode.gain.value = 0;

  this.ctl9.gainNode.gain.value = 0;
  this.ctl10.gainNode.gain.value = 0;
  this.ctl11.gainNode.gain.value = 0;
  this.ctl12.gainNode.gain.value = 0;
  this.ctl13.gainNode.gain.value = 0;
  this.ctl14.gainNode.gain.value = 0;
  this.ctl15.gainNode.gain.value = 0;
  this.ctl16.gainNode.gain.value = 0;

  this.ctl17.gainNode.gain.value = 0;
  this.ctl18.gainNode.gain.value = 0;
  this.ctl19.gainNode.gain.value = 0;
  this.ctl20.gainNode.gain.value = 0;
  this.ctl21.gainNode.gain.value = 0;
  this.ctl22.gainNode.gain.value = 0;
  this.ctl23.gainNode.gain.value = 0;
  this.ctl24.gainNode.gain.value = 0;

  // Start playback in a loop
  var onName = this.ctl1.source.start ? 'start' : 'noteOn';
  this.ctl1.source[onName](0);
  this.ctl2.source[onName](0);
  this.ctl3.source[onName](0);
  this.ctl4.source[onName](0);
  this.ctl5.source[onName](0);
  this.ctl6.source[onName](0);
  this.ctl7.source[onName](0);
  this.ctl8.source[onName](0);

  this.ctl9.source[onName](0);
  this.ctl10.source[onName](0);
  this.ctl11.source[onName](0);
  this.ctl12.source[onName](0);
  this.ctl13.source[onName](0);
  this.ctl14.source[onName](0);
  this.ctl15.source[onName](0);
  this.ctl16.source[onName](0);

  this.ctl17.source[onName](0);
  this.ctl18.source[onName](0);
  this.ctl19.source[onName](0);
  this.ctl20.source[onName](0);
  this.ctl21.source[onName](0);
  this.ctl22.source[onName](0);
  this.ctl23.source[onName](0);
  this.ctl24.source[onName](0);

  // Set the initial crossfade to be just source 1.
  this.crossfade(0);

  function createSource(buffer) {
    var source = context.createBufferSource();
    var gainNode = context.createGain();
    source.buffer = buffer;
    // Turn on looping
    source.loop = false;
    // Connect source to gain.
    source.connect(gainNode);
    // Connect gain to destination.
    gainNode.connect(context.destination);

    return {
      source: source,
      gainNode: gainNode
    };
  }
};

CrossfadeSample.prototype.stop = function() {
  var offName = this.ctl1.source.stop ? 'stop' : 'noteOff';
  this.ctl1.source[offName](0);
  this.ctl2.source[offName](0);
  this.ctl3.source[offName](0);
  this.ctl4.source[offName](0);
  this.ctl5.source[offName](0);
  this.ctl6.source[offName](0);
  this.ctl7.source[offName](0);
  this.ctl8.source[offName](0);

  this.ctl9.source[offName](0);
  this.ctl10.source[offName](0);
  this.ctl11.source[offName](0);
  this.ctl12.source[offName](0);
  this.ctl13.source[offName](0);
  this.ctl14.source[offName](0);
  this.ctl15.source[offName](0);
  this.ctl16.source[offName](0);

  this.ctl17.source[offName](0);
  this.ctl18.source[offName](0);
  this.ctl19.source[offName](0);
  this.ctl20.source[offName](0);
  this.ctl21.source[offName](0);
  this.ctl22.source[offName](0);
  this.ctl23.source[offName](0);
  this.ctl24.source[offName](0);
};

CrossfadeSample.prototype.Pause = function() {
    this.ctl1.source.context.suspend();
    this.ctl2.source.context.suspend();
    this.ctl3.source.context.suspend();
    this.ctl4.source.context.suspend();
    this.ctl5.source.context.suspend();
    this.ctl6.source.context.suspend();
    this.ctl7.source.context.suspend();
    this.ctl8.source.context.suspend();
    this.ctl9.source.context.suspend();
    this.ctl10.source.context.suspend();
    this.ctl11.source.context.suspend();
    this.ctl12.source.context.suspend();
    this.ctl13.source.context.suspend();
    this.ctl14.source.context.suspend();
    this.ctl15.source.context.suspend();
    this.ctl16.source.context.suspend();
    this.ctl17.source.context.suspend();
    this.ctl18.source.context.suspend();
    this.ctl19.source.context.suspend();
    this.ctl20.source.context.suspend();
    this.ctl21.source.context.suspend();
    this.ctl22.source.context.suspend();
    this.ctl23.source.context.suspend();
    this.ctl24.source.context.suspend();
}

CrossfadeSample.prototype.restart = function() {
  this.ctl1.source.context.resume();
  this.ctl2.source.context.resume();
  this.ctl3.source.context.resume();
  this.ctl4.source.context.resume();
  this.ctl5.source.context.resume();
  this.ctl6.source.context.resume();
  this.ctl7.source.context.resume();
  this.ctl8.source.context.resume();
  this.ctl9.source.context.resume();
  this.ctl10.source.context.resume();
  this.ctl11.source.context.resume();
  this.ctl12.source.context.resume();
  this.ctl13.source.context.resume();
  this.ctl14.source.context.resume();
  this.ctl15.source.context.resume();
  this.ctl16.source.context.resume();
  this.ctl17.source.context.resume();
  this.ctl18.source.context.resume();
  this.ctl19.source.context.resume();
  this.ctl20.source.context.resume();
  this.ctl21.source.context.resume();
  this.ctl22.source.context.resume();
  this.ctl23.source.context.resume();
  this.ctl24.source.context.resume();
}

// Fades between 0 (all source 1) and 1 (all source 2)
CrossfadeSample.prototype.crossfade = function(element,position) {
  //var x = parseInt(element.value) / parseInt(element.max);
  var gain1 = 0;
  var gain2 = 0;
  var gain3 = 0;
  var gain4 = 0;
  var gain5 = 0;
  var gain6 = 0;
  var gain7 = 0;
  var gain8 = 0;
  var k = element % 360;
  if(k > 180){
    element = -180 + k%180;
  }else if(k <-180){
    element = 180 + k%180;
  }
  element = element%180;
  //console.log(element);
  if(0<=element && element < 45){
    gain1 = Math.cos(element/45.0 * 0.5*Math.PI);
    gain2 = Math.cos((1.0 - element/45.0) * 0.5*Math.PI);
  }else if(45<=element && element < 90){
    gain2 = Math.cos((element-45)/45.0 * 0.5*Math.PI);
    gain3 = Math.cos((1.0 - (element-45)/45.0) * 0.5*Math.PI);
  }else if(90<=element && element < 135){
    gain3 = Math.cos((element-90)/45.0 * 0.5*Math.PI);
    gain4 = Math.cos((1.0 - (element-90)/45.0) * 0.5*Math.PI);
  }else if(135<=element && element < 180){
    gain4 = Math.cos((element-135)/45.0 * 0.5*Math.PI);
    gain5 = Math.cos((1.0 - (element-135)/45.0) * 0.5*Math.PI);
  }else if(-45<=element && element < 0){
    gain8 = Math.cos((element+45)/45.0 * 0.5*Math.PI);
    gain1 = Math.cos((1.0 - (element+45)/45.0) * 0.5*Math.PI);
  }else if(-90<=element && element < -45){
    gain7 = Math.cos((element+90)/45.0 * 0.5*Math.PI);
    gain8 = Math.cos((1.0 - (element+90)/45.0) * 0.5*Math.PI);
  }else if(-135<=element && element < -90){
    gain6 = Math.cos((element+135)/45.0 * 0.5*Math.PI);
    gain7 = Math.cos((1.0 - (element+135)/45.0) * 0.5*Math.PI);
  }else if(-180<element && element < -135){
    gain5 = Math.cos((element+180)/45.0 * 0.5*Math.PI);
    gain6 = Math.cos((1.0 - (element+180)/45.0) * 0.5*Math.PI);
  }
  // Use an equal-power crossfading curve:
  //var gain1 = Math.cos(x * 0.5*Math.PI);
  //var gain2 = Math.cos((1.0 - x) * 0.5*Math.PI);
  if(position == "1"){
    this.ctl1.gainNode.gain.value = gain1;
    this.ctl2.gainNode.gain.value = gain2;
    this.ctl3.gainNode.gain.value = gain3;
    this.ctl4.gainNode.gain.value = gain4;
    this.ctl5.gainNode.gain.value = gain5;
    this.ctl6.gainNode.gain.value = gain6;
    this.ctl7.gainNode.gain.value = gain7;
    this.ctl8.gainNode.gain.value = gain8;
    this.ctl9.gainNode.gain.value = 0;
    this.ctl10.gainNode.gain.value = 0;
    this.ctl11.gainNode.gain.value = 0;
    this.ctl12.gainNode.gain.value = 0;
    this.ctl13.gainNode.gain.value = 0;
    this.ctl14.gainNode.gain.value = 0;
    this.ctl15.gainNode.gain.value = 0;
    this.ctl16.gainNode.gain.value = 0;
    this.ctl17.gainNode.gain.value = 0;
    this.ctl18.gainNode.gain.value = 0;
    this.ctl19.gainNode.gain.value = 0;
    this.ctl20.gainNode.gain.value = 0;
    this.ctl21.gainNode.gain.value = 0;
    this.ctl22.gainNode.gain.value = 0;
    this.ctl23.gainNode.gain.value = 0;
    this.ctl24.gainNode.gain.value = 0;
  }else if(position == "2"){
    this.ctl1.gainNode.gain.value = 0;
    this.ctl2.gainNode.gain.value = 0;
    this.ctl3.gainNode.gain.value = 0;
    this.ctl4.gainNode.gain.value = 0;
    this.ctl5.gainNode.gain.value = 0;
    this.ctl6.gainNode.gain.value = 0;
    this.ctl7.gainNode.gain.value = 0;
    this.ctl8.gainNode.gain.value = 0;
    this.ctl9.gainNode.gain.value = gain1;
    this.ctl10.gainNode.gain.value = gain2;
    this.ctl11.gainNode.gain.value = gain3;
    this.ctl12.gainNode.gain.value = gain4;
    this.ctl13.gainNode.gain.value = gain5;
    this.ctl14.gainNode.gain.value = gain6;
    this.ctl15.gainNode.gain.value = gain7;
    this.ctl16.gainNode.gain.value = gain8;
    this.ctl17.gainNode.gain.value = 0;
    this.ctl18.gainNode.gain.value = 0;
    this.ctl19.gainNode.gain.value = 0;
    this.ctl20.gainNode.gain.value = 0;
    this.ctl21.gainNode.gain.value = 0;
    this.ctl22.gainNode.gain.value = 0;
    this.ctl23.gainNode.gain.value = 0;
    this.ctl24.gainNode.gain.value = 0;
  }else if(position == "3"){
    this.ctl1.gainNode.gain.value = 0;
    this.ctl2.gainNode.gain.value = 0;
    this.ctl3.gainNode.gain.value = 0;
    this.ctl4.gainNode.gain.value = 0;
    this.ctl5.gainNode.gain.value = 0;
    this.ctl6.gainNode.gain.value = 0;
    this.ctl7.gainNode.gain.value = 0;
    this.ctl8.gainNode.gain.value = 0;
    this.ctl9.gainNode.gain.value = 0;
    this.ctl10.gainNode.gain.value = 0;
    this.ctl11.gainNode.gain.value = 0;
    this.ctl12.gainNode.gain.value = 0;
    this.ctl13.gainNode.gain.value = 0;
    this.ctl14.gainNode.gain.value = 0;
    this.ctl15.gainNode.gain.value = 0;
    this.ctl16.gainNode.gain.value = 0;
    this.ctl17.gainNode.gain.value = gain1;
    this.ctl18.gainNode.gain.value = gain2;
    this.ctl19.gainNode.gain.value = gain3;
    this.ctl20.gainNode.gain.value = gain4;
    this.ctl21.gainNode.gain.value = gain5;
    this.ctl22.gainNode.gain.value = gain6;
    this.ctl23.gainNode.gain.value = gain7;
    this.ctl24.gainNode.gain.value = gain8;
  }
};

CrossfadeSample.prototype.toggle = function() {
  this.isPlaying ? this.stop() : this.play();
  this.isPlaying = !this.isPlaying;
};

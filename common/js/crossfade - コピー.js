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
    /*
    sig0: '../common/audio/exp(11_9)/signal_0.wav',
    sig45: '../common/audio/exp(11_9)/signal_-45.wav',
    sig90: '../common/audio/exp(11_9)/signal_-90.wav',
    sig135: '../common/audio/exp(11_9)/signal_-135.wav',
    sig180: '../common/audio/exp(11_9)/signal_180.wav',
    sig_135: '../common/audio/exp(11_9)/signal_135.wav',
    sig_90: '../common/audio/exp(11_9)/signal_90.wav',
    sig_45: '../common/audio/exp(11_9)/signal_45.wav',
    sig0_a: '../common/audio/male_0.wav',
    sig45_a: '../common/audio/male_-45.wav',
    sig90_a: '../common/audio/male_-90.wav',
    sig135_a: '../common/audio/male_-135.wav',
    sig180_a: '../common/audio/male_180.wav',
    sig_135_a: '../common/audio/male_135.wav',
    sig_90_a: '../common/audio/male_90.wav',
    sig_45_a: '../common/audio/male_45.wav'
    */
   
    sig0: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_0.wav',
    sig45: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_-45.wav',
    sig90: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_-90.wav',
    sig135: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_-135.wav',
    sig180: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_180.wav',
    sig_135: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_135.wav',
    sig_90: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_90.wav',
    sig_45: '../demo_sample2/common/audio/exp(11_23)/org_half/signal_45.wav',
    sig0_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_0.wav',
    sig45_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_-45.wav',
    sig90_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_-90.wav',
    sig135_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_-135.wav',
    sig180_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_180.wav',
    sig_135_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_135.wav',
    sig_90_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_90.wav',
    sig_45_a: '../demo_sample2/common/audio/exp(11_23)/trans_half/signal_45.wav'
    
   /*
    sig0: '../common/audio/exp(11_23)/org_half/signal_0.wav',
    sig45: '../common/audio/exp(11_23)/org_half/signal_-45.wav',
    sig90: '../common/audio/exp(11_23)/org_half/signal_-90.wav',
    sig135: '../common/audio/exp(11_23)/org_half/signal_-135.wav',
    sig180: '../common/audio/exp(11_23)/org_half/signal_180.wav',
    sig_135: '../common/audio/exp(11_23)/org_half/signal_135.wav',
    sig_90: '../common/audio/exp(11_23)/org_half/signal_90.wav',
    sig_45: '../common/audio/exp(11_23)/org_half/signal_45.wav',
    sig0_a: '../common/audio/exp(11_23)/trans_half/signal_0.wav',
    sig45_a: '../common/audio/exp(11_23)/trans_half/signal_-45.wav',
    sig90_a: '../common/audio/exp(11_23)/trans_half/signal_-90.wav',
    sig135_a: '../common/audio/exp(11_23)/trans_half/signal_-135.wav',
    sig180_a: '../common/audio/exp(11_23)/trans_half/signal_180.wav',
    sig_135_a: '../common/audio/exp(11_23)/trans_half/signal_135.wav',
    sig_90_a: '../common/audio/exp(11_23)/trans_half/signal_90.wav',
    sig_45_a: '../common/audio/exp(11_23)/trans_half/signal_45.wav'
    */
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
};

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
  }
};

CrossfadeSample.prototype.toggle = function() {
  this.isPlaying ? this.stop() : this.play();
  this.isPlaying = !this.isPlaying;
};

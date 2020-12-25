/*var sample = new CrossfadeSample();
window.addEventListener("click", function(){
    // 音を鳴らす
    setTimeout(sample.toggle(this), 50000);
    //sample.toggle(this);
    console.log("sound started!");
}, { once: true});

addEventListener('mousemove', {sample, handleEvent: direction},false);
function direction(e) {
    var camera = document.getElementById('camera');
    var rotation = camera.getAttribute('rotation');
    var position = document.getElementById('pos');
    console.log(rotation.y); 
    this.sample.crossfade(rotation.y,position.value);
}

*/

// 動画を再生する処理
function moviePlay(){
    document.getElementById("video").play();
    document.getElementById("video2").play();
    sample.restart();
}
// 一時停止の処理
function moviePause(){
    document.getElementById("video").pause();
    document.getElementById("video2").pause();
    sample.Pause();
}
// 動画の巻き戻し処理
function movieRewind(){
    var time = 0; // 先頭の秒数にする
    sample.stop();
    document.getElementById("video").currentTime = time;
    document.getElementById("video2").currentTime = time;   
    sample.play();
    console.log(sample.ctl1.source.context.currentTime);
     
    console.log(document.getElementById("video").currentTime);
}

    
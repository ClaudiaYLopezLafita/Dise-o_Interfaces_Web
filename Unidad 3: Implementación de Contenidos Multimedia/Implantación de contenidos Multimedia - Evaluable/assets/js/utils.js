var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
let h2 = document.getElementById("h2");
let content = document.getElementById("textContent");

function closeVideo() {
    video.className = "videoNone";
    btn.className = "videoNone";
    // h2.className = "videoNone";
    content.className = "videoNone";
}

function pauseVideo() {
    if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
    } else {
    video.pause();
    btn.innerHTML = "Play";
    }
}
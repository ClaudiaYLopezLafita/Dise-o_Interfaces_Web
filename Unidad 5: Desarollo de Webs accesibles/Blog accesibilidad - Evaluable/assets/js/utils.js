let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let h2 = document.getElementById("h2");
let content = document.getElementById("textContent");

// btn2.addEventListener("click",pauseVideo,true)
btn.addEventListener("click",closeVideo, true)

function closeVideo() {
    video.className = "videoNone";
    video.muted = true;
    btn.className = "videoNone";
    // h2.className = "videoNone";
    content.className = "videoNone";
}

function pauseVideo() {
    if (video.paused) {
    video.play();
    btn2.innerHTML = "Pause";
    } else {
    video.pause();
    btn2.innerHTML = "Play";
    }
}


const video = document.getElementById("video");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");
const volume = document.getElementById("volume");
const speed = document.getElementById("speed");
const current = document.getElementById("current");
const duration = document.getElementById("duration");


const videos = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/movie.mp4" }
];

let index = 0;

    
function loadVideo(i) {
  video.src = videos[i].src;
  video.load();
}

loadVideo(index);

play.onclick = () => {
  if (video.paused) {
    video.play();
    play.innerText = "⏸";
  } else {
    video.pause();
    play.innerText = "▶";
  }
};

next.onclick = () => {
  index = (index + 1) % videos.length;
  loadVideo(index);
  video.play();
};

prev.onclick = () => {
  index = (index - 1 + videos.length) % videos.length;
  loadVideo(index);
  video.play();
};


video.ontimeupdate = () => {
  if (!video.duration) return;

  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = percent + "%";

  let cmin = Math.floor(video.currentTime / 60);
  let csec = Math.floor(video.currentTime % 60);
  if (csec < 10) csec = "0" + csec;
  current.innerText = `${cmin}:${csec}`;

  let dmin = Math.floor(video.duration / 60);
  let dsec = Math.floor(video.duration % 60);
  if (dsec < 10) dsec = "0" + dsec;
  duration.innerText = `${dmin}:${dsec}`;
};


progressBar.onclick = (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  video.currentTime = (clickX / width) * video.duration;
};


volume.oninput = (e) => {
  video.volume = e.target.value;
};
speed.onchange = (e) => {
  video.playbackRate = e.target.value;
};


video.onended = () => {
  next.click();
};
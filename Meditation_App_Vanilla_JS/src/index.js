import './style.css';

import pauseImg from './assets/svg/pause-solid.svg';
import playImg from './assets/svg/play-solid.svg';

const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  const sounds = document.querySelectorAll('.sound-picker button');
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-select button');

  const outlineLehgth = outline.getTotalLength();
  outline.style.strokeDashoffset = outlineLehgth;
  outline.style.strokeDasharray = outlineLehgth;

  let fakeDuration = 10;

  const changePlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = pauseImg;
    } else {
      song.pause();
      video.pause();
      play.src = playImg;
    }
  };

  play.addEventListener('click', () => {
    changePlaying(song);
  });

  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    console.log(currentTime);
    let elapsed = fakeDuration - currentTime;
    let second = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    let progress = outlineLehgth - (currentTime / fakeDuration) * outlineLehgth;
    outline.style.strokeDashoffset = progress;

    timeDisplay.textContent = `${minutes}:${second}`;

    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      video.pause();
      play.src = pauseImg;
    }
  };
};

app();

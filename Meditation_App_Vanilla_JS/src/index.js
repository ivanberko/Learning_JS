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

  const outlineLehgth = outline.getTotalLength();

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
};

app();

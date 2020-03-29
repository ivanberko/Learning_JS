import './style.css';
import axios from 'axios';
import { v4 } from 'uuid';
import debounce from 'lodash.debounce';
import weatherСardTemplate from './weatherСardTemplate.hbs';

const BASE_URL = 'http://api.weatherunlocked.com/';
const APP_ID = '27a06a50';
const APP_KEY = '723500c913cb96146b5927e270fda988';
const location = {
  sweden: 'se.11144',
};
const LocalWeatherType = {
  current: 'current',
  forecast: 'forecast',
};

axios
  .get(
    `${BASE_URL}api/${LocalWeatherType.current}/${location.sweden}?app_id=${APP_ID}&app_key=${APP_KEY}`,
  )
  .then((res) => {
    console.log(res.data);
    document.body.insertAdjacentHTML(
      'beforeend',
      weatherСardTemplate(res.data),
    );
  });

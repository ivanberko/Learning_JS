import './style.css';
import axios from 'axios';
import { v4 } from 'uuid';
import debounce from 'lodash.debounce';
import weatherСardTemplate from './weatherСardTemplate.hbs';

const BASE_URL = 'http://api.weatherstack.com';
const APP_KEY = 'b5b88288e86ca8d964e678bacfad6dc8';
const location = {
  charkow: 'Charkow,%Ukraine',
};
const LocalWeatherType = {
  current: 'current',
  forecast: 'forecast',
};

axios
  .get(
    `${BASE_URL}/${LocalWeatherType.current}?access_key=${APP_KEY}&query=${location.charkow}`,
  )
  .then((res) => {
    console.log(res.data);

    document
      .querySelector('.wrapper')
      .insertAdjacentHTML('beforeend', weatherСardTemplate(res.data));
  });


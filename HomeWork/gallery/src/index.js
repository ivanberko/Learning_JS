import './style.css';
import templateItem from './temp/templateItem.hbs';
import axios from 'axios';

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '13689220-f8624404383f6a2586dfba74c&q=speed+car&image_type=photo&per_page=9';

axios.get(`${BASE_URL}?key=${KEY}`).then((res) => {
  let dataImg = res.data.hits;
  const createGallery = dataImg.reduce(
    (markup, img) => `${markup}${templateItem(img)}`,
    '',
  );
  galleryList.insertAdjacentHTML('beforeend', createGallery);

  const handleDown = function(event) {
    switch (event.code) {
      case 'Escape':
        lightboxImg.removeAttribute('src');
        lightbox.classList.remove('is-open');
        break;

      case 'ArrowRight': {
        const next = dataImg.findIndex(
          (item) => lightboxImg.src === item.webformatURL,
        );
        if (next + 1 < dataImg.length) {
          lightboxImg.src = dataImg[next + 1].webformatURL;
          return;
        }
        lightboxImg.src = dataImg[0].webformatURL;
        break;
      }

      case 'ArrowLeft': {
        const prev = dataImg.findIndex(
          (item) => lightboxImg.src === item.webformatURL,
        );
        if (prev - 1 >= 0) {
          lightboxImg.src = dataImg[prev - 1].webformatURL;
          return;
        }
        lightboxImg.src = dataImg[dataImg.length - 1].webformatURL;
        break;
      }

      default:
        break;
    }
  };
  const handleOpenModal = function(event) {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
      lightboxImg.src = event.target.dataset.source;
      lightbox.classList.add('is-open');
      document.addEventListener('keyup', handleDown);
    }
  };

  const handleCloseModal = function(event) {
    if (event.target.tagName !== 'IMG') {
      lightboxImg.removeAttribute('src');
      lightbox.classList.remove('is-open');
      document.removeEventListener('keyup', handleDown);
    }
  };

  galleryList.addEventListener('click', handleOpenModal);
  lightbox.addEventListener('click', handleCloseModal);
});

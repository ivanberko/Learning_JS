// $(document).ready(function() {
//   $('.your-class').slick({
//     autoplay: true,
//     arrows: true,
//     fade: true,
//   });
// });

// $('.your-class').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// });

import './style.css';
import listItemTemplate from '../templates/list-item.hbs';

const ul = document.querySelector('ul');

const list = [
  {
    id: 01,
    url: 'https://placeimg.com/500/400/any?t=1584656190994',
    title: 'Title 1',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 02,
    url: 'https://placeimg.com/500/400/any?t=1584656190994',
    title: 'Title 2',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 03,
    url: 'https://placeimg.com/500/400/any?t=1584656190994',
    title: 'Title 3',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 04,
    url: 'https://placeimg.com/500/400/any?t=1584656190994',
    title: 'Title 4',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 05,
    url: 'https://placeimg.com/500/400/any?t=1584656190994',
    title: 'Title 5',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 06,
    url: 'https://placeimg.com/500/400/any?t=1584656190994',
    title: 'Title 6',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 07,
    url: 'https://placeimg.com/500/400/any?t=1584656190994',
    title: 'Title 7',
    text: 'Lorem ipsum dolor sit amet.',
  },
];

const markup = list.map((item) => listItemTemplate(item));
console.log(markup);
ul.insertAdjacentHTML('beforeend', markup);

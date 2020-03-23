import message from './js/message';
import arrow from './js/arrow';
import Timer from './js/counter';
import './style.css';

console.log(message);
console.log(arrow(5, 100));

new Timer({
  element: document.querySelector('#timer-1'),
  initValue: 10,
  step: 5,
});
new Timer({
  element: document.querySelector('#timer-2'),
  initValue: 100,
  step: 10,
});
new Timer({
  element: document.querySelector('#timer-3'),
  initValue: 1,
  step: 1,
});
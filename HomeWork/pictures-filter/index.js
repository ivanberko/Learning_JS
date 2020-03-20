const container = document.querySelector('.container');

container.addEventListener('mouseover', _.debounce(handelMouseover, 300));
container.addEventListener('mouseout', handelMouseout);

function handelMouseover(event) {
  if (event.target.className === 'box__img') {
    event.target.classList.add('remove-filter');
  }
}

function handelMouseout(event) {
  if (event.target.className === 'box__img remove-filter') {
    event.target.classList.remove('remove-filter');
  }
}

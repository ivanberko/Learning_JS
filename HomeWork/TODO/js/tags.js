const tagList = document.querySelector('.js-tags');

tagList.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.currentTarget === e.target) {
    return;
  }
  e.target.classList.toggle('tags__item--active');
}

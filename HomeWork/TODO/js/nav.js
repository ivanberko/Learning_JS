const nav = document.querySelector('.js-nav');

nav.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();
  const activeLink = e.currentTarget.querySelector('.nav__link--active');

  if (e.currentTarget === e.target) {
    return;
  }

  if (activeLink) {
    activeLink.classList.remove('nav__link--active');
  }
  e.target.classList.add('nav__link--active');
}

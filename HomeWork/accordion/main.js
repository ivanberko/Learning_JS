const dropdownList = document.querySelector('.list');
const dropdownContents = document.querySelectorAll('.hidden-content');

dropdownList.addEventListener('click', handleClick);

function handleClick(event) {
  const target = event.target;

  const dropdownConten = target.parentNode.nextElementSibling;

  if (target.tagName === 'BUTTON' && !dropdownConten.classList.contains('is-open')) {
    dropdownContents.forEach((elem) => {
      const listBtn = elem.parentNode.querySelector('.list__btn');

      elem.classList.remove('is-open');
      listBtn.classList.remove('list__btn--transform');
    });

    target.classList.add('list__btn--transform');
    dropdownConten.classList.add('is-open');
  } else if (
    target.tagName === 'BUTTON' &&
    dropdownConten.classList.contains('is-open')
  ) {
    const listBtn = dropdownConten.parentNode.querySelector('.list__btn');
    dropdownConten.classList.remove('is-open');
    listBtn.classList.remove('list__btn--transform');
  }
}

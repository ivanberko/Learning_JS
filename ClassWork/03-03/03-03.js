// const newDiv = document.createElement('div');
// const desc = document.createElement('p');

// const text = document.createTextNode('Lorem');

// desc.append(text);
// newDiv.append(desc);
// document.body.prepend(newDiv);

// const ul = '<ul><li>abc</li><li>abc</li><li>abc</li></ul>';

// newDiv.insertAdjacentHTML('afterbegin', ul);

// const deleteUl = document.querySelector('ul');
// deleteUl.remove();
// newDiv.remove();

// const div = document.querySelector('div');
// div.classList.toggle('first');
// div.style.backgroundColor = 'green';

// // setTimeout(() => {
// //   div.style.backgroundColor = '';
// // }, 2000);

// div.style.height = '60px';

// console.log(getComputedStyle(div).backgroundColor);

const div = document.querySelector('#example');

console.log(div.offsetParent);

console.log(div.offsetLeft);
console.log(div.offsetTop);

console.log(div.offsetHeight);
console.log(div.offsetWidth);

console.log(div.clientHeight);
console.log(div.clientWidth);

console.log(div.getBoundingClientRect());

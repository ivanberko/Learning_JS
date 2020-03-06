// const btn = document.querySelector('button');
// function sayHi(e) {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.type);
// }
// btn.addEventListener('click', sayHi);
// btn.removeEventListener('click', sayHi);

// const div1 = document.querySelector('.div1');
// div1.addEventListener('click', (e) => console.log(e.target));

//==============================================================================

// const table = document.querySelector('table');
// const tds = table.querySelectorAll('td');

// console.log(tds);

// table.addEventListener('click', (e) => {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.tagName);
//   tds.forEach((td) => (td.style.backgroundColor = ''));
//   if (e.target.tagName === 'TD') {
//     e.target.style.backgroundColor = 'red';
//   }
// });

//==============================================================================

// const link = document.querySelector('a');
// link.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('click');
// });

//==============================================================================


const div = document.querySelector('.div');
div.addEventListener('mouseover', (e) => {
  console.log('mouseover');
});

div.addEventListener('mouseout', (e) => {
  console.log('mouseout');
});

div.addEventListener('mousemove', (e) => {
  console.log(`X:${event.clientX}; Y:${event.clientY}`);
});

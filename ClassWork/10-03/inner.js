const list = ['red', 'yellow', 'green'];

// const createLi = (color) => {
//   const li = document.createElement('li');
//   li.innerHTML = color;
//   li.style.backgroundColor = color;
//   return li;
// };

// ==============================================================================================

// const createLi = (color) => {
//   return `<li style="background-color: ${color}">${color}</li>`;
// };

// ==============================================================================================

// const colorList = list.reduce((acc, el) => acc + createLi(el), '');
// console.log(colorList);

// ==============================================================================================

// const ul = document.querySelector('ul');

// class Li {
//   constructor(color) {
//     this.color = color;
//     this.li = document.createElement('li');
//   }
//   addText() {
//     this.li.innerHTML = this.color;
//   }

//   addStyle() {
//     this.li.style.backgroundColor = this.color;
//   }
//   init() {
//     this.addText();
//     this.addStyle();
//     return this.li;
//   }
// }

// const colorList = list.map((el) => new Li(el).init());
// ul.append(...colorList);

//===========================================EVENT==============================================

// document.addEventListener('keyup', function(event) {
//   alert(event.key);
//   alert(event.code);
// });

//===========================================INPUT==============================================

const inputText = document.querySelector('input[name="text"]');
const inputTextarea = document.querySelector('input[name="area"]');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const radio = document.querySelectorAll('input[type="radio"]');
const form = document.querySelector('form');
form.addEventListener('change', (e) => {
  if (e.target.name == 'radio') {
    console.log(e);
  }
});
console.log(radio);

let isMale = false;
checkBoxes[0].addEventListener('change', (e) => {
  isMale = e.target.checked;
  console.log(isMale);
  console.log(e);
});

inputText.addEventListener('focus', () => console.log('focus'));
inputText.addEventListener('blur', () => console.log('blur'));

let name = '';
inputText.addEventListener('change', (e) => {
  name = e.target.value;
  console.log(name);
});

const select = document.querySelector('select');

select.addEventListener('change', (e) => {
  console.log(e.target.value);
});

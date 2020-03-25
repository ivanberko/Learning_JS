import './style.css';
import axios from 'axios';
import { gender, discounts, room, costOfLiving } from './assets/var';
import Guest from './classes/Guest';
// import guests from './assets/db';
import getDateString from './assets/util';
import userTemplate from './userTemplate.hbs';

console.log(userTemplate);

const guestTable = document.querySelector('table');
const guestForm = document.querySelector('form');
const addGuestBtn = document.querySelector('.add-guest');
const modal = document.querySelector('.overlay');
const cancelBtn = document.querySelector('.cancel');

// const createRow = (guest) => {
//   const row = document.createElement('tr');
//   const tds = Object.values(guest).map((value) => {
//     const td = document.createElement('td');
//     td.innerText = Array.isArray(value) ? value.length : value;
//     return td;
//   });
//   row.append(...tds);
//   return row;
// };

// const createRows = (guests) => {
//   return guests.map((guest) => createRow(guest));
// };

// guestTable.append(...createRows(guests));

addGuestBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = '';
  guestForm.reset();
});

guestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = guestForm.querySelectorAll('input');

  let guest = [];
  inputs.forEach(
    (input) =>
      (guest = {
        ...guest,
        [input.name]: input.type !== 'checkbox' ? input.value : input.checked,
      }),
  );
  const gender = guestForm.querySelector('select').value;
  guest = [{ ...guest, gender }];
  const createUser = guest.reduce(
    (markup, user) => `${markup}${userTemplate(user)}`,
    '',
  );
  guestTable.insertAdjacentHTML('beforeend', createUser);
  modal.style.display = '';
  console.log(guest);
});

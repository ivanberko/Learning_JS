import './style.css';
import axios from 'axios';
import { gender, discounts, room, costOfLiving } from './assets/var';
import Guest from './classes/Guest';
import getDateString from './assets/util';
import userTemplate from './userTemplate.hbs';

const guestTable = document.querySelector('table');
const guestForm = document.querySelector('form');
const addGuestBtn = document.querySelector('.add-guest');
const modal = document.querySelector('.overlay');
const cancelBtn = document.querySelector('.cancel');

if (localStorage.getItem('guestList')) {
  const guests = JSON.parse(localStorage.getItem('guestList'));
  guestTable.insertAdjacentHTML(
    'beforeend',
    guests.reduce((markup, guest) => `${markup}${userTemplate(guest)}`, ''),
  );
}

guestTable.addEventListener('click', (e) => {
  if (e.target.className === 'deleteBtn') {
    const row = e.target.closest('tr');
    const guestId = row.querySelector('td').innerText;
    const list = JSON.parse(localStorage.getItem('guestList'));
    localStorage.setItem(
      'guestList',
      JSON.stringify(list.filter((guest) => guest.id !== guestId)),
    );
    console.log(guestId);
    row.remove()
  }
});

addGuestBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

const closeModal = () => {
  modal.style.display = '';
  guestForm.reset();
};

cancelBtn.addEventListener('click', closeModal);

guestForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = guestForm.querySelectorAll('input');
  const gender = guestForm.querySelector('select[name="gender"]').value;
  const room = guestForm.querySelector('select[name="room"]').value;

  let guestData = {};
  inputs.forEach(
    (input) =>
      (guestData = {
        ...guestData,
        [input.name]: input.type !== 'checkbox' ? input.value : input.checked,
      }),
  );

  guestData = { ...guestData, room, gender };
  const guest = new Guest(guestData);
  const list = JSON.parse(localStorage.getItem('guestList'));
  localStorage.setItem(
    'guestList',
    JSON.stringify(!list ? [guest] : [...list, guest]),
  );
  closeModal();
  guestTable.insertAdjacentHTML('beforeend', userTemplate(guest));
});

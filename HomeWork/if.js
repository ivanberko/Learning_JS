"use strict";

// Условные операторы: if, '?'

let reqest = prompt ("Who's there?");
let pass;
let message;

if (reqest === null || reqest === "") {
  message = "Отменено"
} else if (reqest === "Админ") {
  message = "Добро пожаловать"
  pass = prompt ("Введите пароль")

  if (pass === null || pass === "") {
    message = "Отменено"
  } else if (pass === "1q2w3e4r") {
    message = "Hello ser !"
  } else message = "Неверный пароль"
} else message = "Я вас не знаю"

console.log(message);
"use strict";
/*
const age = confirm("Есть 18?");
if (age) {
  console.log("Добро пожаловать");
} else {
  console.log("До свидания");
}

const temp = 35;
console.log(temp);
*/

// =====================================================================


/*
const time = 23;

if (time < 12) {
  console.log("good morning");
} else if (time >= 12 && time <= 18) {
  console.log("good day");
} else {
  console.log("good evening");
}

const isAdult = age > 18 ? true : false;
console.log(isAdult);
*/

// =====================================================================

/*
const num = 14;
const message =
  num < 12
    ? "good morning"
    : num >= 12 && num <= 18
    ? "good day"
    : "good evneng";

console.log(message);
*/

// =====================================================================

/*
const country = "ua";

switch (country) {
  case "ua":
    console.log("Ты из Украины");
    break;
  case "gb":
    console.log("Ты из Англии");
    break;
  case "usa":
    console.log("Ты из США");
    break;
  case "it":
    console.log("Ты из Италии");
    break;
  default:
    console.log("Откуда ты?");
}
*/

// =====================================================================

/*
let count = 0;
let result = 0;

while (count < 10) {
  ++count;
  result += 1;
}
console.log(result);
*/

// =====================================================================

/*
let answer
do {
  answer = prompt("Все хорошо?")
} while (answer);
console.log(answer);
*/

// =====================================================================

let test = 0;

for (let i = 0; i < 10; ++i){
  test += i*2;
  console.log(i);
}
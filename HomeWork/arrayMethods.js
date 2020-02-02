"use strict";
// Методы массива ---------------------------

const fruitString = "apple, orange, mango, cherry"
console.log(fruitString.split(" ")); // (4) ["apple,", "orange,", "mango,", "cherry"]
console.log(fruitString);

const fruit = ["apple", "orange", "mango", "cherry"];

console.log(fruit); // (4) ["apple", "orange", "mango", "cherry"]

console.log(fruit.join(", ")); // apple, orange, mango, cherry

console.log(fruit.indexOf("orange")); // 1

console.log(fruit.indexOf("piar")); // -1

console.log(fruit.includes("apple")); // true

console.log(fruit.includes("melon")); // false

console.log(fruit.push("melon")); // возвращает значение свойства length 5

console.log(fruit); // (5) ["apple", "orange", "mango", "cherry", "melon"]

console.log(fruit.pop()); // возвращает удаленный элемент "melon"

console.log(fruit); // (4) ["apple", "orange", "mango", "cherry"]


const fruitRemoved = fruit.slice(1,3) // удаляет выбраные элементы и сохраняет их в новый массив
console.log(fruitRemoved); // (2) ["orange", "mango"]

console.log(fruit); // (4) ["apple", "orange", "mango", "cherry"] исходный массив остается не изменным

// МЕТОД SPLICE()------------------------------------------------------------------------------------------------

console.log(fruit.splice(0,3)); // (3) ["apple", "orange", "mango"] возвращает удаленные элементы (после элемента с Idx 0)
console.log(fruit); // (1) ["cherry"]

console.log(fruit.splice(1, 0, "apple", "orange", "mango", "melon", "pear")); // [] возвращает пустой массив, ничего не удалено
console.log(fruit); // (6) ["cherry", "apple", "orange", "mango", "melon", "pear"] вставляет элементы перед Idx 1

console.log(fruit.splice(1, 2, "grape")); // (2) ["apple", "orange"] возвращает удаленные элементы (начиная с элемента с Idx 1)
console.log(fruit); // (5) ["cherry", "grape", "mango", "melon", "pear"] вставляет элемент вместо удаленных




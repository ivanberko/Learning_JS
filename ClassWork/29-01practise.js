"use strict";

const users = [
  { id: 1, name: "John", role: "admin", age: 34, gender: "male" },
  { id: 2, name: "Alex", role: "user", age: 14, gender: "male" },
  { id: 3, name: "Sue", role: "admin", age: 25, gender: "female" },
  { id: 4, name: "Alice", role: "user", age: 12, gender: "female" }
];

console.log(users);

/*
function getUsersName(usersArr, prop) {
  const result = [];
  for (const user of usersArr) {
    if (prop in user) {
      result.push(user[prop]);
    }
  }
  return result.length ? result : "Not such prop";
}

const userChoice = prompt("Input prop");

if (userChoice !== null) {
  console.log(getUsersName(users, userChoice));
}
*/

/*
function calcAge(usersArr) {
  let userAge = 0;
  for (let i = 0; i < usersArr.length; i += 1) {
    userAge += usersArr[i].age;
  }
  return userAge / usersArr.length;
}

console.log(calcAge(users));
*/

const getUserById = (id, arr) => {
  let isUserFound = false;
  for (const user of arr) {
    if (user.id === id) {
      isUserFound = true;
      for (const key in user) {
        console.log(`${key} - ${user[key]}`);
      }
    }
  }
  if (!isUserFound) {
    console.log("No user");
  }
};

getUserById(4, users);

"use strict";

const gender = {
  male: "male",
  female: "female"
};

const discount = {
  regular: 0,
  medium: 5,
  high: 10
};

const guests = [
  {
    firstName: "John",
    lastName: "Doe",
    birthDay: "01.01.1989",
    gender: gender.male,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "03.07.1996",
        endDate: "09.07.1996"
      },
      {
        startDate: "23.11.1998",
        endDate: "02.12.1998"
      },
      {
        startDate: "05.05.2001",
        endDate: "07.05.2001"
      }
    ],
    isMarriage: true,
    children: [
      {
        name: "Mary",
        age: 7
      }
    ]
  },
  {
    firstName: "Angelica",
    lastName: "True",
    birthDay: "02.12.1999",
    gender: gender.female,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "03.07.2009",
        endDate: "06.07.2009"
      }
    ],
    isMarriage: false,
    children: [
      {
        name: "",
        age: ""
      }
    ]
  },
  {
    firstName: "Jouy",
    lastName: "Tribiani",
    birthDay: "12.09.1987",
    gender: gender.male,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "24.02.1994",
        endDate: "28.02.1994"
      },
      {
        startDate: "01.05.1996",
        endDate: "18.05.1996"
      }
    ],
    isMarriage: true,
    children: []
  },
  {
    firstName: "Chen",
    lastName: "Bink",
    birthDay: "23.12.1965",
    gender: gender.male,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "02.02.2003",
        endDate: "05.02.2003"
      },
      {
        startDate: "01.05.2007",
        endDate: "18.05.2007"
      },
      {
        startDate: "18.04.2012",
        endDate: "28.04.2012"
      }
    ],
    isMarriage: false,
    children: [
      {
        name: "Susi",
        age: 23
      }
    ]
  }
];

const getUserByGender = (geustArr, gender) =>
  geustArr.filter(guest => guest.gender === gender);

// console.log(getUserByGender(guests, gender.male));

const getUserWithChildren = geustArr =>
  geustArr.filter(guest => !guest.children.length);

// console.log(getUserWithChildren(guests));

const sortByQuntity = geustArr =>
  geustArr
    .sort((a, b) => b.visitHistory.length - a.visitHistory.length)
    .map(guest => ({
      guestName: `${guest.firstName} ${guest.lastName}`,
      visitNumber: guest.visitHistory.length
    }));

// console.log(sortByQuntity(guests));

const formatDate = dataString => {
  const firstIndex = dataString.indexOf(".");
  const day = dataString.slice(0, firstIndex);
  const secondIndex = dataString.indexOf(".", firstIndex + 1);
  const month = dataString.slice(firstIndex + 1, secondIndex);
  const year = dataString.substr(secondIndex + 1, 4);
  return `${year}-${month}-${day}`;
};

// console.log(formatDate("01.12.2002"));

const calcDuration = arrVisits =>
  arrVisits.reduce((result, visit) => {
    result +=
      Date.parse(formatDate(visit.endDate)) -
      Date.parse(formatDate(visit.startDate));
    return result;
  }, 0);

const getDurationUserVisits = array =>
  array
    .map(visits => calcDuration(visits.visitHistory) / 1000 / 60 / 60 / 24)
    .sort((a, b) => b - a);
console.log(getDurationUserVisits(guests));

// вернуть массив пользователей, кто провел больше всего времени в отеле за все время

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
    firstName: "Rachel",
    lastName: "Green",
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
    firstName: "Monica",
    lastName: "Geller",
    birthDay: "02.12.1999",
    gender: gender.female,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "23.05.2013",
        endDate: "01.06.2013"
      },
      {
        startDate: "23.12.2015",
        endDate: "02.01.2016"
      },
      {
        startDate: "05.07.2016",
        endDate: "19.07.2016"
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
    firstName: "Phoebe",
    lastName: "Buffay",
    birthDay: "12.09.1987",
    gender: gender.male,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "03.07.2009",
        endDate: "17.07.2009"
      }
    ],
    isMarriage: true,
    children: []
  },
  {
    firstName: "Joey",
    lastName: "Tribbiani",
    birthDay: "23.12.1965",
    gender: gender.male,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "24.08.1987",
        endDate: "31.08.1987"
      },
      {
        startDate: "13.10.1995",
        endDate: "30.10.1995"
      }
    ],
    isMarriage: false,
    children: [
      {
        name: "Susi",
        age: 23
      }
    ]
  },
  {
    firstName: "Chandler",
    lastName: "Bing",
    birthDay: "16.04.1968",
    gender: gender.male,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "24.09.1995",
        endDate: "01.10.1995"
      },
      {
        startDate: "01.10.2000",
        endDate: "12.10.2000"
      }
    ],
    isMarriage: false,
    children: [
      {
        name: "Susi",
        age: 23
      }
    ]
  },
  {
    firstName: "Ross",
    lastName: "Geller",
    birthDay: "31.12.1970",
    gender: gender.male,
    discountLevel: discount.regular,
    visitHistory: [
      {
        startDate: "03.07.1990",
        endDate: "31.07.1990"
      },
      {
        startDate: "03.10.1999",
        endDate: "21.10.1999"
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
  }, 0) /
  1000 /
  60 /
  60 /
  24;

const getDurationUserVisits = array => {
  return array
    .map(user => ({
      fullName: `${user.firstName} ${user.lastName}`,
      quantityDays: calcDuration(user.visitHistory)
    }))
    .sort((prev, next) => next.quantityDays - prev.quantityDays)
    .filter((user, idx, arr) => arr[0].quantityDays === user.quantityDays);
};

console.log(getDurationUserVisits(guests));

// вернуть массив пользователей, кто провел больше всего времени в отеле за все время, с учетом если таких пользователей несколькою

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
        endDay: "09.07.1996"
      },
      {
        startDate: "23.11.1998",
        endDay: "02.12.1998"
      },
      {
        startDate: "05.05.2001",
        endDay: "07.05.2000"
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
        endDay: "06.07.2009"
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
        endDay: "28.02.1994"
      },
      {
        startDate: "01.05.1996",
        endDay: "18.05.1996"
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
        endDay: "05.02.2003"
      },
      {
        startDate: "01.05.2007",
        endDay: "18.05.2007"
      },
      {
        startDate: "18.04.2012",
        endDay: "28.04.2012"
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
  // const date = '';
  // for (let i = 0; i < dataString.length; i +=1) {
  //   if(dataString[i] === '.'){
  //     date += `${dataString.slice(0, i)}`
  //   }
  // }

  const firstIndex = dataString.indexOf(".");
  const day = dataString.slice(0, firstIndex);
  const secondIndex = dataString.indexOf(".", firstIndex + 1);
  const month = dataString.slice(firstIndex + 1, secondIndex);
  const year = dataString.substr(secondIndex + 1, 4);
  return `${year}-${month}-${day}`;
};

console.log(formatDate("01.12.2002"));

const calcDuration = arrVisit =>
  arrVisit.reduce((result, visit) => {
    result +=
      Date.parse(formatDate(visit.endDay)) -
      Date.parse(formatDate(visit.startDate));
    return result;
  }, 0);

console.log(
  calcDuration([
    {
      startDate: "03.07.2009",
      endDay: "06.07.2009"
    }
  ]) /
    1000 /
    60 /
    60 /
    24
);

// вернуть массив пользователей, кто провел больше всего времени в отеле за все визиты.

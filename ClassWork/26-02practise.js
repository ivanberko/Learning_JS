const gender = {
  male: 'male',
  female: 'female',
};

const discounts = {
  regular: 0,
  medium: 5,
  hight: 10,
};

class Guest {
  static getUserByGender(guestArray, gender) {
    return guestArray.filter((guest) => guest.gender === gender);
  }
  static getUserWithChildren(guestArray) {
    return guestArray.filter((guest) => guest.children.length);
  }
  static sortByQuantity(guestArray) {
    return guestArray
      .sort((a, b) => b.visitsHistory.length - a.visitsHistory.length)
      .map((guest) => ({
        guestName: `${guest.firstName} ${guest.lastName}`,
        visitsNumber: guest.visitsHistory.length,
      }));
  }
  constructor(firstName, lastName, birthDate, gender, isMarriage) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.discountLevel = discounts.regular;
    this.visitsHistory = [];
    this.isMarriage = isMarriage;
    this.children = [];
  }
  calcDuration() {
    return this.visitsHistory.reduce((result, visit) => {
      result += Date.parse(visit.endDate) - Date.parse(visit.startDate);
      return result;
    }, 0);
  }
  calcDiscount() {
    const duration = this.calcDuration();
    if (duration > 20) {
      this.discountLevel = discounts.hight;
    } else if (duration > 10) {
      this.discountLevel = discounts.medium;
    }
  }
  addVisit(start, end) {
    this.visitsHistory = [...this.visitsHistory, new Visit(start, end)];
  }
  addChildren(name, age) {
    this.children = [...this.children, new Child(name, age)];
  }
}

class Child {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Visit {
  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

const guests = [
  {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1989-01-01',
    gender: gender.male,
    discountLevel: discounts.regular,
    visitsHistory: [
      {
        startDate: '1996-07-03',
        endDate: '1996-07-09',
      },
      {
        startDate: '1998-11-23',
        endDate: '1998-12-02',
      },
      {
        startDate: '2001-05-05',
        endDate: '2001-05-07',
      },
    ],
    isMarriage: true,
    children: [
      {
        name: 'Mary',
        age: 7,
      },
    ],
  },
  {
    firstName: 'Angelica',
    lastName: 'True',
    birthDate: '1999-12-02',
    gender: gender.female,
    discountLevel: discounts.regular,
    visitsHistory: [
      {
        startDate: '2017-09-17',
        endDate: '2017-09-23',
      },
      {
        startDate: '2019-02-02',
        endDate: '2019-02-17',
      },
    ],
    isMarriage: false,
    children: [],
  },
  {
    firstName: 'Tom',
    lastName: 'Soyer',
    birthDate: '1968-04-03',
    gender: gender.male,
    discountLevel: discounts.regular,
    visitsHistory: [
      {
        startDate: '2017-08-19',
        endDate: '2017-09-01',
      },
    ],
    isMarriage: true,
    children: [
      {
        name: 'Anna',
        age: 16,
      },
    ],
  },
  {
    firstName: 'Robert',
    lastName: 'Jackson',
    birthDate: '1986-01-30',
    gender: gender.male,
    discountLevel: discounts.regular,
    visitsHistory: [
      {
        startDate: '2006-03-01',
        endDate: '2006-03-05',
      },
      {
        startDate: '2011-07-19',
        endDate: '2011-07-29',
      },
      {
        startDate: '2012-09-08',
        endDate: '2012-09-15',
      },
    ],
    isMarriage: true,
    children: [
      {
        name: 'Jessica',
        age: 9,
      },
    ],
  },
  {
    firstName: 'Suesan',
    lastName: 'Door',
    birthDate: '2001-07-09',
    gender: gender.female,
    discountLevel: discounts.regular,
    visitsHistory: [
      {
        startDate: '2012-09-29',
        endDate: '2012-10-03',
      },
    ],
    isMarriage: false,
    children: [
      {
        name: 'Doug',
        age: 3,
      },
    ],
  },
];

// console.log(Guest.getUserByGender(guests, "male"));
const getDateString = (date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

function createUser() {
  const firstName = prompt('What is your name?');
  const lastName = prompt('What is your lastName?');
  const birthDate = prompt('What is your birthday?');
  const gender = confirm('Are you a man?') ? 'male' : 'female';
  const isMarriage = confirm('Are you marriage?');
  const newGuest = new Guest(
    firstName,
    lastName,
    birthDate,
    gender,
    isMarriage,
  );
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(
    endDate.getDate() + +prompt('How long are you going to stay in the hotel'),
  );

  newGuest.addVisit(getDateString(startDate), getDateString(endDate));

  const childrenNumber = +prompt('How many children do you have?');

  if (childrenNumber) {
    for (let i = 0; i < childrenNumber; i += 1) {
      const childName = prompt('What is your child name?');
      const childAge = prompt('How old is he/she?');
      newGuest.addChildren(childName, childAge);
    }
  }

  newGuest.calcDiscount();

  guests.push(newGuest);
  return newGuest;
}

const ourGuest = createUser();
console.dir(guests);

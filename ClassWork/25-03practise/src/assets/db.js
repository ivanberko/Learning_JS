import { gender, discounts, room, costOfLiving } from './var';
export default [
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

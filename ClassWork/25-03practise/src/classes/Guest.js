import { gender, discounts, room, costOfLiving } from '../assets/var';
import child from './child';
import visit from './visit';
import { v4 } from 'uuid';

export default class Guest {
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

  static getDurationUserVisits(guestArray) {
    return guestArray
      .map((user) => ({
        fullName: `${user.firstName} ${user.lastName}`,
        quantityDays: user.calcDuration(),
      }))
      .sort((prev, next) => next.quantityDays - prev.quantityDays)
      .filter((user, idx, arr) => arr[0].quantityDays === user.quantityDays);
  }
  constructor(firstName, lastName, birthDate, gender, isMarriage, room) {
    this.id = v4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.discountLevel = discounts.regular;
    this.visitsHistory = [];
    this.room = room;
    this.costOfLiving = costOfLiving[room];
    this.isMarriage = isMarriage;
    this.children = [];
  }
  calcDuration() {
    return (
      this.visitsHistory.reduce((result, visit) => {
        result += Date.parse(visit.endDate) - Date.parse(visit.startDate);
        return result;
      }, 0) / 86400000
    );
  }
  calculateCostOfLiving(room) {
    const duration = this.calcDuration();
    this.costOfLiving = duration * costOfLiving[room];
    if (this.discountLevel) {
      this.costOfLiving -= (this.costOfLiving * this.discountLevel) / 100;
    }
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

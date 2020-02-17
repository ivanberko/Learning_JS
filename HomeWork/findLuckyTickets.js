"use strict";
const getLuckyTickets = function(num) {
  let amountLuckyTickets = 0;
  for (let i = 0; i <= num; i += 1) {
    let ticketNumberString = i.toString();
    if (ticketNumberString.length === 4) {
      ticketNumberString = "00" + ticketNumberString;
    } else if (ticketNumberString.length === 5) {
      ticketNumberString = "0" + ticketNumberString;
    }

    if (
      +ticketNumberString[0] + +ticketNumberString[1] + +ticketNumberString[2] ===
      +ticketNumberString[3] + +ticketNumberString[4] + +ticketNumberString[5]
    ) {
      amountLuckyTickets += 1;
    }
  }
  return amountLuckyTickets;
};

console.log(`Quantity lucky tickets : ${getLuckyTickets(999999)} `);

import Time from "./time.js";

let now = new Time('October 31, 2021');

// console.log(now.getTime());
// console.log(now.getDay());
// console.log(now.getMonth());
now.addSeconds(30);
now.addMinutes(2);
now.addHours(1);
now.addDays(3);
now.addMonths(11);
console.log(now.getTime());
now.addYears(-11);
console.log(now.getTime());

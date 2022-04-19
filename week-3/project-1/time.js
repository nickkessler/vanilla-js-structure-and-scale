// Array of days of the week
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Array of the months of the year
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * The Constructor object
 * @param {String} date The date
 */
let Time = function Constructor(date) {
  this.date = new Date(date);
};

/**
 * Get the current time
 * * @return {String}   The curent time
 */
Time.prototype.getTime = function () {
  return this.date;
};

/**
 * Get the current day
 * * @return {String}   The curent day
 */
Time.prototype.getDay = function () {
  let dayIndex = this.date.getDay();
  return days[dayIndex];
};

/**
 * Get the current month
 * * @return {String}   The curent month
 */
Time.prototype.getMonth = function () {
  let monthIndex = this.date.getMonth();
  return months[monthIndex];
};

/**
 * Add seconds
 * * @param  {Number}   number The number of seconds to add to the current time
 */
Time.prototype.addSeconds = function (seconds) {
  this.date.setSeconds(this.date.getSeconds() + seconds);
};

/**
 * Add minutes
 * * @param  {Number}   number The number of minutes to add to the current time
 */
Time.prototype.addMinutes = function (minutes) {
  this.date.setMinutes(this.date.getMinutes() + minutes);
};

/**
 * Add hours
 * * @param  {Number}   number The number of hours to add to the current time
 */
Time.prototype.addHours = function (hours) {
  this.date.setHours(this.date.getHours() + hours);
};

/**
 * Add days
 * * @param  {Number}   number The number of days to add to the current time
 */
Time.prototype.addDays = function (days) {
  this.date.setHours(days * 24);
};

/**
 * Add months
 * * @param  {Number}   number The number of months to add to the current time
 */
Time.prototype.addMonths = function (months) {
  this.date.setMonth(this.date.getMonth() + months);
};

/**
 * Add years
 * * @param  {Number}   number The number of years to add to the current time
 */
Time.prototype.addYears = function (years) {
  this.date.setFullYear(this.date.getFullYear() + years);
};

// Export the constructor object
export default Time;

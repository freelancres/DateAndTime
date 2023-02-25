//console.log(new Date());

let now = new Date();
let Jan01_1970 = new Date(0);

// add 24 hours
let Jan02_1970 = new Date(24 * 3600 * 1000);
//console.log(Jan02_1970);

// get 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(Dec31_1969);

//get 26-01-2015 : get date by string

let date = new Date("2015-01-26");

// Date params :
/**
 * year: 4 digits, 2 digits
 * month : starts from 0 (Jan) to 11 (Dec)
 * date ( the day of month ) 
 * hours / minutes / seconds / ms
 */

date = new Date(1987, 2, 14, 7, 16);
// date = new Date(2011,10);

// Access date components
let year = date.getFullYear();
//console.log(year);
let month = date.getMonth() + 1;
//console.log(month);
let day = date.getDate(); // day of month
// day = date.getDay(); // day of week
//console.log(day);

// getTime()

console.log(date.getTime());
// return the number of 'ms' 
// from 1970 to the date

// getTimezoneOffset()
console.log(now.getTimezoneOffset()); 
// returns the diff between UTC and 
// the local time zone, in minutes

//results
//console.log(date);
//console.log(now);
//console.log(Jan01_1970);

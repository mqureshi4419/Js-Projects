// Dates

let myDate = new Date();
console.log(myDate.toString()); // Wed Jun 03 2026 18:48:40 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Jun 03 2026
console.log(myDate.toLocaleString()); // 6/3/2026, 6:49:09 PM
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now();

console.log(myTimeStamp);// 1780513228444
console.log(myCreatedDate.getTime()); // 1674450180000
console.log(Math.floor(Date.now()/1000)); // 1780513369

let newDate = new Date();
console.log(newDate); // 2026-06-03T19:03:56.661Z
console.log(newDate.getMonth()); // 5
console.log(newDate.getDay()); // 3

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})
const input = require("prompt-sync")();

let minutes = Number(input("Enter number of minutes: "));

let days = Math.round(minutes / 1440);
let hours = Math.round((minutes % 1440) / 60);
let minutes2 = Math.round(minutes % 60);

console.log(`${minutes} minutes is: ${days} days\n${hours} hours,\n${minutes2}  minutes remaining.`);

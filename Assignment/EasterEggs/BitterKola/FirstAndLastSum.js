const input = require("prompt-sync")();

const number = NUmber(input("Enter a five digit number: "));

let  firstDigit = Math.round(Number / 10000);

let LastDigit = number % 10;

let sum = firstDigit + lastDigit;

console.log(`The sum of the first and last digit is ${sum}`);



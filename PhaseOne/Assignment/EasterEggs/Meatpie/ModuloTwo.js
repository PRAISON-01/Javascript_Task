const input = require("prompt-sync")();

const number = Number(input("Enter a Number: "));

let result = number % 2;

console.log("Remainder of "+ number +" when divided by 2 = "+ result);

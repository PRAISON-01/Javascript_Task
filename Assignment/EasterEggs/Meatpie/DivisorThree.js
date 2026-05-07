const input = require("prompt-sync")();

const number = Number(input("Enter number: "));

let result = number / 3;

console.log(`${number} / 3 = ${result.toFixed(2)}`);

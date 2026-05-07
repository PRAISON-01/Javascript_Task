const input = require("prompt-sync")();

const first = Number(input("Enter First Number: "));
const second = Number(input("Enter second Number: "));

let sum = first + second;

let product = first * second;

console.log(`Sum: ${sum}, product: ${product}`);

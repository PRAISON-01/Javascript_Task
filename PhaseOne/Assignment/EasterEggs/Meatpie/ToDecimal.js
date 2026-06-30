const input = require("prompt-sync")();

const number = Number(input("Enter number: "));

console.log(`To decimals: ${number.toFixed(2)}`)

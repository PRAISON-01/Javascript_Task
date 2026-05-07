const input = require("prompt-sync")();

var first = Number(input("Enter first Number: "));

var second = Number(input("Enter second Number: "));

[first, second] = [second, first];

console.log(`After swap first: ${first} `);
console.log(`After swap second: ${second} `);

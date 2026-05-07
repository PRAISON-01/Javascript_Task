const input = require("prompt-sync")();

const height = Number(input("Enter a height: "));
const base = Number(input("Enter a base: "));

let result =(1/2)*(base)*height;
console.log("Area = "+ result);

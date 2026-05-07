const input = require("prompt-sync")();

const length = Number(input("Enter a Length: "));
const width = Number(input("Enter a width: "));

let result = length * width;
console.log("Area = "+ result);

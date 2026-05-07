const input = require("prompt-sync")();

const radius = Number(input("Enter radius of circle: "));

let result = Math.PI * Math.pow(radius , 2);
console.log(`Area of circle: ${result.toFixed(2)}`)

const input = require("prompt-sync")();

const number = Number(input("Enter a number: "));

let count = 0;
let total = 0;
for(; count < 3; count++){

    let lastDigit = number % 10;
    total += lastDigit
    number /= 10;
}

console.log(total)

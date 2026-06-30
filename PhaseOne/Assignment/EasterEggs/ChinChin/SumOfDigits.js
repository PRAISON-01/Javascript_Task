const input = require("prompt-sync")();

let number = Number(input("Enter a number: "));

let count = 0;
let total = 0;
while(number > 0){

    let lastDigit = number % 10;
    total += lastDigit;
    number =  Math.trunc(number / 10);
}

console.log(total)

const input = require("prompt-sync")();

let number = Number(input("Enter a number: "));

if(number % 5 == 0 && number % 4 == 0){
    console.log("Divisible by 4 and 5");
}
if(number % 5 == 0 || number % 4 == 0){
    console.log("Divisible by 4 or 5");
}

if(number % 5 == 0){
    console.log("Divisible 5");
}
if(number % 4 == 0){
    console.log("Divisible by 4");
}

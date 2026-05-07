const input = require("prompt-sync")();

const number = Number(input("Enter a number: "));
if(number % 5 == 0){
    console.log("HiFive");
}
if(number % 2 == 0){
    console.log("HiEven");
}

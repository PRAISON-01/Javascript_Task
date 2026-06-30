const prompt = require("prompt-sync")();

let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));

if(secondNumber % firstNumber == 0){
console.log("The first digit is a multiple of the second number")
}
else{
console.log("The first digit is not a multiple of the second number")
}

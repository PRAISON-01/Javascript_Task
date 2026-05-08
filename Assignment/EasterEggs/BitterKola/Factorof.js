const prompt = require("prompt-sync")();

let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));

if(firstNumber  % secondNumber == 0){
console.log("The first digit is a Factor of the second number")
}
else{
console.log("The first digit is not a Factor of the second number")
}

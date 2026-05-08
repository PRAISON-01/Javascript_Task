const prompt = require("prompt-sync")();

let number = prompt("Enter number: ");
let squareRoot = number ** 0.5;

if(squareRoot % 1 === 0){
console.log("It is a perfect square");
}
else{
console.log("It is not a perfect square");
}



//const prompt = require("prompt-sync")();
//
//let number = Number(prompt("Enter number: "));
//let squareRoot = number ** 0.5;
//
//if (Number.isInteger(squareRoot)) {
//    console.log("It is a perfect square");
//} else {
//    console.log("It is not a perfect square");
//}
//

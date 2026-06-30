/*Write a function that collects two numbers from the user and display their sum. */

const input = require("prompt-sync")();

function add(numOne, numTwo){
        let sum =  numOne + numTwo;
        return sum;
}

const numOne = Number(input("Enter First Number => "));
const numTwo = Number(input("Enter second Number => "));

console.log(add(numOne, numTwo));

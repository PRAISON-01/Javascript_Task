/*Write a program that checks if a number entered by the user is even or odd.*/


const input = require("prompt-sync")();

let number = Number(input("Enter a number => "));
if(number % 2 == 0){
    console.log(`${number} is even`);
}
else{
    console.log(`${number} is Odd`);
}

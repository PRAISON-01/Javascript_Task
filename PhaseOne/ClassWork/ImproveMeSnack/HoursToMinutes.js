/*Write a function that converts hours to minutes.*/

const input = require("prompt-sync")(); 

function toMin(hours){

    let conv = hours * 60;
    return conv;
}

const hours = Number(input('Enter number of hours => '));

console.log(toMin(hours));

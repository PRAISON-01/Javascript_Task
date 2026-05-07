const input = require("prompt-sync")();

const firstName = input("What is your fisrt name: ");
const second = input("What is your second name: ");

let name = firstName + second;

console.log(`Name: ${name}`);

/*Write a function called greetUser that accepts a name and returns a greeting. */
const  input = require("prompt-sync")();
function greetUser(name){


    return console.log(`Hello ${name}`);
}
const name = input("Enter your name => ");

greetUser(name);

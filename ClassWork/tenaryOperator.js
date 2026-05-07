/*Tenary operator conditional operaation*/
const input = require("prompt-sync")();

let age = Number(input("Enter You age: "));
(age < 18)?console.log("I am a child"):console.log("I am an adult");

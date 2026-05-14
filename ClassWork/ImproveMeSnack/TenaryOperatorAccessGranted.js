//let access;  
//
//if (age >= 18) {  access = 'Granted';} else {  access = 'Denied';}
//
//console.log(access);
//
//

const input = require("prompt-sync")();

let access;
const age = Number(input('Enter your age => '));
(age >= 18)?console.log(access = "Granted"):console.log(access = "Denied");



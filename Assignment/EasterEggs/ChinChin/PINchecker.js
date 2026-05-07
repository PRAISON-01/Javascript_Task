const input = require("prompt-sync")();

const inputPIN = Number(input("Enter PIN: "));

let pin;

if(inputPIN == 1234){
    pin = ("Correct PIN\nAmount: $1000")
}
else {
    pin = ("Incorrect PIN!!!");
}

console.log(pin);

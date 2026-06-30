const input = require("prompt-sync")();

let number = Number(input("Enter a number: "));

let x = number;

let reversed = 0;
while(number != 0){
    let lastDigit = number % 10;
    reversed = (reversed * 10) + lastDigit;
    number = Math.trunc(number / 10);
}

if(x == reversed){
    console.log(`${x} is a palindrome`);
}

else{
    console.log(`${x} is 'NOT' a palindrome`);
}




const input = require("prompt-sync")();

const number = Number(input("Enter a Number: "));
if(number < 0){
    console.log("Negative Number");
}
else if(number > 0){
    console.log("Positive Number");
}
else{
    console.log("The Number is Zero");
}

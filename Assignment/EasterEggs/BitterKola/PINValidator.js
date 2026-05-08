const input = require("prompt-sync")();

let pin = Number(input("Enter your pin"));

if(pin >= 1000 && pin <= 9999){
    conosole.log('Valid PIN');
}
else{
    console.log("Invalid PIN");
}

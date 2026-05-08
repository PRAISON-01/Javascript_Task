const input = require("prompt-sync")();

console.log("1. water ($100)\n2. Juice ($200)\n3. Soda ($150)\n4. Snack ($300)");

const position = Number(input("Enter amount: "));

let price = Number(input("Enter price: $"))

let amount;

if(position == 1){

    amount = 100;
}
else if(position == 2){
    amount = 200;
}
else if(position == 3){
    amount = 150;
}
else if(position == 4){
  amount = 300;  
}
else{
    console.log("Invalid");
}

if(price >= amount){
    let change = price -amount;
    console.log(`Your change is $${change}`);
    console.log("item sold")
}
else{
    console.log("In sufficient amount!!!");
}

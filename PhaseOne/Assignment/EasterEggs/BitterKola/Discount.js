const prompt = require("prompt-sync")();

let price = Number(prompt("Enter price: "));
let discount_percentage = Number(prompt("Enter discount percentage: "));

let discount_price = price * discount_percentage / 100;
let finalPrice = price - amount;

console.log("The final price is", finalPrice)

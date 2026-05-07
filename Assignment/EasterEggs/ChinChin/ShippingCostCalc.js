const input = require("prompt-sync")();
let weight = Number(input("Enter weight: "));

let cost;
switch (true) {
    case (weight <= 0):  
        cost = "Invalid"; 
        break;
    case (weight <= 2):  
        cost = 2.5; 
        break;
    case (weight <= 4):  
        cost = 4.5; 
        break;
    case (weight <= 10): 
        cost = 7.5; 
        break;
    case (weight <= 20): 
        cost = 10.5; break;
    default:             
        cost = "Too Heavy";
}

if ( cost === 'number') {
    console.log(`Shipping cost: $${cost.toFixed(2)}`);
} else if (cost === "Too Heavy") {
    console.log("The package cannot be shipped.");
} else {
    console.log("Invalid weight entered.");
}


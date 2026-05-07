const input = require("prompt-sync")();

const first= Number(input("Enter first Number: "));
const second= Number(input("Enter second Number: "));
let largest;
let smaller;
if(first > second){
    largest = first;
    smaller = second
}
else{
    largest = second;
    smaller = first;
}

let sum = largest + smaller;
let diff = largest - smaller;
let product = largest * smaller;
let qoutient = largest / smaller;

const calc = {

    "largest": largest,
    "smallest": smaller,
    "Sum": sum,
    "Difference": diff,
    "Product": product,
    "Qoutient": qoutient,
}

console.log(calc);

//if(smallest == 0){
//    console.log("No unique solution");
//}

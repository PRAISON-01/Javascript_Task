const input = require("prompt-sync")();

let first = Number(input("Enter a first: "));
let second = Number(input("Enter a second: "));
let largest;
let small;
if(first > second){
    largest = first;
    smallest = second;
}
else{
    largest = second;
    smallest = first;
}
let result = largest - smallest;

console.log(result);


const input = require("prompt-sync")();

const ID = Number(input("Enter ID: "));
const isAvailable = Boolean(input("Enter isAvailable: "));
const count = Number(input("How many units: "));
const name = input("Enter Name: ");
const author = input("Enter Author name of book: ");



let ans ={
    
     ID,
     isAvailable,
     count,
     name,
     author,
}

console.log(ans);

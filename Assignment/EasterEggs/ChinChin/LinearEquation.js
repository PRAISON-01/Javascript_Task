const input = require("prompt-sync")();

const a = Number(input("'A': "));
const b = Number(input("'B': ")); 
const c = Number(input("'C': "));

if(a == 0){
    console.log("No Unique solution!");
}
    
else{
let x = (c - b)/ a

console.log(x);

}



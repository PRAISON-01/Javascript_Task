const input = require("prompt-sync")();

const m = Number(input("'M': "));
const n = Number(input("'N': "));

if(n == 0){
 console.log("0");
}
else{

let quotient = m/n;
console.log(quotient);

}



const prompt = require("prompt-sync")();

let score = Number(prompt("Enter the score: "));

switch (true){

    case (score >= 90):
        console.log("A");
        break;
    case (score >= 80):
        console.log("B");
        break;
    case (score >= 70):
        console.log("C");
        break;
    case (score >= 60):
        console.log("D");

    case (score < 60):
        console.log("F");

    default:
        console.log("Invalid score!");

}
//if (score >= 90){
//console.log("A");
//}
//else if (score >= 80){
//console.log("B");
//}
//else if(score >= 70){
//console.log("C");
//}
//else if (score >= 60){
//console.log("D");
//}
//else{
//console.log("F");
//}



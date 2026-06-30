const input = require("prompt-sync")();

const edgeOne = Number(input("Enter a edge one: "));
const edgeTwo = Number(input("Enter a edge two: "));

if(edgeOne != edgeTwo){
    let answer = edgeOne * edgeTwo
    console.log(answer)
}
else{
console.log("Input is invalid")

}

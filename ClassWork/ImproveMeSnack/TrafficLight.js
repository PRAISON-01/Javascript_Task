/* Write a program using a conditional statement that takes a traffic light color and prints the instruct : "Red" → Stop, "Yellow"  →  Get Ready , "Green"  →  Go.*/

const input = require("prompt-sync")();

const color = input("Enter color => ").toLowerCase();

if(color == "red"){
    console.log("STOP!");
}
if(color == "yellow"){
    console.log("READY!!");
}
if(color == "green"){
    console.log("GO!");
}



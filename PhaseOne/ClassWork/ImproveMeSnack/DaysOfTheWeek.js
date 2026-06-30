/*Write a switch statement that takes a day of the week and prints whether it is a Weekday or Weekend.*/

const input = require("prompt-sync")();

const day = input("Enter any day of the week => ");

switch(day){

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("It is a Weekday");
        break; 
        
    case "saturday":
    case "sunday":
        console.log("It is the Weekend");
        break;

    default:
            console.log("Invalid Day")

}


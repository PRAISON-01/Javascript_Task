const input = require("prompt-sync")();

let hour = Number(input("Enter any hour of the day: "));
let greeting;

switch (true) {
    case (hour >= 5 && hour <= 11):
        greeting = "Good Morning!";
        break;
    case (hour >= 12 && hour <= 17):
        greeting = "Good Afternoon!";
        break;
    case (hour >= 18 && hour <= 21):
        greeting = "Good Evening!";
        break;
    default:
        greeting = "Good Night!";
}

    console.log(greeting);

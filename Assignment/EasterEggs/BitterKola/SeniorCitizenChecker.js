const input = requuire("prompt-sync")();

const birthYear = Number(input("Enter your birth year: "));

const year = Number(input("What is the current year: "));

let age = year - birthYear;

if(age >= 65){
    console.log("You are eligible for the senior citizen discount")
}
else{
    console.log("You are not eligible")
}

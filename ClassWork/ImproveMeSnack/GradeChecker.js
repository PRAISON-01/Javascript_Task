/*Write a function that takes a student's score from a user and prints their grade using the following scale: 70 and above  →  A,   60 – 69  →  B,                 50 – 59  →  C,  40 – 49  →  D,  Below 40  →  F*/
const input =require("prompt-sync")();

function getGrade(grade){

    if(grade >= 70){
        return console.log("A");
    }
    if(grade >= 60){
        return console.log("B");
    }
    else if(grade >= 50){
        return console.log("C");
    }
    else if(grade >= 40){
        return console.log("D");
    }
    else{
        return console.log("F");
    }

}

const grade = Number(input("Enter Score => "));

getGrade(grade);

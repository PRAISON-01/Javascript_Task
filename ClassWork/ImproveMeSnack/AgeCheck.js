/*Write a function that accepts a person's age and returns Child, Teen, or Adult.*/

function getAge(age){
    if(age < 13){
        return console.log("Child");
    }
    if(age > 12 || age < 18){
        return console.log("Teen");
    }
    if(age > 18){
        return console.log("Adult");
    }
}

getAge(85);

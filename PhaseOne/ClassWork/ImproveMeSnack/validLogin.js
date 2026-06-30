/*Write a function that collects a username and password from the user and validate login.*/
const input = require("prompt-sync")();


function isValid(name, password){

    let nameR = "praise";
    let pass = 1234;


    if(name == "praise" && password == 1234){
        return console.log('Valid log in');
    }
    
    return console.log("Invalid password or name ");
}

//let name = "prais";
//let password = 1234;
const name = input("Enter name =>");
const password = Number(input("Enter password => "));
isValid(name , password);

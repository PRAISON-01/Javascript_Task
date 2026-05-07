const prompt = require("prompt-sync")();

    const age = prompt("How old are you?: \n"); 


    if(age <= 12){
        console.log("You are a minor");
         
    }
    else if(age < 18){
        console.log("Teenager");
         
    }
    else if(age > 18){
        console.log("Adult");
         
    }
    else if(age == 18){
        console.log("You are 18");
         
    }
    else{
        console.log("Invalid Age");
    }

     if(!age){
        console.log("invalid");
    }
    else{
        console.log("login");
    }
    


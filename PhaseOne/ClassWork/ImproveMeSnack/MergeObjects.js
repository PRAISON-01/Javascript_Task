//Write a function that takes two objects and merges them into one.        const personal = { name: 'Kemi', age: 27 };           

//const input = require("prompt-sync")();

function merge(personal ,professional){
     const merge ={...personal, ...professional};
    return merge;
}

const personal = {name: "Kemi", age: 27};
const professional = {role: "Designer", company:"TechCorp"};

console.log(merge(personal, professional));

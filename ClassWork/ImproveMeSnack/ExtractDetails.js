//Write a function that takes the following object and uses destructuring to extract name and age. 	                                                                                                                                const user = {name: "Amaka",age: 25,country: "Nigeria"}; 

function extractData(user){

    const {name , age} = user;
    return {name, age};
}

const user = {name: "Amaka",age: 25,country: "Nigeria"}; 
console.log(extractData(user));

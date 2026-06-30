//Write a function that accepts the following phone object and returns the battery percentage.     const phone = {brand: "Samsung",battery: 75}; 

function getPercentage(phone){
    const {battery} = phone;
    return {battery};
}

const phone = {brand: "Samsung",battery: 75}; 
console.log(getPercentage(phone));

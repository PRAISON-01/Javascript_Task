//Write a function that accepts the following bank account object and returns: "Low Balance" if balance is below 1000, "Sufficient Balance" otherwise           const account = {accountName: "David", balance: 500}; 

function checkBal(account){
    if(account.balance < 1000){
        return console.log("Low Balance!");
    }

    return console.log("Sufficient Balance!");
}

const account = {accountName: "David", balance: 1500}; 

console.log(checkBal(account));

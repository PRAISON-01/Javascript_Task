const account = {balance: 99, isBlocked: false};

if(account.isBlocked == true){
    console.log("Account Blocked!")
}
else if(account.balance < 100){
    console.log("Low balance!");
}

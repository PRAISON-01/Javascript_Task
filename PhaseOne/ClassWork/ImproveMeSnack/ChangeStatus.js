//Write a function that changes the status of the following order object from "pending" to "delivered".                                                                                      const order = {id: 1,status: "pending"}; 

function changeStatus(order){

    if(order.id < 1){
        order.status == "delivered";
        return console.log(order);
    }
    
    else if(order.id > 0){
        order.status == "pending";
        return console.log(order);
    }
    return console.log(order);
}

const order = {id: 1,status: "pending"}; 
console.log(changeStatus(order))

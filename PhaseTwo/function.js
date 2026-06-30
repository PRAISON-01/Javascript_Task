// function add(a, b){
//     return a+b;
// }

// console.log(add(11, 12));

// const add = (a , b)=> {
//     return a + b;
// }

// const multiply = ( a, b) => {
//     return a * b;
// }

function calculate() {
    // function add(firstNumber , secondNumber) {
    //     const sum = firstNumber + secondNumber;
    //     return sum;
    // }

    // const subtract = (firstNumber, secondNumber)=> {

    //     return firstNumber - secondNumber;
    // };

    return {
        add:(firstNumber , secondNumber)=> (firstNumber + secondNumber),
        subtract: (firstNumber, secondNumber)=>{
            return firstNumber - secondNumber;
        }
    }
}

// module.exports = {add, multiply};
module.exports = {calculate: calculate};
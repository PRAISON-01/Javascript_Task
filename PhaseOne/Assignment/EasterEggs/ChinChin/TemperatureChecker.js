const input = require("prompt-sync")();

const temp = Number(input("Ente a temperature value: "));
//let degree;
//
//if(temp <= 0){
//    degree = "Freezing";
//}
//else if(temp < 15){
//        degree = "Cold";
//}
//
//else if(temp < 25){
//    degree = "Warm";
//}
//else{
//    degree = "High temperature";
//}
//
//console.log(degree);
//
//wrong

//switch (false){
//    case(temp <= 0): 
//        degree = "Freezing";
//        break;
//    case(temp < 15):
//        degree = "cold";
//        break;
//    case(temp < 25):
//        degree = "warm";
//        break;
//    case(temp > 25):
//       degree = "hot";
//       break;
//    default:
//        console.log("invalid temp");
//}
//
//console.log(degree);



//Correct code
let degree;

switch (true) {
    case (temp <= 0):
        degree = "Freezing";
        break;
    case (temp < 15):
        degree = "cold";
        break;
    case (temp < 25):
        degree = "warm";
        break;
    case (temp > 25):
        degree = "hot";
        break;
    default:
        console.log("invalid temp");
}

console.log(degree);

const input = require("prompt-sync")();

let bytes = Number(input("Enter number of bytes: "));

let kilo = bytes / 1024;
let mega = bytes / Math.pow(1024, 2);
let giga = bytes / Math.pow(1024, 3);


console.log(`${bytes} bytes in kilobytes: ${kilo.toFixed(2)}KB`);
console.log(`${bytes} bytes in Megabytes: ${mega.toFixed(2)}MB`);
console.log(`${bytes} bytes in Gigabytes: ${giga.toFixed(2)}GB`);

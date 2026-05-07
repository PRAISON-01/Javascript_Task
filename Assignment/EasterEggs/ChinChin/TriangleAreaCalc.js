const input = require("prompt-sync")();

const base = Number(input("Enter base of triangle: "));

const height = Number(input("Enter height of triangle: "));

let area = 0.5 * base * height;

console.log(area);

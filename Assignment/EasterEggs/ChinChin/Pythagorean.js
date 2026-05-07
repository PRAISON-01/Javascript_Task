const input = require("prompt-sync")();

const adj = Number(input("Enter adj: "));
const opp = Number(input("Enter opp: "));

let hyp = ((adj) ** 2 + (opp) ** 2) ** 0.5

console.log(hyp);

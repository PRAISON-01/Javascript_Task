function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

const x = getRandom(-25, 25);

const y = getRandom(-75, 75);

console.log(`Random coordinate point: (${x.toFixed(2)}, ${y.toFixed(2)})`);


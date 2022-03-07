const Fighter = require("./fighter");


const rob = new Fighter("Rob", 1, 8, 7, 5);
const kirby = new Fighter("Kirby", 2, 5, 5, 4);

console.log(rob);
kirby.attack(rob);
console.log(rob);

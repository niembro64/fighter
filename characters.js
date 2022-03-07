const Fighter = require("./fighter");

class Samus extends Fighter {
    constructor(playerNum = 1) {
        super("Samus", playerNum, 8, 6, 8);
    }
    special(opponent) {
        if (this.charged) {
            this.charged = false;
            opponent.percent += 35;
            console.log(
                `Samus fired her charge shot at ${opponent.name} and dealt 35% damage`
            );
        } else {
            this.charged = true;
            console.log(`Samus is charging her cannon.`);
        }
    }
}

class Jigglypuff extends Fighter {
    constructor(playerNum = 1) {
        super("Jigglypuff", playerNum, 3, 8, 1);
    }
    special(opponent) {
        var hit = Math.floor(Math.random() * 2);
        opponent.percent += hit * 40;
        console.log(`${this.name} attached ${opponent.name} and did ${(hit == 1) ? 40 : 0} damage`)
    }
}
const rob = new Fighter("Rob", 1, 8, 7, 5);
const kirby = new Fighter("Kirby", 2, 5, 5, 4);
const samus = new Samus(2);
const jiggs = new Jigglypuff(3);

// console.log(rob);
// kirby.attack(rob);
// samus.special(rob);
// samus.special(rob);
// console.log(rob);

console.log(samus);
jiggs.special(samus);
console.log(samus);
class Fighter {
    constructor(name, playerNum, strength = 0, defense = 0, weight = 0) {
        this.name = name;
        this.playerNum = playerNum;
        this.strength = strength;
        this.defense = defense;
        this.weight = weight;
        this.percent = 0;
    }

    attack(opponent) {
        opponent.percent += 5;
    }
}

const rob = new Fighter("Rob", 1, 8, 7, 5);
const kirby = new Fighter("Kirby", 2, 5, 5, 4);

console.log(rob);
kirby.attack(rob);
console.log(rob);

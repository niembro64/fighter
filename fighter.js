
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
        if (opponent instanceof Fighter) {
            opponent.percent += 5;
            console.log(
                `${this.name} attacked ${opponent.name} and delt damage!`
            );
        }
    }
    special(opponent) {
        if (opponent instanceof Fighter) {
            opponent.percent += 15;
            console.log(
                `${this.name} attacked ${opponent.name} and delt special!`
            );
        }
    }

}

module.exports = Fighter;

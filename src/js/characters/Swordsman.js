import Character from '../Character'

export default class Swordsman extends Character {
    constructor(level, type = 'swordsman') {
        super(level, type);
        if (type === 'swordsman') {
            this.type = type;
            this.attack = 40;
            this.defence = 10;
        } else {
            throw new Error('исключение - не swordsman')
        }
    }
}
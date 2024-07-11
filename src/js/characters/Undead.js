import Character from '../Character'

export default class Undead extends Character {
    constructor(level, type = 'undead') {
        super(level, type);
        if (type === 'undead') {
            this.type = type;
            this.attack = 40;
            this.defence = 10;
        } else {
            throw new Error('исключение - не undead')
        }
    }
}
import Character from '../Character'

export default class Vampire extends Character {
    constructor(level, type = 'vampire') {
        super(level, type);
        if (type === 'vampire') {
            this.type = type;
            this.attack = 25;
            this.defence = 25;
        } else {
            throw new Error('исключение - не vampire')
        }
    }
}
import Character from '../Character'

export default class Magician extends Character {
    constructor(level, type = 'magician') {
        super(level, type);
        if (type === 'magician') {
            this.type = type;
            this.attack = 10;
            this.defence = 10;
        } else {
            throw new Error('исключение - не magician')
        }
    }
}
import Character from '../Character'

export default class Daemon extends Character {
    constructor(level, type = 'daemon') {
        super(level, type);
        if (type === 'daemon') {
            this.type = type;
            this.attack = 10;
            this.defence = 10;
        } else {
            throw new Error('исключение - не daemon')
        }
    }
}
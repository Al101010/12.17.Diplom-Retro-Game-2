/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(level = 1, type = 'generic') {
      this.level = level;
      this.health = 50;

      // const types = ['swordsman', 'bowman', 'magician', 'daemon', 'undead', 'vampire', ''];
      // if (types.indexOf(type) !== -1) {
      //   throw new Error('недопустимый ТИП персонажа')
      // }
      this.type = type;

      this.attack = 0;
      this.defence = 0;
      
      // TODO: выбросите исключение, если кто-то использует "new Character()"
      if (new.target.name === 'Character') {
          throw new Error('исключение - запрещено использовать new Character()')
      }

      // const types = ['swordsman', 'bowman', 'magician', 'daemon', 'undead', 'vampire', ''];
      // if (types.indexOf(type) !== -1) {
      //   throw new Error('недопустимый ТИП')
      // }
  }
}

// export default class Character {
//   constructor(level = 1, type = 'generic') {
//     this.health = 100;
//     this.level = level;
//     if (type === 'Bowman'){
//         this.type = 'Bowman';
//         this.attack = 25;
//         this.defence = 25;
//     } else if (type === 'Swordsman') {
//         this.type = 'Swordsman';
//         this.attack = 40;
//         this.defence = 10;
//     } else if (type === 'Magician') {
//         this.type = 'Magician';
//         this.attack = 10;
//         this.defence = 40;
//     } else if (type === 'Undead') {
//         this.type = 'Undead';
//         this.attack = 25;
//         this.defence = 25;
//     } else if (type === 'Zombie') {
//         this.type = 'Zombie';
//         this.attack = 40;
//         this.defence = 10;
//     } else if (type === 'Daemon') {
//         this.type = 'Daemon';
//         this.attack = 10;
//         this.defence = 40;
//     } else {
//         throw new Error("one of the types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
//     }
      
//     // TODO: выбросите исключение, если кто-то использует "new Character()"
//     if (new.target.name === 'Character') {
//       throw new Error('исключение - запрещено использовать new Character()')
//     }
//   }
// }
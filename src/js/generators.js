/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */

//  function* randomIntegerPlayerTypes(allowedTypes, maxLevel) {
//   while (true) {
//       yield playerTypes[Math.floor(Math.random() * (maxLevel + 1))];
//   }
// }


// import bowman from "../characters/Bowman";
// import swordsman from "../characters/Swordsman";
// import magician from "../characters/Magician";
  // const playerTypes = [bowman, swordsman, magician];

export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here

  // // случайное число от min до (max+1)
  // let random = min + Math.random() * (max + 1 - min);
  //  Math.floor((1 + Math.random() * 3)); // - случайное число от 1 до 3

  const levelCharacter = Math.floor(1 + (Math.random() * maxLevel));

  while (true) {
    yield new allowedTypes[Math.floor(Math.random() * (maxLevel + 1))](levelCharacter);
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  const character = characterGenerator(allowedTypes, maxLevel, characterCount);
  
  for (let i = 0; characterCount > i; i++) {
    team.push(character.next().value);
  }
  
  return team;
}
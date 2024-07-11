/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */

import { generateTeam } from "./generators";

import Bowman from "./characters/Bowman";
import Daemon from "./characters/Daemon";
import Magician from "./characters/Magician";
import Swordsman from "./characters/Swordsman";
import Undead from "./characters/Undead";
import Vampire from "./characters/Vampire";

export default class Team {
  // TODO: write your logic here
  // constructor(team) {
  constructor() {
    this.charactersPlayers = [];
    this.startOfPlayersTeam();
    this.charactersComputer = [];
    this.startOfComputerTeam();
    this.characters = []; // расположение
  }
  #typesOfPlayersCharacters = [Bowman, Swordsman, Magician];
  startOfPlayersTeam() {
    this.charactersPlayers = generateTeam(this.#typesOfPlayersCharacters, 1, 2);
  }
  #typesOfComputerCharacters = [Vampire, Undead, Daemon];
  startOfComputerTeam() {
    this.charactersComputer = generateTeam(this.#typesOfComputerCharacters, 1, 2);
  }
}

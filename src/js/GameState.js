export default class GameState {
  constructor() {
    this.positionedCharacters = [];
    this.courseOfGame = 0;
    this.cellWithActiveCharacter = null;
    this.level = 0;
  }


  // static from(object) {
  //   // TODO: create object
  //   return null;
  // }

  
  saveGameData(data) {
    console.log(data);
    this.saveGame = {      
      characters: data.gameState.positionedCharacters,
      level: data.gameState.level,
    };
  }
}

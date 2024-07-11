import PositionedCharacter from "./PositionedCharacter";
import Team from "./Team";
import GamePlay from "./GamePlay";
import cursors from "./cursors";
import GameState from "./GameState";
// 
import { variantsToGo } from "./utils";
import { variantsNearBattle } from "./utils";


export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService; 
    // добавил
    this.gameState = new GameState;
    
  }

  init() {
    // TODO: add event listeners to gamePlay events    // TODO: добавьте прослушиватели событий к игровым событиям
    // TODO: load saved stated from stateService    // TODO: загрузите сохраненные данные из stateService
    this.gamePlay.drawUi('prairie'); // Игровое поле
    this.beginningGame(); // Начало игры
    this.gamePlay.addNewGameListener(this.newGame.bind(this));
    this.gamePlay.addSaveGameListener(this.saveGame.bind(this));
    this.gamePlay.addLoadGameListener(this.loadGame.bind(this));
  }
  
  newGame() {
    this.gamePlay.drawUi('prairie'); // Игровое поле desert
    for (let i = 0; i < this.gamePlay.cells.length; i++) {
      this.gamePlay.deselectCell(i);// нужно перебрать все клетки и снять выделение this.gamePlay.cells
    }
    this.gameState.cellWithActiveCharacter = null;
    console.log('newGame() - новая игра');
    this.beginningGame();
  }
  
  saveGame() {
    this.gameState.saveGameData(this);
    // console.log(this);
  }
  
  loadGame() {
    console.log('loadGame()');
  }

  beginningGame() { // Начало игры
    // Игрок
    const team = new Team();
    // const arrPositionPlayers = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];

    // function randomPositionPlayers() {
    //   const randomPosition = arrPositionPlayers[Math.floor(Math.random() * arrPositionPlayers.length)];// Math.floor(Math.random() * 16 - случайное число от 0 до 15
    //   arrPositionPlayers.splice(arrPositionPlayers.indexOf(randomPosition), 1); // удаляем номер ячейки который уже использовали
    //   return randomPosition;
    // }

    const positionedCharacterPlayers = [];

    team.charactersPlayers.forEach((item) => {
      positionedCharacterPlayers.push(
        new PositionedCharacter(
          item
        )
      )
    })
    
    // team.charactersPlayers.forEach((item, index) => {
    //   positionedCharacterPlayers.push(
    //     new PositionedCharacter(
    //       item,
    //       index = randomPositionPlayers()
    //     )
    //   )
    // })
    // Теперь компьютер
    // const arrPositionComputer = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];

    // function randomPositionComputer() {
    //   const randomPosition = arrPositionComputer[Math.floor(Math.random() * arrPositionComputer.length)];// Math.floor(Math.random() * 16 - случайное число от 0 до 15
    //   arrPositionComputer.splice(arrPositionComputer.indexOf(randomPosition), 1);
    //   return randomPosition;
    // }

    const positionedCharacterComputer = [];

    // team.charactersComputer.forEach((item, index) => {
    team.charactersComputer.forEach((item) => {
      positionedCharacterComputer.push(
        new PositionedCharacter(
          item,
          // index = randomPositionComputer()
        )
      )
    })

    let positionedCharacters = positionedCharacterPlayers.concat(positionedCharacterComputer);
    this.gameState.positionedCharacters = positionedCharacters; //  сохранил позиции персонажей(войнов)
    this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // Раставили участников(войнов)

    this.listenerInCell(); // ставим прослушивателе событий
    this.motionPlayer(); // Движение игрока, выбираем случайного и делаем активным
  }

  nextLevel_1() {
    const arrPositionPlayers = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];

    function randomPositionPlayers() {
      const randomPosition = arrPositionPlayers[Math.floor(Math.random() * arrPositionPlayers.length)];// Math.floor(Math.random() * 16 - случайное число от 0 до 15
      arrPositionPlayers.splice(arrPositionPlayers.indexOf(randomPosition), 1); // удаляем номер ячейки который уже использовали
      return randomPosition;
    }


    this.gameState.level++; // Повышаем уровень игры
    console.log(this.gameState.level);
    // для начала нужно до укомплекторать команду игрока
    const team = new Team();
    console.log(team);
    // Игрок
    if (this.gameState.positionedCharacters.length == 2) {
      
      
      
      

      this.gameState.positionedCharacters.forEach(positionedCharacter => {
        positionedCharacter.position = randomPositionPlayers();
      });
    }

    this.gameState.positionedCharacters.forEach(positionedCharacter => {
      // console.log(positionedCharacter.character.level);
      positionedCharacter.character.level++;
      positionedCharacter.character.health = positionedCharacter.character.health + 80;
      if (positionedCharacter.character.health > 100) {
        positionedCharacter.character.health = 100;
      }
      positionedCharacter.character.attack = positionedCharacter.character.attack + 5;
      positionedCharacter.character.defence = positionedCharacter.character.defence + 5;
      // console.log(positionedCharacter);
    });

    // Теперь компьютер
    // const arrPositionComputer = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];

    // function randomPositionComputer() {
    //   const randomPosition = arrPositionComputer[Math.floor(Math.random() * arrPositionComputer.length)];// Math.floor(Math.random() * 16 - случайное число от 0 до 15
    //   arrPositionComputer.splice(arrPositionComputer.indexOf(randomPosition), 1);
    //   return randomPosition;
    // }

    const positionedCharacterComputer = [];

    // team.charactersComputer.forEach((item, index) => {
    team.charactersComputer.forEach((item) => {
      positionedCharacterComputer.push(
        new PositionedCharacter(
          item,
          // index = randomPositionComputer()
        )
      )
    });

    positionedCharacterComputer.forEach(positionedCharacter => {
      positionedCharacter.character.level++;
      positionedCharacter.character.health = 50;
      positionedCharacter.character.attack = positionedCharacter.character.attack + 5;
      positionedCharacter.character.defence = positionedCharacter.character.defence + 5;
    });

    positionedCharacterComputer.forEach(elem => {
      this.gameState.positionedCharacters.push(elem);
    })

    console.log(this.gameState.positionedCharacters);
    

    if (this.gameState.positionedCharacters.length == 1) {
      // нужно добавить ещё одного
      console.log('всего 1 воин, нужно добавить ещё одного');
    }

    this.gamePlay.drawUi('desert'); // Игровое поле desert
    this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // Раставили участников(войнов)


    this.gameState.cellWithActiveCharacter = null;
    this.listenerInCell(); // ставим прослушивателе событий
    this.motionPlayer(); // Движение игрока, выбираем случайного и делаем активным
  } 

  thePlayerLost() { //    console.log('А игрок проиграл!!!')    // нужно снять все выделения
    for (let i = 0; i < this.gamePlay.cells.length; i++) {
      this.gamePlay.deselectCell(i);// нужно перебрать все клетки и снять выделение this.gamePlay.cells
    }
    GamePlay.showError('новая игра'); // ???
    this.newGame();     // beginningGame(); - переделал
  }

  listenerInCell() { // ставим прослушиватели событий
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)); // ставим на наведение мышки
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this)); // ставим на клик левой кнопкой мышки
  }

  possibleAttack() { // возможная атака
    let activ = this.gameState.positionedCharacters.find((elem) => elem.position === this.gameState.cellWithActiveCharacter);
    if (!this.gameState.cellWithActiveCharacter) {
      console.log(' - нет активного - ');
      console.log(this.gameState.cellWithActiveCharacter);
    } else if (!activ) {
      console.log(activ);
       return console.log('функция this.active() выдаёт - '); // + this.active())

    }
    return variantsNearBattle(activ.character.type, this.gameState.cellWithActiveCharacter) // может атаковать ячейки
  }

  completingThePlayerAttack() { // завершение атаки игрока после тайм-аута    // console.log('completingThePlayerAttack() - завершение атаки игрока после тайм-аута') // ?????
    console.log(this.gameState);
    // let teamPlayer = this.gameState.positionedCharacters.filter(item => ['bowman', 'swordsman', 'magician'].includes(item.character.type)); 
    let teamComputer = this.gameState.positionedCharacters.filter(item => ['vampire', 'undead', 'daemon'].includes(item.character.type));

    if(teamComputer.length == 0) {
      // console.log('в команде компьютера - ни кого не осталось. Победа в этом уровне и переход на следующий');
      // this.nextLevel_1(); // - hf,jnftn yj gjrf hfyj
      this.nextLevel_1();
    } else {
      // console.log('в команде компьютера - есть кому ответку нарисовать или ходить');
      this.motionComputer();
    }
  }

  completingTheComputerAttack() { // завершение компьютерной атаки после тайм-аута
    // console.log('завершение компьютерной атаки после тайм-аута'); // срабатывает
  }

  motionPlayer() { // движение игрока     // 
    console.log('движение игрока - motionPlayer()');
    console.log(this.gameState);
    if (this.gameState.cellWithActiveCharacter == null) {
      console.log('движение игрока - this.gameState.cellWithActiveCharacter == null');
      let teamPlayer = this.gameState.positionedCharacters.filter(item => ['bowman', 'swordsman', 'magician'].includes(item.character.type)); 

      let randomIndex = () => Math.floor(Math.random() * (teamPlayer.length)); // генерируем случайный индекс в допустимом диапазоне
      let randomPlayer = teamPlayer[randomIndex()].position; // случайный персонаж игрока

      this.gamePlay.selectCell(randomPlayer, "yellow"); // выделяем игрока - круг желтого цвета.
      this.gameState.cellWithActiveCharacter = randomPlayer; // ячейка с активным персонажем
    }
  }
  
  motionComputer() { // движение Компьютера     
    console.log('ответка компьютера - motionComputer()');


    let teamComputer = this.gameState.positionedCharacters.filter(item => ['vampire', 'undead', 'daemon'].includes(item.character.type));
    let teamPlayer = this.gameState.positionedCharacters.filter(item => ['bowman', 'swordsman', 'magician'].includes(item.character.type)); 
    // проверить: 1.кто может драться перебираем и 2. в каждом смотрим возможность атаковать
    let attacker; // = elemComputer.character;
    let target; // вариант ячейки для атаки Игрока
    teamComputer.forEach(elemComputer => {
      attacker = elemComputer;
      let possibleAttackElem = variantsNearBattle(elemComputer.character.type, elemComputer.position); // варианты ячеек для атаки
      teamPlayer.forEach(elemPlayer => {
        if(possibleAttackElem.includes(elemPlayer.position)) {
          target = elemPlayer;// elemPlayer.position; // кого могут атаковать (target)
        }
      })
    });

    if (target) { //      console.log(target); // если есть кого атаковать
      const damage = Math.max(attacker.character.attack - target.character.defence, attacker.character.attack * 0.1);

      (async () => {
        await this.gamePlay.showDamage(target.position, damage);
        target.character.health = target.character.health - damage;

        if (target.character.health <= 0) { // если жизни не осталось 
          const indexCellLifeOver = this.gameState.positionedCharacters.findIndex(positionedCharacter => positionedCharacter.position == target.position);
          this.gameState.positionedCharacters.splice(indexCellLifeOver, 1); // мертвых убираем с поля
          this.gamePlay.deselectCell(target.position); // снимаем выделение с ячейки где был активный(от куда ушёл)

          if (target.position == this.gameState.cellWithActiveCharacter) {             // console.log('равенство сработало'); // не стало активного, нужно выборать нового
            teamPlayer = this.gameState.positionedCharacters.filter(item => ['bowman', 'swordsman', 'magician'].includes(item.character.type));
            if (teamPlayer.length == 0) {
              console.log('в команде игрока больше нет ни кого teamPlayer.length == 0');
              return this.thePlayerLost();
            }

            let randomIndex = () => Math.floor(Math.random() * (teamPlayer.length)); // генерируем случайный индекс в допустимом диапазоне
            let randomPlayer = teamPlayer[randomIndex()].position; // случайный персонаж игрока             // console.log(teamPlayer);
            this.gamePlay.selectCell(randomPlayer, "yellow"); // выделяем игрока - круг желтого цвета.
            this.gameState.cellWithActiveCharacter = randomPlayer; // ячейка с активным персонажем
          }

          setTimeout(() => {
            this.completingTheComputerAttack();
          }, 200)
        }
        this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // console.log(attacker); // атакующий (или attacker)         // motionPlayer();
      })();
    } else { // Если атакавать некого - не удалять
      let cellsBusy = this.gameState.positionedCharacters.map(function(item) {
        return item.position;
      });
      let teamComputer = this.gameState.positionedCharacters.filter(item => ['vampire', 'undead', 'daemon'].includes(item.character.type));

      let randomIndex = () => Math.floor(Math.random() * (teamComputer.length)); // генерируем случайный индекс в допустимом диапазоне
      let randomComputer = teamComputer[randomIndex()]; // случайный персонаж противника

      let possibleMoves = variantsToGo(randomComputer.character.type, randomComputer.position);
      possibleMoves = possibleMoves.filter(e => !~cellsBusy.indexOf(e)); // убираем из возможных ходов занятые ячейки

      let randomIndexPossibleMoves = () => Math.floor(Math.random() * (possibleMoves.length)); // генерируем случайный индекс в допустимом диапазоне
      let random = randomIndexPossibleMoves();

      this.gameState.positionedCharacters.forEach((elem) => { // перебираю расставленных персонажей и проверяю позицию
        if(elem.position == randomComputer.position) { // если позиция элемента совпадает со случайным противником то меняю
          elem.position = possibleMoves[random]; // и меняем позицию у расставленого персонажа
          this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // перерисовываем поле
        }
      })       // console.log('когда некого атаковать - завершение');
    }    // console.log('завершение хода копьютера');


    this.motionPlayer();
  }

  onCellClick(index) {
    // TODO: react to click
    let cHarInCell = this.gamePlay.cells[index].children[0];
    if (cHarInCell) { // если у элемента есть дочерний элемент

      let arrClass = cHarInCell.className.split(' ');
      arrClass.forEach((elem) => {         // console.log(elem)
        if (elem === 'character') { // если класс = 'character'

          this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции)
            if (item.position == index) { // если расположение совпадает
              // 1. Если мышь кликает: 1-где персонажи игрока и 2-активного нет
              if (['bowman', 'swordsman', 'magician'].includes(item.character.type) && this.gameState.cellWithActiveCharacter !== item.position) {
                for (let i = 0; i < this.gamePlay.cells.length; i++) {
                  this.gamePlay.deselectCell(i);// нужно перебрать все клетки и снять выделение this.gamePlay.cells
                }
                this.gamePlay.selectCell(index, "yellow"); // выделяем игрока - круг желтого цвета.
                this.gameState.cellWithActiveCharacter = item.position; // ячейка с активным персонажем
              }  
              // 2. Если мышь кликает: 1-где персонажи игрока и 2-активный есть
              // else if(['bowman', 'swordsman', 'magician'].includes(item.character.type) && this.gameState.cellWithActiveCharacter === item.position) {} 
              // 3. Если мышь кликает: 1-где персонажи противника
              else if(['vampire', 'undead', 'daemon'].includes(item.character.type)) { // если противник
                // 4. Если мышь кликает: 1-где есть красный круг и 2-активный есть
                if (this.gameState.cellWithActiveCharacter !== null && this.gamePlay.cells[index].classList.contains("selected-red")) { // console.log('Атака');
                  let attacker = this.gameState.positionedCharacters.filter(item => item.position === this.gameState.cellWithActiveCharacter)[0].character; // атакующий (или attacker)
                  let target = this.gameState.positionedCharacters.filter(item => item.position === index)[0].character; // атакуемый (или target)

                  const damage = Math.max(attacker.attack - target.defence, attacker.attack * 0.1); // 
                  // console.log(damage); // ???
                  // let teamComputer = this.gameState.positionedCharacters.filter(item => ['vampire', 'undead', 'daemon'].includes(item.character.type));

                  (async () => { // атака игрока
                    await this.gamePlay.showDamage(index, damage);

                    target.health = target.health - damage;

                    if (target.health <= 0) {
                      console.log('Убил -' + target.type);
                      const indexCellLifeOver = this.gameState.positionedCharacters.findIndex(positionedCharacter => positionedCharacter.position == index)
                      this.gameState.positionedCharacters.splice(indexCellLifeOver, 1);// Кончилась жизнь удалили с поля
                    }
                    this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // console.log(attacker); // атакующий (или attacker)                      // console.log(target); // атакуемый (или target)
                    setTimeout(() => {
                      this.completingThePlayerAttack();
                    }, 200)
                  })();
                } else if (this.gameState.cellWithActiveCharacter !== null && !this.gamePlay.cells[index].classList.contains("selected-red")) {
                  GamePlay.showError('персонаж противника'); // ???
                }
              }
            }
          });

        } 
      });

    } else { // console.log('Чистое поле');
      if (this.gameState.cellWithActiveCharacter !== null && this.gamePlay.cells[index].classList.contains("selected-green")) { // проверяем если персонаж выбран И наличие зелёного круга-выделения
        this.gameState.positionedCharacters.forEach((elem) => { // перебираю расставленных персонажей и проверяю позицию
          if(elem.position == this.gameState.cellWithActiveCharacter) { // если позиция элемента совпадает с активным то меняю
            this.gamePlay.deselectCell(this.gameState.cellWithActiveCharacter); // снимаем выделение с ячейки где был активный(от куда ушёл)
            this.gameState.cellWithActiveCharacter = index; // сразу меняем для себя номер активной ячейки(запоминаю где активный)
            elem.position = index; // и меняем позицию у активного персонажа(делаю ход)

            this.gamePlay.selectCell(index, "yellow"); // выделяем игрока - круг желтого цвета.
            this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // перерисовываем поле
          }
        })
        this.motionComputer(); // ход соперника
      } else {         // console.log('а суда НЕможет персонаж пойти');
      }
    }
  }

  onCellEnter(index) {
    if (this.gameState.cellWithActiveCharacter == null) {
      console.log('нет активного');
      console.log('this.gameState.cellWithActiveCharacter = null');
      this.motionPlayer();
    }
    // if (this.gameState.cellWithActiveCharacter !== null && !this.gameState.positionedCharacters.includes(elem => elem.position == this.gameState.cellWithActiveCharacter)) {
    //   let teamPlayer = this.gameState.positionedCharacters.filter(item => ['bowman', 'swordsman', 'magician'].includes(item.character.type));
    // }
    this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции) 
      if(['vampire', 'undead', 'daemon'].includes(item.character.type)) {        // console.log(item.position);
        this.gamePlay.deselectCell(item.position); //  снимаем выделение с демонов и всякой нечести
      }
    })
    for (let i = 0; i < this.gamePlay.cells.length; i++) {
      if (this.gamePlay.cells[i].childNodes.length == 0) {
        this.gamePlay.deselectCell(i); //  снимаем выделение со всех ячеек где нет персонажей
      }
    }

    let cHarInCell = this.gamePlay.cells[index].children[0];
    if (cHarInCell) { // если у элемента есть дочерний элемент
      let arrClass = cHarInCell.className.split(' ');
      arrClass.forEach((elem) => {
        if (elem === 'character') { // если сласс = 'character'
          this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции)
            if (item.position == index) { // если расположение совпадает c index
              this.gamePlay.showCellTooltip(
                `\u{1F396} ${item.character.level} \u{2694} ${item.character.attack} \u{1F6E1} ${item.character.defence} \u{2764} ${item.character.health}`,
                index
              );
            }
          });
        } else if (['bowman', 'swordsman', 'magician'].includes(elem)) { // console.log('свой');
          this.gamePlay.setCursor(cursors.pointer);
        } else if (['vampire', 'undead', 'daemon'].includes(elem) && this.gameState.cellWithActiveCharacter !== null) { // console.log('противник + Активный есть');
       
          if (this.possibleAttack().includes(index)) {            // console.log('может атаковать'); // ----------------------------------------------------------------------------
            this.gamePlay.setCursor(cursors.crosshair);
            this.gamePlay.selectCell(index, "red"); // выделяем ячейку -  красным  - прерывистым кругом
          } else {
            this.gamePlay.setCursor(cursors.auto);
          }
        } else if (['vampire', 'undead', 'daemon'].includes(elem)) { // console.log('противник');
          this.gamePlay.setCursor(cursors.auto);
        }
      });
    } else {      // console.log('Наведение - нет дочерних элементов, значит чистое поле');
      this.gamePlay.setCursor(cursors.notallowed); // меняем курсор на notallowed
      if (this.gameState.cellWithActiveCharacter !== null) {        // нужно получить тип активного - (this.active()).character.type

        let activ = this.gameState.positionedCharacters.find((elem) => elem.position == this.gameState.cellWithActiveCharacter);

        let possibleMoves = variantsToGo(activ.character.type, this.gameState.cellWithActiveCharacter); // возможные ходы активного
        for (let i = 0; i < possibleMoves.length; i++) {
          if (index === possibleMoves[i]) {
            this.gamePlay.selectCell(index, "green"); // выделяем ячейку -  зелёным  - прерывистым кругом
            this.gamePlay.setCursor(cursors.pointer); // меняем курсор на pointer
          }
        }
      }
    }
  }

  onCellLeave(index) { // если мышь покидает ячейку
    
    this.gamePlay.deselectCell(index); // снимаем выделение с ячейки 
    // TODO: react to mouse leave
    // for (let i = 0; i < this.gamePlay.cells.length; i++) {
    //   if (this.gamePlay.cells[i].childNodes.length == 0) {
    //     this.gamePlay.deselectCell(i); //  снимаем выделение со всех ячеек где нет персонажей
    //   }
    // };

    // for (let i = 0; i < this.gamePlay.cells.length; i++) {
    //   this.gamePlay.deselectCell(i);// нужно перебрать все клетки и снять выделение this.gamePlay.cells
    // };

    // this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции) 
    //   if(['vampire', 'undead', 'daemon'].includes(item.character.type)) {        // console.log(item.position);
    //     this.gamePlay.deselectCell(item.position); //  снимаем выделение с демонов и всякой нечести
    //   }
    // })
  }
}

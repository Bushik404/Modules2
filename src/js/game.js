class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }
 const {default: Character} = require('./domain.js');
 module.exports = {
    Game,
    GameSavingData,
    readGameSaving,
    writeGameSaving
 }
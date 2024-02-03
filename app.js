const Gameboard = function () {
  const board = ['', '', '', '', '', '', '', '', ''];
  
  const getGameboard = () => board;
  
  const printBoard = () => console.log(getGameboard());

  const markBoard = (move, player) => {
    switch (move) {
      case move = 0:
        board.splice(0, 1, player);
        break;
      case move = 1:
        board.splice(1, 1, player);
        break;
      case move = 2:
        board.splice(2, 1, player);
        break;
      case move = 3:
        board.splice(3, 1, player);
        break
      case move = 4:
        board.splice(4, 1, player);
        break;
      case move = 5:
        board.splice(5, 1, player);
        break;
      case move = 6:
        board.splice(6, 1, player);
        break;
      case move = 7:
        board.splice(7, 1, player);
        break;
      case move = 8:
        board.splice(8, 1, player);
        break;
    }
  }

  const clearBoard = (boardArr) => {
    boardArr = ['','','','','','','','','']
  }

  return {
    getGameboard,
    printBoard,
    markBoard,
    clearBoard
  }
}

const GameController = function () {

  const board = Gameboard();

  function createPlayer(name, marker) {
    const _name = name;
    const _marker = marker;

    return {
      _name,
      _marker,
    }
  }

  const players = [createPlayer('Player One', 'X'), createPlayer('Player Two', 'O')];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const playRound = (move) => {
    board.markBoard(move, getActivePlayer()._marker);
    switchPlayerTurn();
    printNewRound(); 
    checkWinner(board.getGameboard());
  }

  const printNewRound = () => {
    board.printBoard();
    if (checkWinner(board.getGameboard()) === 1){
      console.log('Player One Wins!')
    }else if(checkWinner(board.getGameboard()) === 2){
      console.log('Player Two Wins!')
    }else if(checkWinner(board.getGameboard()) === 3){
      console.log("It's a draw!")
    }else{
    console.log(`${getActivePlayer()._name}'s turn.`);
    }
  };

  const checkWinner = (boardArr) => {
    let result;
    let draw = true;
    
    boardArr.forEach(square => {
      if(square === ''){
        draw = false
      }
    });

    if (boardArr[0] === 'X' && boardArr[1] === 'X' && boardArr[2] === 'X'
      || boardArr[3] === 'X' && boardArr[4] === 'X' && boardArr[5] === 'X'
      || boardArr[6] === 'X' && boardArr[7] === 'X' && boardArr[8] === 'X'
      || boardArr[0] === 'X' && boardArr[3] === 'X' && boardArr[6] === 'X'
      || boardArr[1] === 'X' && boardArr[4] === 'X' && boardArr[7] === 'X'
      || boardArr[2] === 'X' && boardArr[5] === 'X' && boardArr[8] === 'X'
      || boardArr[0] === 'X' && boardArr[4] === 'X' && boardArr[8] === 'X'
      || boardArr[2] === 'X' && boardArr[4] === 'X' && boardArr[6] === 'X') {
      result = 1;
    }
    else if (boardArr[0] === 'O' && boardArr[1] === 'O' && boardArr[2] === 'O'
      || boardArr[3] === 'O' && boardArr[4] === 'O' && boardArr[5] === 'O'
      || boardArr[6] === 'O' && boardArr[7] === 'O' && boardArr[8] === 'O'
      || boardArr[0] === 'O' && boardArr[3] === 'O' && boardArr[6] === 'O'
      || boardArr[1] === 'O' && boardArr[4] === 'O' && boardArr[7] === 'O'
      || boardArr[2] === 'O' && boardArr[5] === 'O' && boardArr[8] === 'O'
      || boardArr[0] === 'O' && boardArr[4] === 'O' && boardArr[8] === 'O'
      || boardArr[2] === 'O' && boardArr[4] === 'O' && boardArr[6] === 'O') {
      result = 2;
    } else if (draw){
      result = 3;
    } else {
      result = 0;
    }
    return result;
  }

  printNewRound();

  return {
    playRound,
    createPlayer
  }
}

const displayController = (function(){
  const board = Gameboard();
  const game = GameController();

  const newGameBtn = document.getElementById('new-game-btn');
  const gameContainer = document.getElementById('game-container');

  function newGame(){
    board.clearBoard(board.getGameboard());
    newGameBtn.style.visibility = 'hidden';
    gameContainer.style.visibility = 'initial';
  }



  newGameBtn.addEventListener('click', newGame);

})();
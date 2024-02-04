const Gameboard = function () {
  const board = ['', '', '', '', '', '', '', '', ''];
  
  const getGameboard = () => board;
  
  const printBoard = () => console.log(getGameboard());

  const markBoard = (move, player) => {
    switch (move) {
      case move = 0:
        getGameboard().splice(0, 1, player);
        break;
      case move = 1:
        getGameboard().splice(1, 1, player);
        break;
      case move = 2:
        getGameboard().splice(2, 1, player);
        break;
      case move = 3:
        getGameboard().splice(3, 1, player);
        break
      case move = 4:
        getGameboard().splice(4, 1, player);
        break;
      case move = 5:
        getGameboard().splice(5, 1, player);
        break;
      case move = 6:
        getGameboard().splice(6, 1, player);
        break;
      case move = 7:
        getGameboard().splice(7, 1, player);
        break;
      case move = 8:
        getGameboard().splice(8, 1, player);
        break;
    }
  }

  const clearBoard = (boardArr) => {
    for(let i = 0; i < boardArr.length; i++){
      boardArr[i] = '';
    }
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
    return checkWinner(board.getGameboard());
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

  function restartGame(){
    board.clearBoard(board.getGameboard());
    activePlayer = players[0];
    printNewRound();
  }

  printNewRound();

  return {
    playRound, 
    getActivePlayer,
    restartGame,
    checkWinner,
  }
}

const DisplayController = (function(){
  const board = Gameboard();
  const game = GameController();

  const newGameBtn = document.getElementById('new-game-btn');
  const restartBtn = document.getElementById('restart-game-btn');
  const gameContainer = document.getElementById('game-container');
  const squares = document.querySelectorAll('.squares');
  const winContainer = document.getElementById('win-container');
  const playerOneWins = document.getElementById('player-one-win');
  const playerTwoWins = document.getElementById('player-two-win');
  const draw = document.getElementById('draw');
  const playAgainBtn = document.getElementById('play-again');
  

  function newGame(){
    newGameBtn.style.display = 'none';
    gameContainer.style.visibility = 'initial';
  }

  newGameBtn.onclick = newGame;


  restartBtn.addEventListener('click', e => {
    if(e){
      restartBtn.style.display = 'none';
      game.restartGame();
      squares.forEach(square => {
        square.textContent = '';
      })
    }
  })

  playAgainBtn.addEventListener('click', e => {
    if(e){
      game.restartGame();
      squares.forEach(square => {
        square.textContent = '';
      });
      winContainer.style.display = 'none';
      gameContainer.style.display = 'grid';
      gameContainer.style.visibility = 'initial';
      playerOneWins.style.display = 'none';
      playerTwoWins.style.display = 'none';
      draw.style.display = 'none';
    }
  })

  function renderSquares(){
    squares.forEach(square => {
    square.addEventListener('click', e => {
      if(e){
        restartBtn.style.display = 'block';
        e.target.textContent = game.getActivePlayer()._marker;
        displayWinner(game.playRound(parseInt(e.target.dataset.squaresIndex)));
      }
    })
  })
};

renderSquares();

  function displayWinner(result){
    if(result === 1){
      console.log(game.checkWinner(board.getGameboard()))
      winContainer.style.display = 'flex';
      winContainer.style.gridRow = '3';
      gameContainer.style.display = 'none';
      gameContainer.style.visibility = 'hidden';
      playerOneWins.style.display = 'block';
      restartBtn.style.display = 'none';
    }else if(result === 2){
      winContainer.style.display = 'flex';
      winContainer.style.gridRow = '3';
      gameContainer.style.display = 'none';
      playerTwoWins.style.display = 'block';
      restartBtn.style.display = 'none';
    }else if(result === 3){
      winContainer.style.display = 'flex';
      winContainer.style.gridRow = '3';
      gameContainer.style.display = 'none';
      draw.style.display = 'block';
      restartBtn.style.display = 'none';
    }
  };



})();
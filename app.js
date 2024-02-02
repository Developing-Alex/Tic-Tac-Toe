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

  return {
    getGameboard,
    printBoard,
    markBoard
  }
}

const GameController = function () {

  const board = Gameboard();

  function CreatePlayer(name, marker) {
    const _name = name;
    const _marker = marker;

    return {
      _name,
      _marker,
    }
  }

  const players = [CreatePlayer('Player One', 'X'), CreatePlayer('Player Two', 'O')];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const playRound = (move) => {
    board.markBoard(move, getActivePlayer()._marker);
    switchPlayerTurn();
    printNewRound(); 
  }
}
const Gameboard = function () {
  const board = ['', '', '', '', '', '', '', '', ''];
  
  const getGameboard = () => board;
  
  const printBoard = () => console.log(getGameboard());


  return {
    getGameboard,
    printBoard
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

}
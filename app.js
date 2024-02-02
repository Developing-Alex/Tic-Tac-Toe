const Gameboard = function () {
  const board = ['', '', '', '', '', '', '', '', ''];
  
  const getGameboard = () => board;
  
  const printBoard = () => console.log(getGameboard());


  return {
    getGameboard,
    printBoard
  }
}
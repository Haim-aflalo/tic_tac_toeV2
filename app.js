import { createBoard } from './board.js';
import { playerRound, computerRound, isWon, isTie } from './logic.js';

function playGame() {
  let board = createBoard();
  while (true) {
    playerRound(board);
    computerRound(board);
    if (isWon(board)) {
      return isWon(board);
    }
    if (isTie(board)) {
      console.log('tie');
      return isTie(board);
    }
    console.log(board);
  }
}

console.log(playGame());

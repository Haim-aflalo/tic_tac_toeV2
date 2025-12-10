import input from 'analiza-sync';

export function playerRound(board) {
  let Pcase = parseInt(input('enter the case')) - 1;
  if (Pcase < 0 && Pcase > 9) {
    return 'invalid points';
  }
  while (board[Pcase] !== ' ') {
    Pcase = parseInt(input('invalid point enter another')) - 1;
  }
  [(board[Pcase] = 'X')];
  return board;
}

export function computerRound(board) {
  while (true) {
    let cCase = Math.floor(Math.random() * 10);
    if (board[cCase] === ' ') {
      [(board[cCase] = 'O')];
      return board;
    }
    continue;
  }
}

function Checked(indexes, board, sign) {
  return indexes.every(function (index) {
    return board[index] === sign;
  });
}

export function isWon(board) {
  if (
    Checked([0, 1, 2], board, 'X') ||
    Checked([0, 3, 6], board, 'X') ||
    Checked([0, 4, 8], board, 'X') ||
    Checked([1, 4, 7], board, 'X') ||
    Checked([2, 5, 8], board, 'X') ||
    Checked([2, 4, 6], board, 'X') ||
    Checked([3, 4, 5], board, 'X') ||
    Checked([6, 7, 8], board, 'X')
  ) {
    console.log('Player Won');
    return true;
  }
  if (
    Checked([0, 1, 2], board, 'O') ||
    Checked([0, 3, 6], board, 'O') ||
    Checked([0, 4, 8], board, 'O') ||
    Checked([1, 4, 7], board, 'O') ||
    Checked([2, 5, 8], board, 'O') ||
    Checked([2, 4, 6], board, 'O') ||
    Checked([3, 4, 5], board, 'O') ||
    Checked([6, 7, 8], board, 'O')
  ) {
    console.log('Computer Won');
    return false;
  }
}

export function isTie(board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] != ' ') {
      count += 1;
    }
  }
  return count === 0;
}

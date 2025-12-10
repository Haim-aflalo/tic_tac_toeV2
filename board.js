export function createBoard() {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(' ');
  }
  return board;
}
console.table(createBoard());

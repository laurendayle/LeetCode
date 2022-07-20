/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === word[0]) {
        if (wordSearch(board, word, r, c, 0)) return true;
      }
    }
  }
  return false;
}

const wordSearch = (board, word, r, c, i) => {
  if (i === word.length) return true;
  if (r < 0 || r >= board.length || c < 0 || c >= board[r].length || board[r][c] !== word[i]) return false;

  let temp = board[r][c];
  board[r][c] = ' ';

  let found = wordSearch(board, word, r + 1, c, i + 1) || 
              wordSearch(board, word, r - 1, c, i + 1) ||
              wordSearch(board, word, r, c + 1, i + 1) ||
              wordSearch(board, word, r, c - 1, i + 1);

  board[r][c] = temp;
  return found;
}
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
}

var dfs = function(board, i, j, count, word) {
  if (count === word.length) {
    return true;
  }
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word[count]) {
    return false;
  }
  let temp = board[i][j];
  board[i][j] = ' ';
  let found = dfs(board, i + 1, j, count + 1, word)
    || dfs(board, i - 1, j, count + 1, word)
    || dfs(board, i, j + 1, count + 1, word)
    || dfs(board, i, j - 1, count + 1, word);
  board[i][j] = temp;
  return found;
}
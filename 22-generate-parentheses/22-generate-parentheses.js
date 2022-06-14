/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []

  var dfs = (i, n, slate, open, closed) => {
    if (open > n) {
      return;
    }
    if (closed > open) {
      return;
    }
    if (i === n * 2) { // base case
      result.push(slate.join(''));
      return;
    }
    // dfs recursive case
    // add open paren
    slate.push('(');
    dfs(i + 1, n, slate, open + 1, closed);
    slate.pop();
    // add closed paren
    slate.push(')');
    dfs(i + 1, n, slate, open, closed + 1);
    slate.pop();
  }
  dfs(0, n, [], 0, 0);
  return result;
}
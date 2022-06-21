/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

  const dfs = (n, i, slate, open, closed) => {
    if (open > n) return;
    if (closed > open) return;
    if (i === n * 2) {
      result.push(slate.join(''));
      return;
    }

    slate.push('(');
    dfs(n, i + 1, slate, open + 1, closed);
    slate.pop();
    slate.push(')');
    dfs(n, i + 1, slate, open, closed + 1); 
    slate.pop();
  }

  dfs(n, 0, [], 0, 0);
  return result; 
};
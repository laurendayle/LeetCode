/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let result = [];
  generateString('', 0, 0);
  return result;

  function generateString(str, left, right) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left !== n) {
      generateString(str + '(', left + 1, right);
    }
    if (left > right) {
      generateString(str + ')', left, right + 1);
    }
  }
}
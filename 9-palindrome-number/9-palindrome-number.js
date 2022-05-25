/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
  let reversed = Number(x.toString().split('').reverse().join(''));
  if (reversed === x) {
    return true;
  }
  return false;
};
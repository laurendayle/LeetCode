/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  var letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  if (!digits.length) return [];
  if (digits.length === 1) {
    return letters[digits[0]].split('');
  }
  
  let result = [];
  
  const dfs = (i, digits, slate) => {
    if (i === digits.length) {
      result.push(slate.join(''));
      return;
    }
    
    let chars = letters[digits[i]];
    
    for (var char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  }
  dfs(0, digits, []);
  return result;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let stack = [];
  for (var i = 0; i < s.length; i++) {
    let current = s[i];
    if (pairs[current]) {
      stack.push(current);
    } else {
      let opening = stack[stack.length - 1];
      if (pairs[opening] === current) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0; 
};
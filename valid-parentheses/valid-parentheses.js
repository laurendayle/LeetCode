/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  }; 

  let stack = [],
      openCount = 0,
      closedCount = 0; 

  for (var i = 0; i < str.length; i++) {
    if (pairs[str[i]]) {
      stack.push(pairs[str[i]]);
      openCount++;
    } else {
      let closing = stack.pop();
      if (closing !== str[i]) {
        return false; 
      } else {
        closedCount++;
      }
    }
  }
  return openCount === closedCount;
};
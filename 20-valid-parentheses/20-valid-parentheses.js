/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") {
    return true;
  }
  if (s.length < 2) {
    return false;
  }
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let stack = [];
  let arr = s.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    let br = arr[i];
    if (pairs[br]) {
      stack.push(br);
    } else {
      let checkBr = stack.pop();
      if (pairs[checkBr] !== br) {
        return false; 
      } 
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true; 
};
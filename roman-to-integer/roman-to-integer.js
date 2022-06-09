/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  const key = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let arr = s.split('');
  let result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (key[arr[i]]) {
      if (key[arr[i + 1]] > key[arr[i]]) {
        result += (key[arr[i + 1]] - key[arr[i]]);
        i++;
      } else {
        result += key[arr[i]];
      }
    }
  }
  return result;
}
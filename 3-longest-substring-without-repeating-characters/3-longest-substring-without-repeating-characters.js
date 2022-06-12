/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
  
  let n = str.length,
      result = 0,
      map = new Map();
  
  for (var j = 0, i = 0; j < n; j++) {
    if (map.has(str[j])) {
      i = Math.max(map.get(str[j]), i);
    }
    result = Math.max(result, j - i + 1);
    map.set(str[j], j + 1); 
  }
  return result; 
}
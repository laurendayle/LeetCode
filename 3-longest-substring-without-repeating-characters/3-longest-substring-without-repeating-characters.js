/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let result = 0,
      hash = new Map();
  
  for (var j = 0, i = 0; j < s.length; j++) {
    if (hash.has(s[j])) {
      i = Math.max(hash.get(s[j]), i);
    }
    result = Math.max(result, j - i + 1);
    hash.set(s[j], j + 1);
  }
  return result; 
};
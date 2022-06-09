/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  let freq = new Map();

  for (var i = 0; i < s.length; i++) {
    if (!freq.has(s[i])) {
      freq.set(s[i], [1, i]);
    } else {
      let current = freq.get(s[i]);
      current[0]++;
      freq.set(s[i], current);
    }
  }
  for (var [k, v] of freq) {
    if (v[0] === 1) {
      return v[1];
    }
  }
  return -1;
}
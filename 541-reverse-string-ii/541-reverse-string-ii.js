/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  s = s.split('');
  for (var start = 0; start < s.length; start += 2 * k) {
    let i = start,
        j = Math.min(start + k - 1, s.length - 1);
    
    while (i < j) {
      let tmp = s[i];
      s[i++] = s[j];
      s[j--] = tmp;
    }
  }
  return s.join('');
};
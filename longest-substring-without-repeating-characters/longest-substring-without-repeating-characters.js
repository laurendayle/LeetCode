/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  
  if (!s.length || typeof s !== 'string') {
    return 0;
  } else if (s.length === 1) {
    return 1;
  }
  
  let hashTable = {};
  let longest = 0;
  let start = 0;
  let length = s.length; 
  
  const strings = s.split('');
  
  for (let i = 0; i < length; i++) {
    if (hashTable[strings[i]] !== undefined && hashTable[strings[i]] >= start) {
      start = hashTable[strings[i]] + 1;
    }
    hashTable[strings[i]] = i;
    longest = Math.max(longest, (i - start + 1));
  }
  return longest;
  
};

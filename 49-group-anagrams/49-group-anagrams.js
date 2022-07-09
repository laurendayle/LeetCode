/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
  const hash = new Map(); 
  for (let str of strs) {
    let copy = str.slice().split('').sort((a, b) => a.localeCompare(b)).join('');
    if (hash.has(copy)) {
      let anagrams = hash.get(copy);
      anagrams.push(str);
      hash.set(copy, anagrams);
    } else {
      hash.set(copy, [str]);
    }
  }
  const res = [];
  for (const [k, v] of hash) {
    res.push(v);
  }
  return res;
};
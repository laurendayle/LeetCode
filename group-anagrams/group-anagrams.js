/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hash = new Map();
  for (let word of strs) {
    let letters = word.split('').sort().join('');
    if (hash.has(letters)) {
      let anagrams = hash.get(letters);
      anagrams.push(word);
      hash.set(letters, anagrams);
    } else {
      hash.set(letters, [word]);
    }
  }
  let result = [];
  for (let [letters, anagrams] of hash) {
    result.push(anagrams);
  }
  return result;
}
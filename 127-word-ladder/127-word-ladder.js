/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const words = new Set(wordList),
        queue = [beginWord];
  
  let distance = 1;
  
  while (queue.length) {
    const n = queue.length;
    
    distance++;
    
    for (let i = 0; i < n; i++) {
      const word = queue.shift();
      
      for (let j = 0; j < word.length; j++) {
        for (let letter of alphabet) {
          const nextWord = word.slice(0, j) + letter + word.slice(j + 1);
          if (!words.has(nextWord)) continue;
          if (nextWord === endWord) return distance;
          queue.push(nextWord);
          words.delete(nextWord);
        }
      }
    }
  }
  return 0;
};
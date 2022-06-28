/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  const letters = 'ACGT';
  const queue = [start],
        mutations = new Set(bank);
  let distance = 0; 

  while (queue.length) {
    const n = queue.length; 

    distance++;

    for (let i = 0; i < n; i++) {
      const word = queue.shift();

      for (let j = 0; j < word.length; j++) {
        for (let letter of letters) {
          const nextWord = word.slice(0, j) + letter + word.slice(j + 1);
          if (!mutations.has(nextWord)) continue;
          if (nextWord === end) return distance;

          queue.push(nextWord);
          mutations.delete(nextWord);
        }
      }
    }
  }
  return -1; 
};
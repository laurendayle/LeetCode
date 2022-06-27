/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = nums => {
  let hash = new Map();
  for (let n of nums) {
    if (hash.has(n)) {
      return n;
    } 
    hash.set(n, 1);
  }
}
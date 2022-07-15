/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = arr => {
  let hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i])) {
      arr.splice(i, 1);
      i--;
    } else {
      hash.set(arr[i], 1); 
    }
  }
  return arr.length; 
}
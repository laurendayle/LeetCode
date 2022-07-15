/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let lastIdx = arr.length - 1; 
  let lastDuplicateZero;
  
  for (let i = 0; i <= lastIdx; i++) {
    if (arr[i] === 0 && i !== lastIdx) {
      lastIdx--;
      lastDuplicateZero = i; 
    }
  }
  
  if (lastIdx < arr.length - 1) {
    for (let i = arr.length - 1; lastIdx >= 0; i--) {
      arr[i] = arr[lastIdx];
      if (arr[lastIdx] === 0 && lastIdx <= lastDuplicateZero) {
        arr[i - 1] = 0;
        i--;
      }
      lastIdx--; 
    }
  }
};
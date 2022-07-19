/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  
  const finalRange = [-1, -1];
  alteredBinarySearch(nums, target, 0, nums.length - 1, finalRange, true);
  alteredBinarySearch(nums, target, 0, nums.length - 1, finalRange, false);
  
  return finalRange;
};

const alteredBinarySearch = (arr, target, left, right, finalRange, goLeft) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1; 
    } else {
      if (goLeft) {
        if (mid === 0 || arr[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid === arr.length - 1 || arr[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
}
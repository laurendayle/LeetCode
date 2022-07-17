/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hash = new Map(); 
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      let prevIdx = hash.get(nums[i]);
      if (Math.abs(prevIdx - i) <= k) return true;
    }
    hash.set(nums[i], i); 
  }
  return false; 
};
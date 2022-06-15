/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hash = new Map(); 
  
  for (var i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      let index = hash.get(nums[i]);
      if (Math.abs(index - i) <= k) {
        return true; 
      }
    }
    hash.set(nums[i], i); 
  }
  return false; 
}
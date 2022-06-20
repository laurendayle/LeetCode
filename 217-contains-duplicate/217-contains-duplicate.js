/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hash = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return true; 
    }
    hash.set(nums[i]);
  }
  return false; 
};
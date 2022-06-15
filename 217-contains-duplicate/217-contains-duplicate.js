/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
  
  let hash = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.set(nums[i], 1);
    } else {
      return true; 
    }
  }
  return false; 
};
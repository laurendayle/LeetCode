/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  
  let hash = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (hash.get(nums[i]) === undefined) {
      hash.set(nums[i], 0);
    } else {
      return nums[i];
    }
  }
};
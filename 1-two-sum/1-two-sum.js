/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = new Map();
  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash.has(complement)) {
      return [hash.get(complement), i];
    }
    hash.set(nums[i], i); 
  }
};
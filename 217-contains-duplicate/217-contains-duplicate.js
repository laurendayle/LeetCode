/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < nums.length; i++) {
    let current = nums[i];
    for (var j = 0; j < nums.length; j++) {
      if (current === nums[j] && i !== j) {
        return true;
      }
    }
  }
  return false;
};
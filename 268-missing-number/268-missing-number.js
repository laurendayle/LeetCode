/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  nums.sort((a, b) => a - b);
  
  if (nums[nums.length - 1] !== nums.length) {
    return nums.length; 
  } else if (nums[0] !== 0) {
    return 0;
  }
  for (var i = 1; i < nums.length; i++) {
    let expected = nums[i - 1] + 1;
    if (nums[i] !== expected) {
      return expected;
    }
  }
  return -1; 
}
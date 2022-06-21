/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = nums => {
  
  for (var i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
}
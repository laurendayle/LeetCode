/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentSubarray = nums[0];
  let max = nums[0];
  for (var i = 1; i < nums.length; i++) {
    let num = nums[i];
    currentSubarray = Math.max(num, currentSubarray + num);
    max = Math.max(max, currentSubarray);
  }
  return max;
};
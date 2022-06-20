/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = nums => {

  let curr = nums[0];
  let max = nums[0];

  for (var i = 1; i < nums.length; i++) {
    let num = nums[i];
    curr = Math.max(curr + num, num);
    max = Math.max(max, curr);
  }
  return max;
}
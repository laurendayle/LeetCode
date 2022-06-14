/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {

  let count = 1; 
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count += (++i < nums.length ? 2 : 1);
    }
  } 
  return nums.length - count + (count % 2);
}
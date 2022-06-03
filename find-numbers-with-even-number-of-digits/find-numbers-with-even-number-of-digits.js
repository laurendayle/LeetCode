/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    let even = nums[i].toString().length % 2 === 0;
    if (even) {
      count++;
    }
  }
  return count;
};
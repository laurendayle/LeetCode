/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let longest = 1;
  let prev = nums[0];
  let curr = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev + 1) {
      curr++;
    } else if (nums[i] !== prev) {
      curr = 1;
    }
    prev = nums[i];
    longest = Math.max(longest, curr);
  }
  return longest;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) return 0; 
  
  nums.sort((a, b) => a - b); 
  
  let longest = 1,
      prev = nums[0],
      curr = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (prev + 1 === nums[i]) {
      curr++;
    } else if (nums[i] !== prev) {
      curr = 1; 
    }
    prev = nums[i];
    longest = Math.max(longest, curr); 
  }
  return longest; 
};
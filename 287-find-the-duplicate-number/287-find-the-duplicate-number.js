/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let hash = new Map(); 
  for (var i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return nums[i]; 
    }
    hash.set(nums[i]); 
  }
}
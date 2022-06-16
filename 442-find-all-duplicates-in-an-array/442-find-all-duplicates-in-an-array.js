/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

  let result = [],
      hash = new Map(); 
  for (var i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      result.push(nums[i]); 
    }
    hash.set(nums[i]); 
  }
  return result; 
}
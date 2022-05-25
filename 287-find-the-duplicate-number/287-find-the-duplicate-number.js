/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
  
  for (var i = 0; i < nums.length; i++) {
    var pointer = i + 1;
    
    while (pointer < nums.length) {
      if (nums[i] === nums[pointer]) {
        return nums[i];
      } else {
        pointer++;
      }
    }
  }
};
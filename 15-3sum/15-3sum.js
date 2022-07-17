/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(!nums || nums.length < 3) return [];

  nums.sort((a,b) => a-b);
  let result = [];

  for(let i=0; i<nums.length; i++) {
      if(i > 0 && nums[i-1] === nums[i]) continue;
      let remaining = 0 - nums[i];
      let [left, right] = [i+1, nums.length - 1];
      while(left < right) {
          let sum = nums[left] + nums[right];
          if(sum < remaining) left++;
          else if(sum > remaining) right--;
          else {
              let val = [nums[i], nums[left], nums[right]];
              result.push(val);
              left++;
              while(left < right && nums[left-1] === nums[left]) left++;

          }
      }
  }
  return result;
};
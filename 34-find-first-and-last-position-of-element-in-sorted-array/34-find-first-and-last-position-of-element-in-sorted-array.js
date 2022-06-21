/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let start = 0,
      end = nums.length;
  
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    console.log(nums[mid]);
    if (nums[mid] === target) {
      start = mid;
      end = mid; 
      if (nums[start - 1] === target) {
        while (nums[start - 1] === target) {
          start--;
        }
      }
      if (nums[end + 1] === target) {
        while (nums[end + 1] === target) {
          end++;
        }
      }
      return [start, end];
    } else if (nums[mid] > target) {
      end = mid; 
    } else if (nums[mid] < target) {
      start = mid + 1; 
    }
  }
  
  return [-1, -1];
};
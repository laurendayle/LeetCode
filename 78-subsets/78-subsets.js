/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = nums => {
  var result = [];
  helper(nums, result, [], 0);
  return result;
}

var helper = (nums, result, arr, start) => {
  var len = nums.length;

  result.push(Array.from(arr));
  if (start === len) return;

  for (var i = start; i < len; i++) {
    arr.push(nums[i]);
    helper(nums, result, arr, i + 1);
    arr.pop();
  }
}
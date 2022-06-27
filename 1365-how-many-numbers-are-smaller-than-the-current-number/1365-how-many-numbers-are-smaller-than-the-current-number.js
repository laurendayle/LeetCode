/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = nums => {

  let result = [];
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  }
  return result;
}
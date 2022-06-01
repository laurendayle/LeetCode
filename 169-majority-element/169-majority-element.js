/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  const counts = nums.reduce((acc, num) => {
    if (acc[num] === undefined) {
      acc[num] = 1;
    } else {
      acc[num]++;
    }
    return acc;
  }, {});
  for (const key in counts) {
    if (counts[key] > nums.length / 2) {
      return key;
    }
  }
    
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => {


  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] % 2 === 0) {
      [nums[fast],  nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
  }
  return nums;
}
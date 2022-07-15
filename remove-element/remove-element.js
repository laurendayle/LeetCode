/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {

  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] === val) {
      nums.splice(fast, 1);
      fast--;
    }
  }
  return nums.length; 
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = nums => {

  const result = [];
  const numsArr = [...nums];
  numsArr.sort((a, b) => a - b);
  
  for (let i of nums) {
    const index = numsArr.indexOf(i);
    result.push(index);
  }
  return result;
}
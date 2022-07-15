/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => {

  const squared = nums.map((num) => {
    return num * num;
  }).sort((a, b) => a - b);

  return squared;
}
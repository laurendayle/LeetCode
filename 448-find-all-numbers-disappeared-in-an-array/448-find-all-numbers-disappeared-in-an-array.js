/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {

  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], ~~hash.get(nums[i]) + 1);
  }

  let j = 1;

  const res = [];
  const n = nums.length;
  while (j <= n) {
    if (!hash.has(j)) {
      res.push(j);
    }
    j++;
  }
  return res; 
}
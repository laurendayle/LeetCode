/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = nums => {
  return nums.reduce((subsets, value) => {
    return subsets.concat(
      subsets.map(set => [value, ...set])
    )
  }, [[]]);
}
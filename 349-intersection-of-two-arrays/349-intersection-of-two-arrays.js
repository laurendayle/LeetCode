/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = (nums1, nums2) => {

  let set1 = new Set(nums1);
  let set2 = new Set(nums2); 

  const intersection = new Set(
    [...set1].filter(element => set2.has(element))
  ); 

  return [...intersection];
}
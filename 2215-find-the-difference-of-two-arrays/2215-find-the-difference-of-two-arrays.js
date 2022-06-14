/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

  let map1 = new Map();
  let map2 = new Map(); 
  let result = [[], []];
  let longest = nums1.length > nums2.length ? nums1 : nums2; 

  for (var i = 0; i < longest.length; i++) {
    map1.set(nums1[i], i);
    map2.set(nums2[i], i); 
  }

  for (var i = 0; i < nums1.length; i++) {
    if (!map2.has(nums1[i])) {
      if (result[0].indexOf(nums1[i]) === -1) {
        result[0].push(nums1[i]);
      }

    }
  }
  for (var i = 0; i < nums2.length; i++) { 
    if (!map1.has(nums2[i])) {
      if (result[1].indexOf(nums2[i]) === -1) {
        result[1].push(nums2[i]);
      }
    }
  }
  return result; 
}
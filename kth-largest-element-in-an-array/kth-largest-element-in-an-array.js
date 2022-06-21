/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = (arr, k) => {

  arr.sort((a, b) => a - b); 

  return arr[arr.length - k];
}
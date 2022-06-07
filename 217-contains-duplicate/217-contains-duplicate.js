/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(arr) {

  arr.sort();
  let counts = {};
  for (var i = 0; i < arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};
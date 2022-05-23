/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  let stop = false;

  while (!stop) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else if (numbers[p1] + numbers[p2] < target) {
      p1++;
    } else {
      stop = true;
    }
  }
  return [p1 + 1, p2 + 1];
};
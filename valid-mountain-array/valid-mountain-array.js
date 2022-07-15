/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = arr => {

  let [p1, p2] = [0, arr.length - 1];
  while (arr[p1] < arr[p1 + 1]) p1++;
  while (arr[p2] < arr[p2 - 1]) p2--;

  return p1 === p2 && p1 !== 0 && p2 !== arr.length - 1;
}
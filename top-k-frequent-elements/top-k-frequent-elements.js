/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (arr, k) => {

  let hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    hash.set(arr[i], ~~hash.get(arr[i]) + 1);
  }

  const freqs = [...hash].sort((a, b) => b[1] - a[1]);
  const res = [];

  let i = 0;
  while (res.length < k) {
    res.push(freqs[i][0]);
    i++;
  }
  return res;
}
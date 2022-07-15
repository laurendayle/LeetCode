/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr => {

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
      return arr;
    }
    arr[i] = Math.max(...arr.slice(i + 1));
  }
}

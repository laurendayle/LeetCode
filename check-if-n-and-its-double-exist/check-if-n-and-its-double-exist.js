/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = arr => {

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j] === 2 * num) {
        console.log(arr[j], 2 * num, i); 
        return true; 
      }
    }
  }
  return false;
}
// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine()); 
    let arr = new Array(n);
    let inputArr2 = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j < n;j++){
      arr[j] = inputArr2[j];
    }
    let obj = new Solution();
    let res = obj.minJumps(arr,n);
    console.log(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    minJumps(arr,n){
  if (n <= 1) return 0;

  if (arr[0] === 0) return -1;

  let maxReach = arr[0],
      step = arr[0],
      jump = 1;

  let i = 1;
  for (i = 1; i < n; i++) {

    if (i === n - 1) return jump;

    maxReach = Math.max(maxReach, i + arr[i]);

    step--;
    
    if (step === 0) {
      jump++;

      if (i >= maxReach) return -1; 
      step = maxReach - i;
    }
  }
  return -1; 
    }
}
// { Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.binarysearch(arr, n, k);
        console.log(res);
    }
} // } Driver Code Ends
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    binarysearch(arr, n, k) {
        let start = 0; 
        let end = n - 1; 
        
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === k) {
                return mid;
            } else if (arr[mid] > k) {
                end = mid - 1;
            } else if (arr[mid] < k) {
                start = mid + 1;
            }
        }
        return -1;
    }
}

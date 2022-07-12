// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        if(obj.ispar(str)){
            console.log("balanced");
        }
        else{
            console.log("not balanced");
        }
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} x
 * @returns {boolean}
*/

class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(str)
    {
      const pairs = {
    '(':')',
    '[':']',
    '{':'}'
  }

  const stack = [];

  let open = 0, closed = 0;

  for (let i = 0; i < str.length; i++) {
    if (pairs[str[i]]) {
      stack.push(pairs[str[i]]);
      open++;
    } else {
      let next = stack.pop();
      if (str[i] !== next) return false;
      closed++;
    }
  }
  return open === closed;
    }
}
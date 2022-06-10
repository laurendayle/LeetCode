/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  
  if (!root) {
    return [];
  }
  const queue = [root];
  const output = [];
  while (queue.length) {
    // remove all current nodes in the queue and add each 
    const len = queue.length; 
    const row = [];
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      // push current node val to the row array 
      row.push(curr.val);
    }
    // push the current row array into the output array 
    output.push(row);
  }
  return output; 
};
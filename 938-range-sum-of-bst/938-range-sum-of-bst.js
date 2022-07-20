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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  if (!root) return 0;
  
  let sum = 0;
  
  const stack = [root];
  
  while (stack.length) {
    let node = stack.pop();
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return sum;
};
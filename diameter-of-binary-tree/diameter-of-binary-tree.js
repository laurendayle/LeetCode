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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  let max = 0; 
  const getDiameter = (root) => {
    if (!root) return 0;
    
    let left = getDiameter(root.left);
    let right = getDiameter(root.right);
    
    max = Math.max(left + right, max);
    return Math.max(left, right) + 1;
  }
  getDiameter(root);
  return max;
};
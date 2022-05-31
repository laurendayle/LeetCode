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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }
  sum -= root.val;
  if ((root.left === null) && (root.right === null)) {
    return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
  
};
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  return traverse(root, []); 
}

var traverse = (root, result) => {
  if (!root) return [];
  
  if (root.left) result = traverse(root.left, result);
  result.push(root.val);
  if (root.right) result = traverse(root.right, result);
  
  return result; 
}
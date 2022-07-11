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
var inorderTraversal = function(root, values = []) {
  if (!root) return values;
  
  inorderTraversal(root.left, values);
  values.push(root.val);
  inorderTraversal(root.right, values); 
  
  return values; 
};
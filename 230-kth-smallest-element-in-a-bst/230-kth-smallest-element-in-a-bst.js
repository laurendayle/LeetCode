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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {


  const traverse = (node) => {
    if (node === null) {
      return [];
    }
    return [...traverse(node.left), node.val, ...traverse(node.right)]; 
  }
  let result = traverse(root);
  return result[k - 1];
}
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
var countUnivalSubtrees = function(root) {

  
  var isUnivalSubtree = function(root) {
    if (!root) {
      return true; 
    }
    const { left, right } = root;
    const isLeftUnival = isUnivalSubtree(left);
    const isRightUnival = isUnivalSubtree(right);
    if (!isLeftUnival || !isRightUnival ) {
      return false; 
    }
    if ((left && root.val !== left.val) || (right && root.val !== right.val)) {
      return false;
    }
    count++;
    return true; 
  }
  let count = 0; 
  isUnivalSubtree(root);
  return count; 
};
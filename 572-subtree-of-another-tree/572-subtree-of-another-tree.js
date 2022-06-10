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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.val === subRoot.val && isSameTree(node, subRoot)) {
      return true; 
    }
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return false; 
};

var isSameTree = function(node, subNode) {
  if (node === null && subNode === null) {
    return true; 
  }
  if (node === null || subNode === null) {
    return false; 
  }
  if (node.val !== subNode.val) {
    return false; 
  }
  return isSameTree(node.left, subNode.left) && isSameTree(node.right, subNode.right);
}
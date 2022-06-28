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
 * @return {boolean}
 */
var isSymmetric = root => {
  if (!root) return true; 

  return isSameTree(root.left, root.right);
}

var isSameTree = (treeA, treeB) => {
  if (!treeA && !treeB) return true;
  if (!treeA || !treeB) return false;

  return isSameTree(treeA.left, treeB.right) && isSameTree(treeA.right, treeB.left) && (treeA.val === treeB.val);
}
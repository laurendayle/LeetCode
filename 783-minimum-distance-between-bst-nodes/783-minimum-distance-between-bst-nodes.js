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
var minDiffInBST = function(root) {
  let prev = null,
      res = Infinity;

  const dfs = root => {
    if (!root) return;
    dfs(root.left);
    if (prev !== null) {
      res = Math.min(res, root.val - prev);
    }
    prev = root.val;
    dfs(root.right); 
  }
  
  dfs(root);
  return res;
};
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

var maxPathSum = root => {
  let max = -Infinity;
  
  const dfs = node => {
    if (!node) return 0;
    
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);
    
    let newPath = node.val + left + right;
    max = Math.max(max, newPath);
    
    return node.val + Math.max(left, right);
  }
  dfs(root);
  return max;
}
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
var findBottomLeftValue = root => {

  let result = 0,
      maxDepth = 0; 

  const dfs = (node, depth) => {
    if (!node) return;

    const { val, left, right } = node; 
    if (depth > maxDepth) {
      result = val;
      maxDepth = depth;
    }
    dfs(left, depth + 1);
    dfs(right, depth + 1);
  }
  dfs(root, 1);
  return result; 
}
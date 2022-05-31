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
  
  const dfs = (root) => {
    if (!root || stack.length > k) {
      return null; 
    }

    dfs(root.left);
    stack.push(root.val);
    dfs(root.right); 
  }
  let stack = [];
  dfs(root);
  return stack[k - 1];
};




	
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = (inorder, postorder) => {
  let hash = new Map();
  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i;
  }
  var helper = (start, end) => {
    if (start > end) return null; 

    let val = postorder.pop(),
        root = new TreeNode(val);

    root.right = helper(hash[val] + 1, end);
    root.left = helper(start, hash[val] - 1);

    return root;
  }
  return helper(0, inorder.length - 1);
}
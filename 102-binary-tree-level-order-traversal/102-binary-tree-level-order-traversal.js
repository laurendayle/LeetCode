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
 * @return {number[][]}
 */

const levelOrder = (root) => {
  let result = [];
  
  if (!root) {
    return result;
  }
  recurse(root, 0, result);
  return result;
}

const recurse = (node, level, result) => {
  if (result.length === level) {
    result.push([]);
  }
  result[level].push(node.val);
  
  if (node.left) {
    recurse(node.left, level + 1, result);
  }
  if (node.right) {
    recurse(node.right, level + 1, result);
  }
}

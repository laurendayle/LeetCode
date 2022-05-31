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
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [root];
  while (queue.length) {
    let subarr = [];
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.pop();
      subarr.push(node.val);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    result.push(subarr);
  }
  return result; 
}




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
var zigzagLevelOrder = root => {
  if (!root) return [];

  const queue = [root],
        result = [];
  let leftRight = true; 

  while (queue.length) {
    let n = queue.length,
        subarr = [];

    for (var i = 0; i < n; i++) {
      const node = queue.shift();
      subarr.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (!leftRight) {
      subarr.reverse();
    }
    leftRight = !leftRight;
    result.push(subarr);
  }
  return result;
}
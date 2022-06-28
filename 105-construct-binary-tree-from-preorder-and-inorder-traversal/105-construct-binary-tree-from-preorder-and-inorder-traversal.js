/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = (preorder, inorder) => {
  let hash = new Map();
  for (var i = 0; i < inorder.length; i++) {
    hash.set(inorder[i], i);
  }

  let rootVal = preorder[0];
  let preIndex = preorder.indexOf(rootVal);

  var arrayToTree = (preorder, start, end) => {
    if (start > end) return null; 

    let rootVal = preorder[preIndex++],
        root = new TreeNode(rootVal);

    root.left = arrayToTree(preorder, start, hash.get(rootVal) - 1);
    root.right = arrayToTree(preorder, hash.get(rootVal) + 1, end);

    return root;
  }
  return arrayToTree(preorder, 0, preorder.length - 1);
}
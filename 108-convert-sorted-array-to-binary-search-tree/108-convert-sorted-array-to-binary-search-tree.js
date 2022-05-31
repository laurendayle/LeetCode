/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    
  const traverse = (left, right) => {
    if (left > right) { // invalid index 
      return null;
    }
    const mid = left + Math.floor((right - left) / 2); // get middle index 
    const root = new TreeNode(nums[mid]); // create node with middle value 
    
    root.left = traverse(left, mid - 1); // create left subtree 
    root.right = traverse(mid + 1, right); // create right subtree 
    
    return root; 
  }
  
  return traverse(0, nums.length - 1); // divide array into left and right subtrees 
};

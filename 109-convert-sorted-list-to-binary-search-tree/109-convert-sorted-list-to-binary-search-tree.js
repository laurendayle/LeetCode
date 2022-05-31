/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
  return toBST(toArray(head));
}

const toArray = (head) => {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

const toBST = (arr, left = 0, right = arr.length) => {
  if (left === right) {
    return null;
  }
  const mid = Math.floor((left + right) / 2);
  const root = new TreeNode(arr[mid]);
  root.left = toBST(arr, left, mid);
  root.right = toBST(arr, mid + 1, right);
  return root;
}

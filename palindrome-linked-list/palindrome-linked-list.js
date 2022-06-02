/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  
  if (head === null) {
    return false;
  }
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  let reversed = arr.slice().reverse();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
};
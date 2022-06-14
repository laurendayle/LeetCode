/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p; 
};

var reverseList = function(head) {
  if (!head) {
    return null;
  }
  
  let prev = null,
      curr = head;
  
  while (curr) {
    let nextTmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTmp; 
  }
  return prev;
}
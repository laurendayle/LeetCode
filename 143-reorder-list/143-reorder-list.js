/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null) return; 
  let fast = head,
      slow = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let prev = null,
      curr = slow;
  let tmp; 
  while (curr !== null) {
    tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp; 
  }
  
  let first = head,
      second = prev;
  
  while (second.next !== null) {
    tmp = first.next;
    first.next = second; 
    first = tmp; 
    
    tmp = second.next;
    second.next = first;
    second = tmp; 
  }
};


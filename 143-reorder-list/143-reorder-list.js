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
  // find mid
  let slow = head,
      fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse second half of linked list
  let prev = null,
      curr = slow;

  while (curr !== null) {
    let tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  // connect the nodes
  let end = prev,
      start = head;
  while (end.next !== null) {
    let stemp = start.next;
    let etemp = end.next;
    start.next = end;
    end.next = stemp;
    start = stemp;
    end = etemp;
  }
  return head; 
}

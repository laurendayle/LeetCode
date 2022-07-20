/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {

  let count = 0,
      ptr = head;

  while (count < k && ptr !== null) {
    ptr = ptr.next;
    count++;
  }

  if (count === k) {
    let reversedHead = reverse(head, k);
    head.next = reverseKGroup(ptr, k);
    return reversedHead;
  }
  return head;
}

const reverse = (head, k) => {
  let newHead = null,
      ptr = head;

  while (k > 0) {
    let next = ptr.next;
    ptr.next = newHead;
    newHead = ptr; 
    ptr = next;
    k--;
  }
  return newHead; 
}
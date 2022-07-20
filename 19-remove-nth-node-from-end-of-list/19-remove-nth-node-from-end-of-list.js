/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {

  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  let length = 0,
      current = head;

  while (current) {
    length++;
    current = current.next;
  }

  length -= n; 
  current = dummyHead;

  while (length > 0) {
    length--;
    current = current.next;
  }
  current.next = current.next.next;
  return dummyHead.next;
}
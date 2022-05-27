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
var removeNthFromEnd = function(head, n) {
    
    let current = head;
    let length = 0;
    while (current) {
        length++;
        current = current.next;
    }
    
    if (length - n - 1 < 0) {
        return head.next;
    }
    
    let list = head;
    for (let i = 0; i < length; i++) {
        if (i === length - n - 1) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    
    return list;
};
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

function f(curr) {
    // base case
    if(curr.next == null) return curr;
    let newHead = f(curr.next); // that go and reverse everything from curr.next
    curr.next.next = curr;
    curr.next = null;
    return newHead;
}

var reverseList = function(head) {
    if(head == null) return null;
    head = f(head);
    return head;
};
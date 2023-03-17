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

start = null;

function f(curr) {
   if(curr == null) return false;
    let result = f(curr.next);
    if(result == false) {
        let t = start.val;
        start.val = curr.val;
        curr.val = t;
        let response = (start == curr) || (start.next == curr);
        start = start.next;
        return response;
    } else {
        return result;
    }
}

var reverseList = function(head) {
    start = head;
    f(head);
    return head;
};
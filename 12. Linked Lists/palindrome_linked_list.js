/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**https://leetcode.com/problems/palindrome-linked-list/submissions/
 * @param {ListNode} head
 * @return {boolean}
 */
start = null;
function f(curr) {
    if(curr == null) return true;
    let res = f(curr.next);
    if(res == false) return res;
    if(start.val == curr.val) {
        start = start.next;
        return true;
    } else {
        return false;
    }
}
var isPalindrome = function(head) {
    start = head;
    return f(head);
};
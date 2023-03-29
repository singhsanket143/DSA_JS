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
let start = null;
function f(end) {
    if(end == null) return false;
    let b = f(end.next);
    //console.log(start.val, end.val)
    if(!b && (start.next == end || start == end)) {
        //console.log("incoming",end.val);
        end.next = null;
        return true;
    }
    if(b == false) {
        let nextOfStart = start.next;
        start.next = end;
        end.next = nextOfStart;
        start = nextOfStart;
    }
    return b;
}

var reorderList = function(head) {
    if(head == null) return null;
    start = head;
    f(head);
    return head;
};
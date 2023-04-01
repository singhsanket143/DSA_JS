/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
        this.prev = null;
    }
}
class Deque{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAtFront(x) {
        if(this.head == null) {
            this.head = this.tail = new Node(x);
            return;
        }
        let n = new Node(x);
        n.next = this.head;
        this.head.prev = n;
        this.head = n;
    }

    addAtBack(x) {
        if(this.head == null) {
            this.head = this.tail = new Node(x);
            return;
        }
        let n = new Node(x);
        this.tail.next = n;
        n.prev = this.tail;
        this.tail = n;
    }

    removeAtFront() {
        if(this.head == null) return;
        let newHead = this.head.next;
        this.head.next = null;
        if(newHead != null) newHead.prev = null;
        this.head = newHead;
        if(this.head == null) this.tail = null;
    }

    removeAtBack() {
        if(this.head == null) return;
        let newTail = this.tail.prev;
        this.tail.prev = null;
        if(newTail != null) newTail.next = null;
        this.tail = newTail;
        if(this.tail == null) this.head = null;
    }

    getBack() {
        if(this.tail == null) return undefined;
        return this.tail.data;
    }
    getFront() {
        if(this.head == null) return undefined;
        return this.head.data;
    }
    empty() {
        return this.head == null;
    }

    display() {
        let temp = this.head;
        let str = "";
        while(temp != null) {
            str += temp.data + " -> ";
            temp = temp.next;
        }
        return str;
    }

}

var maxSlidingWindow = function(nums, k) {
   let dq = new Deque();
    for(let i = 0; i < k; i++) {
        while(!dq.empty() && nums[dq.getBack()] < nums[i]) {
            dq.removeAtBack();
        }
        dq.addAtBack(i);
    }
    let result = [];
    result.push(nums[dq.getFront()]);
    for(let i = k; i < nums.length; i++) {
        if(i-k == dq.getFront()) dq.removeAtFront();
        while(!dq.empty() && nums[dq.getBack()] < nums[i]) {
            dq.removeAtBack();
        }
        dq.addAtBack(i);
        result.push(nums[dq.getFront()]);
    }
    return result;
};
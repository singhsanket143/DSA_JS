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

let dq = new Deque();

dq.addAtBack(10); // 2 ->0 ->10 -> 20 -> 30
dq.addAtBack(20);
dq.addAtBack(30);
dq.addAtFront(0);
dq.addAtFront(2);

console.log(dq.display());

dq.removeAtBack();
dq.removeAtFront();

console.log(dq.display());


dq.removeAtBack();
dq.removeAtFront();

console.log(dq.display());

dq.removeAtBack();
dq.removeAtFront();

console.log(dq.display());

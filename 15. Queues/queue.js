function createNode(value) {
    return {
        data: value,
        next: null
    };
}
class Queue {
    constructor() {
        this.head = null; // front
        this.tail = null; // back
    }

    enqueue(x) {
        let newNode = createNode(x);
        // add at tail
        if(this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if(this.head == null) return;
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        if(this.head == null) {
            this.tail = null;
        }
    }

    getFront() {
        if(this.head == null) return;
        return this.head.data;
    }

    getBack() {
        if(this.head == null) return;
        return this.tail.data;
    }

    empty() {
        return this.head == null;
    }
}

let qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
console.log(qu.getFront(), qu.getBack());
qu.dequeue();
qu.dequeue();
qu.dequeue();
qu.dequeue();
console.log(qu.getFront(), qu.getBack());
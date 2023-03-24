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

module.exports = { 
 //param A : string
 //return a strings
    solve : function(A){
        let b = "";
        let qu = new Queue();
        let freqMap = {};
        for(let i = 0; i < A.length; i++) {
           let currChar = A[i];
            if(!freqMap[currChar]) {
                freqMap[currChar] = 1;
            } else {
                freqMap[currChar]++;
            }
            
            if(freqMap[currChar] == 1) {
                qu.enqueue(currChar);
            }
            
            let front = qu.getFront();
            while(!qu.empty() && freqMap[front] != 1) {
                qu.dequeue();
                front = qu.getFront();
            }
            if(qu.empty()) {
                b += "#";
            } else {
                b += qu.getFront();
            }
        }
        return b;
    }
};

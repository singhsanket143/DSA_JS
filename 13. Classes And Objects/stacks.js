class Stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        this.#arr.push(x);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        if(this.#arr.length == 0) return undefined;
        return this.#arr[this.#arr.length - 1];
    }
}

const st = new Stack();
st.push(10);
st.push(20);
console.log(st.top());
st.push(30);
st.push(40);
st.pop();
console.log(st.top())

// [1,2,3]
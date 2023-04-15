class Heap {
    #arr;
    constructor(cmp) {
        this.#arr = [];
        this.comparator = cmp; // function
    }
    swap(i, j) {
        let temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }
    upheapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx > 0) { // if idx is 0 you dont have a parent
            let pi = Math.floor((idx - 1) / 2);
            if(this.comparator(this.#arr[idx] , this.#arr[pi])) {
                // swap
               this.swap(idx, pi);
            } else {
                // no more upheapify needed
                break;
            }
            idx = pi;
        }
    }
    downheapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx < this.#arr.length) {
            let left = 2*idx+1;
            let right = 2*idx+2;
            let result = idx; // assume that max element is the root;
            if(left < this.#arr.length && this.comparator(this.#arr[left] , this.#arr[result])) {
                // if left child exists and left node is bigger than the last assumed result
                result = left;  // make left child the new result candidate
            }
            if(right < this.#arr.length && this.comparator(this.#arr[right] , this.#arr[result])) {
                // if right child exists and right node is bigger than the last assumed result
                result = right;
            }
            // swap the idx with result
            if(idx == result) {
                // root was the largest
                break;
            }
            this.swap(idx, result);
            idx = result;
        }
    }
    insert(data) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        this.#arr.push(data);
        this.upheapify(this.#arr.length - 1);
    }
    get() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        if(this.#arr.length > 0) {
            return this.#arr[0];
        } else {
            return undefined;
        }
    }
    remove() {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        // swap root with last element
        this.swap(0, this.#arr.length - 1);
        this.#arr.pop();
        this.downheapify(0);
    }
    display() {
        console.log(this.#arr);
    }
}

const hp = new Heap(function cmp(a, b) {return a < b}); // a > b -> maxheap ; a < b -> min heap
hp.insert(10);
hp.insert(2);
hp.insert(6);
hp.insert(19);
hp.insert(3);
hp.insert(4);
hp.display();
hp.insert(20);
hp.display();
hp.remove();
hp.remove();
hp.display();

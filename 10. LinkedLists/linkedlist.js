function createNode(value) {
    return {
        data: value,
        next: null
    }
}

function display(head) {
    let temp = head;
    let result = "";
    while(temp != null) {
        result = result + temp.data + " -> ";
        temp = temp.next;
    }
    result = result + "X";
    console.log(result);
}

function addAtHead(head, data) {
    let newNode = createNode(data); // this create a new node with data 
    newNode.next = head; // this step attaches the new node to the head of the list
    head = newNode; // this step updates the head of the list
    return head; // return the head
}

function addAtTail(head, data) {
    if(head == null) {
        // when linked list is empty
        return addAtHead(head, data);
    }
    // get access to the tail node
    let temp = head;
    while(temp.next != null) {
        temp = temp.next;
    }
    // temp variable has access to the tail node
    let newNode = createNode(data);
    temp.next = newNode;

    return head;
}

function addAt(head, i, data) { // assume that i will be always less than ll length
    /**
     * Time: O(n)
     */
    if(head == null) {
        return addAtHead(head, data);
    }
    let temp = head;
    let count = 0;
    while(count < i-1) {
        temp = temp.next;
        count += 1;
    }
    // temp points at the i-1th node
    let prevI = temp.next;

    let newNode = createNode(data);
    temp.next = newNode;
    newNode.next = prevI;
    return head;
}

function removeHead(head) {
    if(head == null) return null; // if linked list is empty no need for ay operation
    let newHead = head.next; // store the access of the new head to be made
    head.next = null; // remove the linking of the old head
    return newHead;
}

function removeTail(head) {
    if(head == null) {
        // ll is empty
        return null;
    }
    if(head.next == null) {
        // only a single node which head and tail both
        return null;
    }
    let temp = head;
    while(temp.next.next != null) {
        temp = temp.next;
    }
    // temp variable has access to the second last node
    temp.next = null;
    return head;
}

function removeAt(head, i) {
    if(head == null) {
        return head;
    }
    if(head.next == null) {
        // single node in the list
        return null;
    }
    let temp = head;
    let count = 0;
    while(temp.next != null && count < i-1) {
        temp = temp.next;
        count += 1;
    }

    if(temp.next == null && count <= i-1) { // i is greater than length of ll
        return head;
    }
    // temp points at the i-1th node
    let nodeToBeRemoved = temp.next;
    let nextOfRemoved = temp.next.next;
    temp.next = nextOfRemoved;
    nodeToBeRemoved.next = null;
    return head;
}

function midNode(head) {
    /**
     * https://leetcode.com/problems/middle-of-the-linked-list/
     * Time: O(N)
     * Space: O(1)
     */
    if(head == null) return null;
    let slow = head;
    let fast = head;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast.next == null) return slow
    else return slow.next;
};

let head = null; // when the linked list is empty head is null

head = addAtHead(head, 10); // 10->
head = addAtHead(head, 20); // 20->10->x
head = addAtHead(head, 30); // 30->20->10->x
head = addAtHead(head, 40); // 40->30->20->10->x
head = addAtHead(head, 50); // 50->40->30->20->10->x
head = addAtTail(head, 100);
head = addAtTail(head, 90);

display(head);
head = removeAt(head, 9);
display(head);
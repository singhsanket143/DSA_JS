function createNode(data) {
    return {
        data: data,
        next: null,
        prev: null
    };
}

function addAtHead(head, data) {
    if(head == null) {
        // ll is empty
        return createNode(data);
    }
    let newNode = createNode(data);
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
    return head;
}

function addAtTail(head, data) {
    if(head == null) {
        return addAtHead(head, data);
    }
    let temp = head;
    while(temp.next != null) {
        temp = temp.next;
    }
    // at the end of the loop, temp will be at the tail
    let newNode = createNode(data);
    temp.next = newNode;
    newNode.prev = temp;
    return head;
}

function removeAtHead(head) {
    if(head == null) return null;
    if(head.next == null) {
        // single node in dll
        return null;
    }
    let nextNode = head.next;
    head.next = null;
    nextNode.prev = null;
    head = nextNode;
    return head;
}

function removeAtTail(head) {
    if(head == null) return null;
    if(head.next == null) {
        // single node in dll
        return null;
    }
    let temp = head;
    while(temp.next.next != null) {
        temp = temp.next;
    }
    // at the end of the loop temp will be at the prev of tail
    let tail = temp.next;
    tail.prev = null;
    temp.next = null;
    return head;
}

function display(head) {
    let temp = head;
    let str = "X <-> ";
    while(temp != null) {
        str += temp.data + " <-> ";
        temp = temp.next;
    }
    str += "X";
    console.log(str);
}

let head = null;
head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
head = addAtHead(head, 40);
head = addAtTail(head, 100);
display(head);
head = remove(head);
display(head);

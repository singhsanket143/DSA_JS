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

let head = null; // when the linked list is empty head is null

head = addAtHead(head, 10); // 10->
head = addAtHead(head, 20); // 20->10->x
head = addAtHead(head, 30); // 30->20->10->x
head = addAtHead(head, 40); // 40->30->20->10->x
head = addAtHead(head, 50); // 50->40->30->20->10->x
head = addAtTail(head, 100);
head = addAtTail(head, 90);

display(head);

head = removeHead(head);
head = removeHead(head);
head = removeTail(head);
head = removeTail(head);
display(head);

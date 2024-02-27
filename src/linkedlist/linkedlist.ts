class Node<T> {
    val: T;
    next: Node<T> | null;
    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

function printLinkedList<T>(head: Node<T> | null) {
    if (head === null) return;
    console.log(head.val);
    return printLinkedList(head.next);
}

export { Node, printLinkedList };
